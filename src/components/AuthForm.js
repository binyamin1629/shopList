import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';



const AuthForm = ({ headerText, err, navigation, buttnTitle, navigateTo, handelPress, navigateText }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View>
            <Text style={styles.header}>{headerText}</Text>
            <View style={styles.txtInput}>
                <TextInput
                    placeholder="email..."
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    style={styles.inputItem}
                />
                <TextInput
                    placeholder="password..."
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.inputItem}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonWrap}>
                <TouchableOpacity onPress={() => handelPress(email, password)}
                    
                >
                    <Text style={styles.sginOrLogin}> {buttnTitle}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.err}>{err}</Text>

            <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
                <Text style={styles.navigateTo}>{navigateText}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    inputItem: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 15,
        margin: 5,
        borderRadius: 5,

    },
    txtInput: {
        marginTop: 10
    },
    header: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: 10,
        fontWeight: '700'
    },
    err: {
        color: 'red'
    },
    sginOrLogin: {
        alignSelf: 'center',
        fontSize:18,
        alignItems:'center'

    },
    buttonWrap:{
        display:'flex',
        backgroundColor:'#dbdbdb',
        height:35,
        flexDirection:'row',
        alignSelf: 'stretch',
        marginHorizontal:15,
        borderRadius:10,
        justifyContent:'center'
    },
    navigateTo:{
        alignSelf: 'center',
        fontSize:18,
        alignItems:'center',
        color:'blue'
    }

})


export default AuthForm