import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
    selectUser, //  the array is optional
    (user) => user.currentUser
);