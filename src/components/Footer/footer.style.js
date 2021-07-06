import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    black: {
        backgroundColor: '#262626',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '6px',
        width: '100%',
        height: 'max-height',
        textAlign: 'left',
        position: 'sticky',
        clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        '@media only screen and (max-width: 1255px) ':{
        textAlign: 'center',
        },
        '@media only screen and (max-width: 555px) ':{
            clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
            }
    },
    container: {
        padding: '20px 80px',
    },
    left: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '30px',
        '@media only screen and (max-width: 400px) ':{
            fontSize: '16px'
            }
    },
    column3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    row: {
        display: 'flex',
        '@media only screen and (max-width: 1255px)': {
        justifyContent: 'space-evenly',
        }
    },
    column: {
        float: 'left',
        padding: '40px',
        width: '25%',
    },
    about: {
        color: 'white',
        fontSize: '15px',
        marginTop: '40px',
        marginBottom: '20px',
    },

    content: {
        fontWeight: '500',
        fontSize: '14px',
        color: 'grey',

        '&:hover': {
            color: 'white',
            fontWeight: '500',
        }
    },

    you: {
        margin: '0 20px',
        color: 'gray',
        '&:hover': {
            color: 'rgb(236, 22, 22)',
        },
        '@media only screen and (max-width: 450px) ':{
            margin: '0 10px',
            },
            '@media only screen and (max-width: 360px) ':{
            margin: '0 5px',
            }
    },

    fb: {
        margin: '0 20px',
        color: 'gray',
        '&:hover': {
            color: 'rgb(38, 79, 168)',
        },
        '@media only screen and (max-width: 450px) ':{
            margin: '0 10px',
            },
            '@media only screen and (max-width: 360px) ':{
            margin: '0 5px',
            }
    },

    insta: {
        margin: '0 20px',
        color: 'gray',
        '&:hover': {
            color: 'rgb(218, 30, 61)',
        },
        '@media only screen and (max-width: 450px) ':{
            margin: '0 10px',
            },
            '@media only screen and (max-width: 360px) ':{
            margin: '0 5px',
            }
        
    },

    in: {
        margin: '0 20px',
        color: 'gray',
        '&:hover': {
            color: '#002266',
            // color: 'rgb(17, 62, 160)',
        },
        '@media only screen and (max-width: 450px) ':{
            margin: '0 10px',
            },
            '@media only screen and (max-width: 360px) ':{
            margin: '0 5px',
            }
    },

    last: {
        fontWeight: '900',
        color: 'rgb(153, 152, 152)',
        margin: '0 20px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    frame: {
        border: 'none',
        '@media only screen and (max-width: 1255px)': {
            display: 'none',
        }
    },

}));