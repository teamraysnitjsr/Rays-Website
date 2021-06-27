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
        clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        '@media only screen and (max-width: 1255px) ':{
        textAlign: 'center',
        }
    },
    container: {
        padding: '20px 80px',
    },
    left: {
        fontSize: '18px',
        fontWeight: 'bold',
        // marginTop: '0px',
        color: 'white',
        marginBottom: '30px',
    },
    column3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    column: {
        float: 'left',
        padding: '20px',
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
        padding: '0 1rem 0 1rem',
        color: 'gray',
        '&:hover': {
            color: 'rgb(236, 22, 22)',
        }
    },

    fb: {
        padding: '0 1rem 0 1rem',
        color: 'gray',
        '&:hover': {
            color: 'rgb(38, 79, 168)',
        }
    },

    insta: {
        padding: '0 1rem 0 1rem',
        color: 'gray',
        '&:hover': {
            color: 'rgb(218, 30, 61)',
        }
        
    },

    in: {
        padding: '0 1rem 0 1rem',
        color: 'gray',
        '&:hover': {
            color: '#002266',
            // color: 'rgb(17, 62, 160)',
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