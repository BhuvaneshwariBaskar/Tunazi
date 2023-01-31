// const INITIAL_STATE = {
//     user_id: '',
//     name: '',
//     email: '',
//     password: '',

// }

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return action.payload;
        case 'LOGOUT_USER':
            return null;
        default:
            return state;
    }
};

export default userReducer;