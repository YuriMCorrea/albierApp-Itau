import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import MCLogo from "../../../assets/mastercardLogo.png";

function CardCartao({ cor1, cor2, nameCC, tipo, final }) {


    return(
        <>
            <View  elevation={5} style={styles.box}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={styles.barra} colors={[cor1, cor2]}>
                    <View style={styles.barra}></View>
                </LinearGradient>
                <View style={styles.boxTexto}>
                    <View style={styles.boxTop}>
                        <View>
                            <Text style={styles.boxTextoTitulo}>{nameCC}</Text>
                            <Text style={styles.boxTextoTitulo}>{tipo}</Text>
                        </View>
                        <View style={styles.boxExpandir}>
                            <TouchableOpacity>
                                <Text>expandir &or;</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imgCartao}>
                        <Image resizeMode='stretch' style={{transform: [{ scale: 0.5 }]}} source={MCLogo} />
                        <Text>final {final}</Text>
                    </View>
                    <View style={styles.boxCartaoMenu}>
                        <TouchableOpacity><Text style={styles.boxCartaoMenuBotao}>ver fatura</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.boxCartaoMenuBotao}>cartão virtual</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

export default CardCartao;

export const styles = EStyleSheet.create({
    box : {
        flexDirection: 'column', 
        height:'12.5rem',
        width: '24rem',
        textAlign:'center',
        borderRadius: '1rem',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: '1rem',
            height: '1rem',    
        },
        shadowRadius: '1rem',
        shadowOpacity: 1.0,
        marginTop: '0.8rem',
        marginLeft:'0.6rem',
    },

    boxTop: {
        flexDirection: 'row',
    },

    boxExpandir:{
        paddingLeft:'5rem',
    },

    boxTexto: {
        padding: '1.5rem',
        
    },

    boxTextoTitulo: {
        fontWeight: 'bold',
        marginLeft: '0.4rem',
    },

    imgCartao: {
        marginLeft: '0.8rem',
        marginTop: '0.1rem',
        flexDirection:'row',
        marginBottom: '1rem'
    },

    boxCartaoMenu: {
        flexDirection: 'row',
        borderTopWidth: '0.1rem',
        borderTopColor: "#dcd3b4",
        paddingTop: '1.0rem',
    },

    boxCartaoMenuBotao: {
        color: '#0040FF',
        fontWeight: 'bold',
        fontSize: '1rem',
        marginLeft:'0.3rem',
        marginRight: '1rem',
    },

    barra: {
        height: '0.6rem',
        width: '100%',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
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