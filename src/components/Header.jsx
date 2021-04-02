import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom";
import { Grid } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



class Header extends Component {
    state = {};
    styles={
      alignItems: "center",
      textAlign:"center",
      backgroundColor: "#e9ecf9"
    }
    ico={ fontSize: 35, color: "#4f92ff", fontWeight: "bolder" }

    render() {
    
    return (
      <>
          
          <AppBar position="fixed" >
          
            <Grid container style={this.styles}>
              <Grid item xs={4} ><Link to="/"> <HomeIcon style={this.ico}/></Link></Grid>
              <Grid item xs={4}>
              <Link to="/">
                <img src="https://via.placeholder.com/150x50" alt=""/>
             </Link>
              </Grid>
              <Grid item xs={4} ><ExitToAppIcon style={this.ico}/></Grid>
              
             </Grid>
          </AppBar>
        
      </>
    );
  }
}

export default Header;
