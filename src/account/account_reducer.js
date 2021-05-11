import {
    IS_LOGIN_PAGE,
} from './account_action';


export default function AccountReducer(state = {}, action) {
    switch (action.type) {
        
        case IS_LOGIN_PAGE:
            return { isLoginPage: action.payload }
        default:
            return state;
    }

}

