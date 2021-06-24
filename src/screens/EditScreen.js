import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateItem } from '../reducers/ShoppingActions'
import ShoppingForm from '../components/ShoppingForm'
import database from '@react-native-firebase/database';


const EditScreen = ({ shopping_list, route, updateShoppingItem }) => {


    //console.log(shopping_list)
    const key = route.params.key;
    console.log(key)
    console.log(shopping_list)

    const initialValues = shopping_list.find((item) => item.key == key)


    console.log(initialValues)


    return (
        <View>

            <ShoppingForm
                initialValues={initialValues}
                buttonTitle="Update Item"
                onSubmit={(title, description) => {
                    updateShoppingItem(key, title, description)
                }

                }

            />

        </View>
    )
}


const styles = StyleSheet.create({})


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateShoppingItem: (key, title, description) => dispatch(
            updateItem(key, title, description)
            , ownProps.navigation.navigate('Index')
        )
    }
}
const mapStateToProps = state => {

    return { shopping_list: state.shop.shopping_list }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen)