import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../authentication/EmailPasswordHandling'

import AuthForm from '../../components/AuthForm'

const LoginScreen = ({ navigation, loginUser, err }) => {





    return (


        <View>
            <AuthForm
                headerText="Login"
                err={err}
                navigation={navigation}
                buttnTitle="Login"
                navigateTo="SginIn"
                navigateText="Don't Have An Acouunt? Sgin In"
                handelPress={(email, password) => {
                    loginUser(email, password)
                }}
            />
           

        </View>
    )








}


const styles = StyleSheet.create({})

  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (email, password) => dispatch(login(email, password))

    }
}
const mapStateToProps = state => {

    return {
        err: state.AuthReducer.err,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)