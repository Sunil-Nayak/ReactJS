import React, { Component } from "react";

import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class Body extends Component {
  state = {};
  styles = {
    marginTop: "5rem",
    marginBottom: "5rem",
  };

  render() {
    return (
      <>
       
         {console.log(this.props.name)}
            <Grid container spacing={3} style={this.styles}>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={"sam helsinki"}/>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={"toby obrain"} />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={"jerry mcqire "}/>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={"nadia schylon "}/>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={" tim morton"}/>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <Link to='/details'>
                  <Card names={"alpha male "}/>
                </Link>
              </Grid>
            </Grid>
            <Footer/>
        
      </>
    );
  }
}

export default Body;
