const INITIAL_STATE = {
    user: null,
    token: null,
    error: null,
    isLoading: false
}
const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'register_user':
            return {...state, isLoading: true};
        case 'register_ok':
            return {...state, user: action.payload, error:null, isLoading: false}
        case 'register_ko':
            return {...state, error: action.payload, isLoading: false}
        case 'login_user':
            return {...state, isLoading: true};
        case 'login_user_ok':
            return {...state, user: action.payload, error:null, isLoading: false}
        case 'login_user_ko':
            return {...state, error: action.payload, isLoading: false}
        case 'logout':
            return {...state, isLoading: true};
        case 'logout_ko':
            return {...state, error: action.payload, isLoading: false}; 
        default:
            return state;
    }
}

export default authReducer;