import * as actionTypes from './ShoppingTypes'



const initialstate = {

    shopping_list: []

}


const ShoppingRducer = (state = initialstate, action) => {



    switch (action.type) {

        case actionTypes.setShopState:

            return {

                shopping_list: action.payload
            }



            

        case actionTypes.add_shoppingItem:
            console.log(`here: ${action.payload}`)
            return {

                ...state,
                shopping_list: [
                    ...state.shopping_list,
                    action.payload
                ]

            }



        case actionTypes.updtae_ShoppingItem:

            return {
                // ...state.shopping_list,
                // shopping_list: state.shopping_list.map(item => item.key == action.payload.key
                //     ? {
                //         key:action.payload.key,
                //         title: action.payload.title,
                //         description: action.payload.description,
                //         date: new Date()
                //     }
                //     : item)
                ...state,
                shopping_list: [

                    action.payload
                ]
            }


        case actionTypes.delete_ShoppingItem:
            return {
                ...state.shopping_list,
                shopping_list: state.shopping_list.filter((shopItem) => shopItem.key != action.payload)
            }

        default:
            return state;
    }



}

export default ShoppingRducer


     // case actionTypes.setData:
        //     console.log(state.shopping_list)

        //     return {
        //         ...state.shopping_list,
        //         shopping_list: action.payload
        //     }
