import Rect from 'react'
import auth from '@react-native-firebase/auth';

//EmailPasswordHandling


export const sginIn=(email,password)=>{


    if(email.length<6||password.length<6){
        const err={
            message:'Filed canot be empty'
        }
        return (dispatch) =>{
                dispatch(SginOrLoginInFaild(err))
        }
    }

    return (dispatch)=>{
        auth().createUserWithEmailAndPassword(email,password)
        .then((res)=>{
            dispatch({
                type:'SginIn_success',
                payload:res.user
            })
        })
        .catch(err=>{
            dispatch(SginOrLoginInFaild(err))
         
        })
    }
  



}

export const login=(email,passowrd)=>{

    return (dispatch)=>{
        auth().signInWithEmailAndPassword(email,passowrd)
        .then((res)=>{   
           
            dispatch({
                type:'Login_success',
                payload:res.user
            })
        })
        .catch(err=>{
            dispatch(SginOrLoginInFaild(err))
         
        })
    }
  



}


export const sginOut=()=>{

    return (dispatch)=>{
        auth()
        .signOut()
        .then(() => {
            dispatch({
                type:'SginOut',
                payload:{}
            })
        });
    }

}
export const SginOrLoginInFaild=(err)=>{
    console.log(`${err} at action`)
    return (dispatch)=>{
        dispatch({
            type:'errorFail',
            payload:err.message
        })
       
    }
}
