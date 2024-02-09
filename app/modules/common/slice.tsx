/**
 * Common slice
 * @format
 */

import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loader: false,
  user: null,
  activeSection: null,
  authToken: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeAppSection(state, action) {
      state.activeSection = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    presentLoader(state) {
      state.loader = true;
    },
    dismissLoader(state) {
      state.loader = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logoutApp, () => {
      return initialState;
    });
  },
});

// Reducer )--------------------------------------
export const commonReducer = commonSlice.reducer;

// Actions )-------------------------------------
export const {
  presentLoader,
  dismissLoader,
  setUser,
  setAuthToken,
  changeAppSection,
} = commonSlice.actions;

//Other Actions

// Create loader
export const createLoader = () => {
  return {
    present: () => presentLoader(),
    dismiss: () => dismissLoader(),
  };
};

export const logoutApp = createAction('COMMON/LOGOUT');
