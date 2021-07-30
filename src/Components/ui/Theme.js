import { createMuiTheme } from '@material-ui/core/styles';

//const green = "#00ff00"
//const yellow = "#FFFF00"

export default createMuiTheme ({
    palette: {
        common:{
            green: '#00ff00',
            yellow: '#FFFF00'
        },
    
    primary: {
        main: '#00ff00'
    },
    secondary: {
        main: '#FFFF00'
    }
    },
    typography: {
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        signUp:{
            textTransform:"none",
            fontSize:"1rem",
            color:"#FFFF00"
        }
    }
})