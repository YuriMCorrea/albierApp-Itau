
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({

// **************************  LOGIN - CONTAINER ****************************

    container : {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        fontFamily: 'Helvetica',
        paddingTop: '30%',
    },

// **************************  LOGIN - INPUT ****************************

    viewInputSenha: {
        width: '50%',
        height:'3rem',
        borderStyle: 'solid',
        borderBottomWidth: '0.1rem',
        borderBottomColor: '#fff',
        margin:'1rem',
        color: '#ffb347',
        flexDirection: 'row',
    },

    inputSenha: {
        width: '10rem',
        height:'3rem',
        paddingLeft: '1rem',
        color: '#ffb347',
        flexDirection: 'row',
        fontSize: '2rem',
        letterSpacing: '0.1rem',
    },

    teclado : {
        backgroundColor: 'lightgrey',
        height: '10rem',
        width: '15rem',
        margin: '0.4rem',
    },
// **************************  LOGIN - BUTTON ****************************
    button: {
        width: '15rem',
        height:'3.5rem',
        backgroundColor: 'whitesmoke',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontSize: '1rem',
        color: '#ff7c0d',
        borderRadius: '0.3rem',
    },

    text : {
        color: '#FFFFFF',
        fontSize: '1rem',
        marginTop: '2rem',
        fontFamily: 'sans-serif-medium',
    },

// **************************  LOGIN - BODY ****************************
    corpo : {
        height : '8%',
    },


// **************************  LOGIN - FOOTER ****************************
    footer : {
        width: '100%',
        height:'15%',
        flexDirection: 'row',
    },

    footerIcones: {
        width: '33%',
        transform: [{ scale: 0.35 }]
    },

// **************************  HOME - HEADER ****************************

    homeHeader: {
        backgroundColor:"#ff7c0d",
        color: "#fff",
        fontWeight: "bold",
        height: '12.5rem',
    },

    homeHeaderSaldo: {
        color: "#fff",
        fontWeight: "bold",
        width: '22rem',
        fontSize: '2rem',
        marginBottom: '0.4rem',
        paddingBottom:'0.3rem',
        borderBottomColor: '#fff',
        borderBottomWidth:'0.05rem',
    },

    homeUser:{
        flexDirection: 'row',
        paddingLeft: '0.5rem',
        backgroundColor:"#ff7c0d",
        height: '3.5rem',
    },

    homeHeaderBusca: {
        transform: [{ scale: 0.5 }], 
        position: 'relative', 
        marginLeft: '71%', 
        right: 0,
    },

    olhaSaldo:{
        flexDirection: 'row',
        width: '100%',
        paddingTop: '1.5rem',
    },

    homeHeaderNome: {
        marginTop: '1rem',
        color: "#fff",
        fontSize: '1rem',
    },
    
    homeHeaderInfo: {
        marginTop: '0.3rem',
        marginLeft: '1.5rem',
    },

    homeHeaderChequeEspecial: {
        marginTop: '0.7rem',
        marginLeft: '1.5rem',
        color: "#fff",
    },

    // ************************** HOME - ATALHO ****************************

    homeAtalho: {
        backgroundColor:'#fff',
        height: '8rem',
        flexDirection: 'row',
        width: '100%',
        
    },

    // ************************** HOME - BODY ****************************

    homeBody: {
        backgroundColor:'lightgrey',
        height: '38rem',
        flex: 1,
    }, 

    homeBodyCC: {
        height:'1rem',
        flex:1, 
        width:'100%', 
    },

    homeBodyScroll: {
        flex:1, 
        width:'100%', 
    },

    // ************************** HOME - FOOTER ****************************

    homeFooter: {
        backgroundColor:'#fff',
        height: '8%',
        flexDirection: 'row',
    }, 

});
