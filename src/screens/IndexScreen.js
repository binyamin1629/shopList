import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity ,ActivityIndicator} from 'react-native';
import ShoppingList from '../components/ShoppingList'
import { connect } from 'react-redux'
import { removeItem, setShoppingState } from '../reducers/ShoppingActions'
import { sginOut } from '../authentication/EmailPasswordHandling'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';




const IndexScreen = ({ navigation, deleteItem, setShopState, SginOut, userReducer }) => {

    
    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const [shoppingList, setShoppingList] = useState([]);

    const user = auth().currentUser
    const keyID = userReducer.uid
    useEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <TouchableOpacity
                    onPress={() =>SginOut()}
                >
                    <Text style={{ fontSize: 24,marginRight: 5 }}>Sgin Out</Text>
                </TouchableOpacity>
        })
        const valueChanged = database().ref('shoppingList')
            .orderByChild('uid').equalTo(user.uid)
            .on('value', (snapshot) => {

                const shopping_list = []

                snapshot.forEach(snap => {
                    shopping_list.push({
                        key: snap.key,
                        title: snap.toJSON().title,
                        description: snap.toJSON().description,
                        date: snap.toJSON().createdAt,
                        uid: snap.toJSON().uid
                    })


                })


                setShoppingList(shopping_list)
                setShopState(shopping_list)
            })
        setConstructorHasRun(true)

        return () => database().ref('shoppingList').off('value', valueChanged)
    }, [])




    if (!constructorHasRun) return  <ActivityIndicator size="small" color="#0000ff" />

    if (shoppingList.length > 0) {
        return (
            <View>





                <FlatList
                    data={shoppingList}
                    keyExtractor={(shopItem) => shopItem.key}
                    renderItem={({ item }) => {

                        return (

                            <View style={styles.row}>

                                <ShoppingList
                                    item={item}
                                    onDelete={(key) => { deleteItem(key) }}
                                    onEdit={(key) => { navigation.navigate('Edit', { key: key }) }}
                                />

                            </View>

                        )
                    }}


                />

            </View>
        )
    }

    return (

        <View style={styles.buttonWarp}>
            <TouchableOpacity onPress={() => navigation.navigate('create')} >
                <Text style={styles.buttonAddSginOut}>Add</Text>
            </TouchableOpacity>

        </View>

    )


}




const styles = StyleSheet.create({

    buttonWarp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        width: 400,
        height: 50

    },
    buttonAddSginOut: {

        height: 35,
        width: 85,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        margin: 10,
        fontSize: 22,
        textAlign: 'center',

    },
    sginOut: {
        position: 'absolute'
    }

})


const mapStateToProps = state => {

    return {
        shopping_list: state.shop.shopping_list,
        userReducer: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        deleteItem: (key) => dispatch(removeItem(key)),
        setShopState: (shopList) => dispatch(setShoppingState(shopList)),
        SginOut: () => dispatch(sginOut())
            
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);




