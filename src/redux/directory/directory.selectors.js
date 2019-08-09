import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectCurrentUser = createSelector([ selectDirectory ], (directory) => directory.sections);
