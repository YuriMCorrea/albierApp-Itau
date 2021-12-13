import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../../global/styles";
import Lock from "../../../assets/lock.png";
import Pix from "../../../assets/pix.png";
import IToken from "../../../assets/itoken.png";
import Ajuda from "../../../assets/ajuda.png";
import Teclado from "../../components/Teclado/index";
import BoxLogin from "../../components/BoxLogin";

export const Login = () => {
    const navigation = useNavigation();
    const [mostrarTeclado, setMostrarTeclado] = useState(false);
    const [inputSenha, setInputSenha] = useState('');
    const [teste, setTeste] = useState('');



    const showT = () => {
        mostrarTeclado === true ? navigation.navigate("Home") : setMostrarTeclado(!mostrarTeclado);
        
    } 

    useEffect(() => {
        setInputSenha(...inputSenha, teste);
    }, [teste]);

    return (
        <>
        <LinearGradient style={styles.container} colors={['#ff7c0d', '#e9a214']}>
            
                <Text style={styles.text}>senha eletrônica</Text>
                <View style={styles.viewInputSenha}>
                    <Image resizeMode='stretch' style={{width:'20%', height:'90%', transform: [{ scale: 0.5 }]}} source={Lock} />
                    <TextInput 
                        value={inputSenha}
                        editable={false} 
                        style={styles.inputSenha} 
                        secureTextEntry={true} 
                        textContentType="password">
                    </TextInput>
                </View>
                <View>
                {
                    mostrarTeclado ? <Teclado captura={(e) => setTeste(e.nativeEvent.value)} /> : null
                }
                </View>
                <TouchableOpacity onPress={showT}><Text style={styles.button}>acessar</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.text}>esqueci minha senha</Text></TouchableOpacity>
                <View style={styles.corpo}>
                </View>
                    {
                        mostrarTeclado ? null : <BoxLogin />
                    }
                <View style={styles.footer}>
                    <Image style={styles.footerIcones} resizeMode='contain' source={Pix}/>
                    <Image style={styles.footerIcones} resizeMode='contain' source={IToken}/>
                    <Image style={styles.footerIcones} resizeMode='contain' source={Ajuda}/>
                </View>
            
        </LinearGradient>
        </>
    );
}