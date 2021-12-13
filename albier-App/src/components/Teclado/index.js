import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Botao from "../LoginBotao/index";
import EStyleSheet from 'react-native-extended-stylesheet';


function Teclado({ captura }) {
    const [numeros, setNumeros] = useState(['0', '3', '5', '7', '9', '4', '6', '1', '8', '2']);


    return(
        <>
            <View style={styles.linha1}>
                <Botao value='1' onPress={captura} texto={numeros[0] + " ou " + numeros[1]} />
                <Botao value='1' onPress={captura} texto={numeros[2] + " ou " + numeros[3]} />
                <Botao value='1' onPress={captura} texto={numeros[4] + " ou " + numeros[5]} />
            </View>
            <View style={styles.linha2}>
                <Botao value='1' onPress={captura} texto={numeros[6] + " ou " + numeros[7]} />
                <Botao value='1' onPress={captura} texto={numeros[8] + " ou " + numeros[9]} />
                <Botao onPress={captura} texto='&lArr;' />
            </View>
                
            
        </>
    );
}

export default Teclado;

export const styles = EStyleSheet.create({
    linha1: {
        marginTop: '1rem',
        width: '15rem',
        height: '5rem',
        flexDirection: 'row',
    },
    linha2: {
        width: '15rem',
        height: '5rem',
        flexDirection: 'row',
        marginBottom: '1rem',
    },
});