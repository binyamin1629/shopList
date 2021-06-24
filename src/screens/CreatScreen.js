import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../reducers/ShoppingActions'
import ShoppingForm from '../components/ShoppingForm'
import auth from '@react-native-firebase/auth';



const CreatScreen = ({ addShoppingItem }) => {

    const initialValues = {
        title: '',
        description: ''
    }
    const user = auth().currentUser;

    return (


        <View>
            <ShoppingForm
                initialValues={initialValues}
                buttonTitle="Add Item"
                onSubmit={(title, description) => {
                    addShoppingItem(user.uid, title, description)
                }

                }
            />
        </View>

    )

}



const styles = StyleSheet.create({})


const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addShoppingItem: (uid, title, description) => dispatch(
            addItem(uid, title, description)
            , ownProps.navigation.navigate('Index')
        )
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(CreatScreen);