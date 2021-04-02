import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PersonIcon from '@material-ui/icons/Person';

class Footer extends Component {
  state = {};
  styles = {
    position: "fixed",
    bottom: 0,
    background:"#4f92ff00",
    padding:"1rem",
    textAlign: "center",
    borderRadius:"5rem"
  };
  ico={ fontSize: 35, color: "#4f92ff", fontWeight: "bolder" }
  render() {
    return (
      <>
      <Container style={this.styles} maxWidth="md">
       
          <Grid
          spacing={5}
            container
          >
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <MessageIcon style={this.ico}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <VisibilityIcon style={this.ico}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            < WhatshotIcon style={this.ico}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <PersonIcon style={this.ico}/>
            </Grid>
          </Grid>

      </Container>
      </>

    );
  }
}

export default Footer;
