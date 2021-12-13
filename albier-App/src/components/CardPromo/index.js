import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


function CardPromo({ name }) {


    return(
        <>
            <View  elevation={5} style={styles.box}>
                <View style={styles.boxTexto}>
                <View style={styles.boxTop}>
                        <Text style={styles.boxTextoTitulo}>{name}</Text>
                        <View style={styles.boxExpandir}>
                            <TouchableOpacity>
                                <Text>expandir &or;</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxCartaoMenu}>
                        <TouchableOpacity>
                            <Text style={styles.boxCartaoMenuBotao}>
                                ver mais
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

export default CardPromo;

export const styles = EStyleSheet.create({
    box : {
        flexDirection: 'column', 
        height:'10rem',
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
        marginVertical: '0.8rem',
        marginLeft:'0.6rem',
    },

    boxTexto: {
        paddingLeft: '1.5rem',
        paddingTop: '1.1rem',
        paddingBottom:'2.2rem',
    },

    boxTop: {
        flexDirection: 'row',
    },

    boxExpandir:{
        paddingTop: '0.4rem',
        paddingLeft: '1rem',
    },

    boxTextoTitulo: {
        fontSize: '1.5rem',
        marginLeft: '0.4rem',
        paddingBottom: '1.2rem',
        width: '15rem',
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
        paddingTop: '0.8rem',

    },

    boxCartaoMenuBotao: {
        color: '#0040FF',
        fontWeight: 'bold',
        fontSize: '1rem',
        marginLeft:'0.3rem',
        marginRight: '1rem',
        paddingBottom:'1rem',
    },

   
});