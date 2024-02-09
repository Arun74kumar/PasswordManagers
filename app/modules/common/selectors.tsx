/**
 * Common selectors
 * @format
 */

import type { RootState } from '@app/redux';

const commonReducer = (state: RootState) => state.commonReducer;

export const selectLoader = (state: RootState) => commonReducer(state).loader;

export const selectUser = (state: RootState) => commonReducer(state).user;

export const selectActiveSection = (state: RootState) =>
  commonReducer(state).activeSection;

export const selectAuthToken = (state: RootState) =>
  commonReducer(state).authToken;
