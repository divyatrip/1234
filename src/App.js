import './App.css';
import Header from './Components/ui/Header';
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter , Route ,Switch  } from "react-router-dom";
import theme from "./Components/ui/Theme";
//import React from "react";
//import logo from './logo.svg';
//import App from './Components/App';


function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
     <Header />
     <Switch>
       <Route excat path="/" component={()=> <div>Home</div>}/>
       <Route excat path="/services" component={()=> <div>Services</div>}/>
       <Route excat path="/about" component={()=> <div>About Us</div>}/>
       <Route excat path="/contact" component={()=> <div>Contact Us</div>}/>
       <Route excat path="/signup" component={()=> <div>Sign Up</div>}/>
     </Switch>
      hello!
     </BrowserRouter>
    
     </ThemeProvider>
  );
}

export default App;
