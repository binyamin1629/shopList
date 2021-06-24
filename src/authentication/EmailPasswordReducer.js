


const initialstate = {

    user: {},
    err: '',
    isLoginFailed: false,
    newAction: false,

}


const EmailPsswordReducer=(state=initialstate,action)=>{

        switch (action.type) {
            case 'SginIn_success':
               
            return{
                ...state,
                user:action.payload
            }

            case 'Login_success':
               
                return{
                    
                    ...state.user,
                    user:action.payload
                }   

            case 'errorFail':
                return{
                    ...state,
                    err:action.payload
                }
            case 'SginOut':
                return{
                    ...state,
                    user:action.payload
                }

            default:
                return state;
        }


}

export default EmailPsswordReducer