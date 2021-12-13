import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


function LoginBotao({ texto, onPress }) {
    return(
        <View style={styles.box}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.texto}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginBotao;

export const styles = EStyleSheet.create({
    box: {
        height: '4rem',
        width: '4rem',
        backgroundColor: 'white', 
        justifyContent: 'center',
        borderRadius: '0.5rem',
        margin: '0.5rem',
    },
    
    texto: {
        textAlign: 'center',
        color:'black',
    }
});