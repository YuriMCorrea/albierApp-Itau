import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function BotaoHome(props){
    
    return(
        <>
            <TouchableOpacity>
                <Image resizeMode='contain' style={styles.img} source={props.address} />
            </TouchableOpacity>
        </>
    );
}

export default BotaoHome;


export const styles = EStyleSheet.create({

    box: {
        justifyContent: 'center',
        padding: '0.2rem',
    },

    img : {
        marginTop: '-0.5rem',
        marginRight: '-3.8rem',
        transform: [{ scale: 0.6 }],
        justifyContent: 'center',
    },

});