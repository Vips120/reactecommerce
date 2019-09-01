import {createSelector} from 'reselect';
const allUser = state => state.user;
const selectUser = state => state.user.currentUser;
export const allUsers = createSelector(
    [allUser],
    user => user
);
export const currentUsers = createSelector(
    [selectUser],
    data => data
);