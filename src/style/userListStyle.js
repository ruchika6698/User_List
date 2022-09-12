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
    container:{
        marginTop: '5%'
    },
    iconDiv:{
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    icon:{
        color: 'grey'
    },
    website:{
        paddingBottom: '10%'
    },
    heartIcon:{
        color: '#e91e63'
    }
})
