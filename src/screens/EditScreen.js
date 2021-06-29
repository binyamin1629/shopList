import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateItem } from '../reducers/ShoppingActions'
import ShoppingForm from '../components/ShoppingForm'
import auth from '@react-native-firebase/auth';


const EditScreen = ({ shopping_list, route, updateShoppingItem }) => {


    //console.log(shopping_list[0].uid)
    const key = route.params.key;
    // console.log(key)
    // console.log(shopping_list)

    const initialValues = shopping_list.find((item) => item.key == key)
    const user = auth().currentUser

 


    return (
        <View>

            <ShoppingForm
                initialValues={initialValues}
                buttonTitle="Update Item"
                onSubmit={(title, description) => {
                    updateShoppingItem(user.uid,key, title, description)
                }

                }

            />

        </View>
    )
}


const styles = StyleSheet.create({})


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateShoppingItem: (uid,key, title, description) => dispatch(
            updateItem(uid,key, title, description)
            , ownProps.navigation.navigate('Index')
        )
    }
}
const mapStateToProps = state => {

    return { shopping_list: state.shop.shopping_list }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen)