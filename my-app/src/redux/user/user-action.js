import {userActionTypes} from './user.type';
const currentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload:user
});
export default currentUser;