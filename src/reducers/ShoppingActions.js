import * as actionTypes from './ShoppingTypes'
import database from '@react-native-firebase/database';


export const setShoppingState = (shoppingList) => {

    //console.log(shoppingList)
    return {
        type: actionTypes.setShopState,
        payload: shoppingList

    }
}





export const addItem = (uid,title, description) => {
    

    
        return (dispatch)=>{
            const newItem = database().ref('shoppingList/').push();
            console.log(uid)
            newItem.set({
                uid:uid,
                title: title,
                description: description,
                createdAt: new Date().toDateString(),
            }).then(()=>{
                dispatch({
                    type:actionTypes.add_shoppingItem,
                    payload:newItem
                })
            })

        }   
    

}











//id after fetch 
export const updateItem = (key, title, description) => {

    return (dispatch) => {
        const updatedItem = database()
            .ref(`shoppingList/${key}`)
            .update({
                title: title,
                description: description,
                createdAt: new Date().toDateString(),
            })
            .then(() => dispatch({
                type: actionTypes.updtae_ShoppingItem,
                payload: { key: key, title: title, description: description }
            })).catch((err) => {
                console.log(err)
            })
    }
}






export const removeItem = (key) => {

    return (dispatch) => {
        database()
            .ref(`shoppingList/${key}`)
            .remove()
            .then(() => {
                dispatch({
                    type: actionTypes.delete_ShoppingItem,
                    payload: { key }
                })
            })
    }

}


