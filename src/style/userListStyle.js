import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    productImage: {
        width: '150px',
        height: '200px'
    },
    productList:{
        width: '50px',
        wordBreak: 'break-all',
        paddingBottom: '5%'
    },
    title:{
        display: 'flex',
        padding: '10px 10px 0 20px',
        height: '5%',
        fontWeight: 'bold !important'
    },
    numberOfItem:{
        display: 'flex',
        paddingLeft: '20px',
        color: 'grey'
    },
    socialIcon: {
        display: 'flex',
        paddingTop: '5px',
        fontSize: '12px'
    },
    input:{
        width: '30px',
        height: '25px',
        padding: '5px'
    },
    placeOrder:{
        marginTop: '5px !important',
        backgroundColor: '#005d83 !important',
        color: '#ffffff !important',
        cursor: 'pointer !important'
    },
    appBar:{
        backgroundColor: '#005d83 !important'
    },
    container:{
        marginTop: '5%'
    },
    containerPlaceOrder:{
        marginTop: '3%'
    },
    iconDiv:{
        width: '250px',
        display: 'flex',
        flexDirection: 'row'
    },
    icon:{
        width: '36% !important',
        padding: '10px 0',
        color: 'grey'
    },
    website:{
        paddingBottom: '10%'
    },
    heartIcon:{
        width: '36% !important',
        padding: '10px 0',
        color: '#e91e63'
    }
})
