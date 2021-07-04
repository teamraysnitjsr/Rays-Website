import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    colour0: {
        backgroundColor: "#eaeae1",
    },
    colour: {
        backgroundColor: "#e6f9ff",
    },
    colour1: {
        backgroundColor: "#ffffe6",
    },
    top3: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "bolder",
        '@media screen and (max-width: 1256px)': {
            fontSize: "45px"
        },
    },
    top4: {
        color: "grey",
        fontSize: "15px",
        fontWeight: "500",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "30px 100px",
        '@media screen and (max-width: 1256px)': {
            fontSize: "15px"
        },
        
    },
    batch: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "1000",
        marginTop: "30px",
    },
    container1: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        '@media screen and (max-width: 600px)': {
            flexDirection: "column",
        },
    },
    hvr: {
        transition: "all 0.5s ease",
        '&:hover': {
            transform: "scale(1.080)",
        }
    },
    adj1: {
        position: "relative",
    },
    imgg1: {
        position: "relative",
        width: "250px",
        height: "250px",
        margin: "0px 20px",
        borderRadius: "10px",
        marginTop: "30px",
        '@media screen and (max-width: 1256px)': {
            width: "220px",
            height: "220px",
        },
        '@media screen and (max-width: 1060px)': {
            width: "180px",
            height: "180px",
        },
        '@media screen and (max-width: 850px)': {
            width: "120px",
            height: "120px",
        },
        '@media screen and (max-width: 600px)': {
            width: "300px",
            height: "300px",
        },
    },
    columns: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    cut: {
        fontSize: "12px",
    },
    chess: {
        fontWeight: "500",
        fontSize: "15px",
        color: "grey",
        textAlign: "center",
        margin: "10px ",
        '@media screen and (max-width: 1256px)': {
            fontSize: "15px",
        },
        '@media screen and (max-width: 1060px)': {
            fontSize: "13px",
        },
        '@media screen and (max-width: 850px)': {
            fontSize: "15px",
            margin: "20px ",
        },
        '@media screen and (max-width: 600px)': {
            fontSize: "15px",
            margin: "10px ",
        },
    },
    price: {
        textAlign: "center",
        color: "rgb(34, 32, 32)",
        fontWeight: "700",
        marginBottom: "30px",
        '@media screen and (max-width: 1256px)': {
            fontSize: "15px",
        },
        '@media screen and (max-width: 850px)': {
            fontSize: "13px",
        },
        '@media screen and (max-width: 600px)': {
            fontSize: "15px",
        },

    },
    eng: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "400",
        '@media screen and (max-width: 1256px)': {
            fontSize: "20px",
        },
        '@media screen and (max-width: 1060px)': {
            fontSize: "17px",
        },
        '@media screen and (max-width: 850px)': {
            fontSize: "15px",
        },
        '@media screen and (max-width: 600px)': {
            fontSize: "25px",
        },
    },
    bottom: {
        display: "flex",
        flexDirection: "column",
    },
}));