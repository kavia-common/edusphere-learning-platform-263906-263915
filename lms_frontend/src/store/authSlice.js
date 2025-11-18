import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSupabaseClient } from "../lib/supabaseClient";

/**
 * Role resolution: fetch from user metadata or a "roles" table via RLS.
 * For this scaffold, prefer user.app_metadata.role or user.user_metadata.role.
 */
const resolveRole = (user) => {
  const role =
    user?.app_metadata?.role ||
    user?.user_metadata?.role ||
    (user ? "student" : "guest");
  return role;
};

export const initSession = createAsyncThunk("auth/initSession", async () => {
  const supabase = getSupabaseClient();
  const { data } = await supabase.auth.getSession();
  const session = data?.session || null;
  const user = session?.user || null;
  return { session, user, role: resolveRole(user) };
});

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    const session = data?.session || null;
    const user = session?.user || data?.user || null;
    return { session, user, role: resolveRole(user) };
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    const supabase = getSupabaseClient();
    const emailRedirectTo = `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/auth/callback`;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo
      }
    });
    if (error) throw error;
    const user = data?.user || null;
    return { session: null, user, role: resolveRole(user) };
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  const supabase = getSupabaseClient();
  await supabase.auth.signOut();
  return { session: null, user: null, role: "guest" };
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    session: null,
    user: null,
    role: "guest",
    status: "idle",
    error: null,
    initialized: false
  },
  reducers: {
    setAuthState(state, action) {
      const { session, user } = action.payload || {};
      state.session = session;
      state.user = user || session?.user || null;
      state.role = resolveRole(state.user);
      state.initialized = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initSession.pending, (state) => {
        state.status = "loading";
      })
      .addCase(initSession.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.session = action.payload.session;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.initialized = true;
      })
      .addCase(initSession.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to init session";
        state.initialized = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.session = action.payload.session;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.session = null;
        state.user = null;
        state.role = "guest";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = action.payload.role;
      });
  }
});

export const { setAuthState } = authSlice.actions;

export const registerAuthListener = (dispatch) => {
  const supabase = getSupabaseClient();
  // Keep a single auth listener that updates the store
  supabase.auth.onAuthStateChange((_event, session) => {
    dispatch(setAuthState({ session, user: session?.user || null }));
  });
};

export default authSlice.reducer;
