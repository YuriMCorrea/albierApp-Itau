import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Atalho({ name, name2, address }){
    
    return(
        <>
            <View style={styles.box}>
                <TouchableOpacity>
                    <Image resizeMode='contain' style={styles.img} source={address} />
                </TouchableOpacity>
                <Text style={styles.txt}>{name? name : "Falta inor"}</Text>
                {
                    name2 ? <Text style={styles.txt2}>{name2}</Text> : null
                }
            </View>
        </>
    );
}

export default Atalho;

export const styles = EStyleSheet.create({
    box : {
        flexDirection: 'column', 
        marginLeft: '0.7rem', 
        height:'80%',
        width: '5rem',
        textAlign:'center',
    },

    img : {
        marginVertical: '0rem', 
        marginLeft: '-0.4rem',
        transform: [{ scale: 0.6 }],
    },

    txt : {
        color: 'black', 
        textAlign:'center',
        marginTop: '-0.9rem',
        textAlign:'center',
        fontSize: '0.6rem',
        
    },

    txt2 : {
        color: 'black', 
        textAlign:'center',
        fontSize: '0.6rem',
    },
});