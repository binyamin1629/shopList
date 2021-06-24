import { combineReducers } from 'redux';
import ShoppingRducer from './ShoppingReducer'
import EmailPasswordReducer from '../authentication/EmailPasswordReducer'
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer']
 }
 


const rootReducer = combineReducers({
    shop:ShoppingRducer,
    AuthReducer:EmailPasswordReducer
})

export default persistReducer(persistConfig,rootReducer)