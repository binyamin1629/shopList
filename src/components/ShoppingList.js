import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


const ShoppingList = ({ item, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{item.title} </Text>
            <Text style={styles.dtaeStyle}> {item.date.toString()}</Text>
            <Text style={styles.descriptionStyle}>{item.description} </Text>

            <View style={styles.iconsContainer}>
                <View style={styles.updateDeleteView}>
                    <TouchableOpacity>
                        <Text style={styles.UpdateDeleteButtons} onPress={() => onDelete(item.key)}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.updateDeleteView}>
                    <TouchableOpacity onPress={() => onEdit(item.key)}>
                        <Text style={styles.UpdateDeleteButtons}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: 'white',
        marginVertical: 15,
        width: 380,
        alignSelf: 'center',
        zIndex: 1,
        borderRadius: 15,
        


    },

    titleStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft:5
       

    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 15,

    },
    dtaeStyle: {
        fontSize: 16,
        color: 'grey',
        marginLeft:5
      
    },
    descriptionStyle: {
        fontSize: 28,
        fontWeight: '500',
        marginLeft:5
      
    },
    UpdateDeleteButtons: {
        fontSize: 22,
        fontWeight:'200',
        justifyContent:'flex-end'
    },
    updateDeleteView:{
        height:35,
        width:85,
        marginLeft:5,
        marginRight:5,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dbdbdb',
        borderRadius:5
    }


})

export default ShoppingList