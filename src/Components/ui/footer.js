/*import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {services} from "../../Environment/Environment.dev";
import { render } from '@testing-library/react';

const styles = (theme) =>({
    root: {
        display: 'flex',
    },
    appBar: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        zIndex: theme.zIndex.drawer + 1,
    },
    show: {
        display: 'block'
    },
    hide: {
        display: 'none'
    },
    secondaryBar: {
        zIndex: 0
    },
    menuButton : {
        marginLeft: '8px',
        color:'#fff'
    },
    iconButtonAvatar : {
        padding: '4px'
    },
    link : {
        textDecoration: "none",
        color: 'rgba(255, 255, 255, 0.7)',
        '& : hover' : {
            color: 'white'
        }
    },
    button : {
        borderColor: 'rgba(255, 255, 255, 0.7)'
    },
})
class HeaderFile extends Component {
    webSocket = io(services.webSocket,{transports:[ "websocket"]});
    myToken = localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) :null
    state={
        anchorEl:null,
        showSideContent:true,
        socketData:[],
        anchorData:false,
        snackbar:{
            severity:'info',
            open:false,
            message:null
        }
    }

    componentDidMount() {
        if(this.props.location.pathname === '/login' || this.props.location.pathname === '/forgot-password' ){
            this.setState({showSideContent:false})
        }
        else{
            this.setState({showSideContent:true})
            if(localStorage.getItem('token')){
                console.log('Connecting .......')
                this.webSocket.on("connect",() => {
                    console.log('Connection Established ',)
                })

                this.webSocket.on('AUTH',(data) => {
                    let token = localStorage.getItem("token");
                    let onlineUser = {
                        "sessionId" : data,
                        "token" : token
                    };
                    this.webSocket.emit("LOGIN",onlineUser);
                })

            }
        }
    }

    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget});
    };

    handleClose = (event) => {
        this.setState({anchorEl:null});
    };

    handleLogoutSession = () => {
        this.handleClose();
        localStorage.removeItem("token");
        this.props.history.push('/login');
    };
    toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({anchorData : !this.state.anchorData});
    };
    handleCloseSnackbar=()=>{
        this.setState({
            snackbar:{
                severity:'info',
                open:false,
                message:null
            }
        })
    }

    render() {
        const {classes , onDrawerToggle} = this.props;
        const {anchorEl  , socketData , anchorData} = this.state
        if(localStorage.getItem('token')){
            this.webSocket.on("TRANSACTION_EVENT",(data)=>{
                this.setState({
                    socketData : [...new Set([...this.state.socketData,JSON.stringify(data)])],
                    snackbar:{
                        open:true,
                        message:data,
                        severity:'info'
                    }
                })
                playBeep()
            })
        }

    return (
            <React.Fragment>
                <AppBar
                    className={clsx(classes.appBar, {
                        [classes.show]: localStorage.getItem('token'),
                        [classes.hide]: !localStorage.getItem('token'),
                    })}
                    position="sticky"
                    elevation={0}
                >
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">
                            <Hidden lgUp>
                                <Grid item>
                                    <IconButton
                                        aria-label="open drawer"
                                        onClick={onDrawerToggle}
                                        style={{ color: '#FFF' }}
                                        className={classes.menuButton}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Hidden>
                            <Grid item xs />

                            <Grid item>
                                <Tooltip
                                    title={socketData ? 'There is Some Notification' : "Alerts • No alerts"}
                                >
                                    <IconButton
                                        color="inherit"
                                        onClick={()=> this.setState({anchorData: true})}
                                    >
                                        <Badge
                                            color="secondary"
                                            variant={"dot"}
                                            invisible={socketData && !socketData.length > 0 }>
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    className={classes.iconButtonAvatar}
                                    onClick={this.handleClick}
                                >
                                    <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                                    <MenuItem onClick={this.handleLogoutSession}>Logout</MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <NotificationPannel anchorData={anchorData} toggleDrawer ={this.toggleDrawer} socketData={socketData}/>
                <NotificationSnackbar {...this.state.snackbar} handleClose={this.handleCloseSnackbar}/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme:true})(withRouter(HeaderFile));*/


/*function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    
      </div>
    );
  }
  
  export default App;
  
 ******import this in header bellow button nd menu*******
 //{menuOptions.map 
                  // { (option,i) => 
                 // }{ 
                 // } }
    

                </Menu> 
  
  */


  