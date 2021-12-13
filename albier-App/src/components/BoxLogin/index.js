import React from "react";
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


function BoxLogin(){
    
    return(
        <>
            <View style={styles.box}>
                <Text> </Text>
            </View>
        </>
    );
}
export default BoxLogin;

export const styles = EStyleSheet.create({
    box: {
        height: '11rem',
        width: '1rem',
    },

});