import { StatusBar } from "react-native";
import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from "../../global/styles";
import User from "../../../assets/user.png";
import Lupa from "../../../assets/lupa.png";
import Atalho from "../../components/Atalho/index";
import BotaoHome from "../../components/BotaoHome/index"
import Eye from "../../../assets/eye.png";
import OpFin from "../../../assets/opFin.png";
import Pix from "../../../assets/pix2.png";
import Pagar from "../../../assets/pagarConta.png";
import Transferencia from "../../../assets/transferencias.png";
import CriaAtalho from "../../../assets/criarAtalho.png";
import CardCartao from "../../components/CardCartao/index";
import CardPromo from "../../components/CardPromo/index";
import Inicio from "../../../assets/home.png";
import Extrato from "../../../assets/extrato.png";
import Transacoes from "../../../assets/transacoes.png";
import Servicos from "../../../assets/servico.png";
import Ajuda from "../../../assets/ajuda2.png";



export const Home = () => {
    const [viewSaldo, setViewSaldo] = useState(". . . .");
    const [cartoesCredito, setCartoesCredito] = useState([
        {
            id: 1,
            user: 'Yuri',
            cor1: '#9e9375',
            cor2: '#dcd3b4',
            nameCC: "Itaucard Multiplo",
            tipo: "Mastercard Internacional",
            final: "7315",
        },
        {
            id: 2,
            user: 'Yuri',
            cor1: '#051084',
            cor2: '#051084',
            nameCC: "Extra Itaucard",
            tipo: "Mastercard Internacional",
            final: "3175",
        },
    ])
    const [btnsAtalho, setBtnsAtalho] = useState([
        {
            id: 1,
            address: OpFin,
            name:'open finance',
            name2:'',
        },
        {
            id: 2,
            address: Pix,
            name:'Pix',
            name2:'',
        },
        {
            id: 3,
            address: Pagar,
            name:'pagar conta',
            name2:'',
        },
        {
            id: 4,
            address: Transferencia,
            name:'fazer',
            name2:'transferência',
        },
        {
            id: 5,
            address: CriaAtalho,
            name:'criar novo atalho',
            name2:'',
        },
    ]);

    const mostrar = () => {
        viewSaldo === ". . . ." ? setViewSaldo("780'354,00") : setViewSaldo(". . . .")
    }


    return (
        <>
        <StatusBar backgroundColor='#ff7c0d' color='white' transLucent />
                    <View style={styles.homeUser}>
                        <Image resizeMode='stretch' style={{transform: [{ scale: 0.5 }]}} source={User} />
                        <Text style={styles.homeHeaderNome}>Yuri &or;</Text>
                        <View>
                            <TouchableOpacity>
                                <Image resizeMode='stretch' style={styles.homeHeaderBusca} source={Lupa} />
                            </TouchableOpacity>
                        </View>
                    </View>
            <ScrollView alignContentItems="center" style={styles.homeBodyScroll}>        
                <View style={styles.homeHeader}>
                            <View style={styles.olhaSaldo}>
                                <Image resizeMode='stretch' style={{margin:0, transform: [{ scale: 0.5 }]}} source={Eye} />
                                <TouchableOpacity onPress={mostrar}><Text style={{color: 'white', paddingTop: 15}}>saldo em conta</Text></TouchableOpacity>
                            </View>    
                        <View style={styles.homeHeaderInfo}>
                            <Text style={styles.homeHeaderSaldo}>R$ {viewSaldo}</Text>
                        </View>
                        <TouchableOpacity><Text style={styles.homeHeaderChequeEspecial}>cheque especial disponível R$ . . . .                               &gt;</Text></TouchableOpacity>
                    
                </View>
                <View style={styles.homeAtalho}>
                    <FlatList  
                        data={btnsAtalho}
                        renderItem={({item}) => <Atalho address={item.address} name={item.name} name2={item.name2} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        style={{flex:1, width:'100%'}}
                    />
                
                </View>
                <View style={styles.homeBody}>
                    <FlatList  
                        data={cartoesCredito}
                        renderItem={({item}) => <CardCartao cor1={item.cor1} cor2={item.cor2} nameCC={item.nameCC} tipo={item.tipo} final={item.final}/>}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        style={styles.homeBodyCC}
                    />
                    <View>
                        <CardPromo name='crédito'/>
                        <CardPromo name='meus investimentos'/>
                    </View>
                </View>
            </ScrollView>
                <View style={styles.homeFooter}>
                    <BotaoHome address={Inicio} />
                    <BotaoHome address={Extrato} />
                    <BotaoHome address={Transacoes} />
                    <BotaoHome address={Servicos} />
                    <BotaoHome address={Ajuda} />
                </View>
        
        </>
    );
}