import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, TouchableOpacity, Text } from 'react-native'




const ShoppingForm = ({ initialValues, onSubmit, buttonTitle }) => {





    const [title, setTitle] = useState(initialValues.title)
    const [description, setDescription] = useState(initialValues.description)

    return (
        <View style={{marginTop:5}}>

            <TextInput
                placeholder="item name..."
                value={title}
                onChangeText={(txt) => setTitle(txt)}
                style={styles.inputItem}
            />
            <TextInput
                placeholder="item description..."
                value={description}
                onChangeText={(txt) => setDescription(txt)}
                style={styles.inputDescription}
            />

            <View style={styles.buttonWrap}>
                <TouchableOpacity
                    onPress={() => onSubmit(title, description)}
                >
                    <Text style={styles.btnTxtTitle}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
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
        borderRadius: 15,

    },
    inputDescription: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 15,
        margin: 5,
        borderRadius: 15,
        height: 150
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
    btnTxtTitle:{   
        textAlign:'center',
        fontSize:25,
        alignItems:'center'
    }


})


export default ShoppingForm