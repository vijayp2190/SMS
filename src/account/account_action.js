export const  IS_LOGIN_PAGE = 'IS_LOGIN_PAGE';
export function isLoginPage(data){
    return function(dispatch){
    dispatch({
        type:IS_LOGIN_PAGE,
        payload:data
    })
    }
}

   
