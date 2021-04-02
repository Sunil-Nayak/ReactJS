import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import {
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



class card extends Component {
  state = {};
  styles1={
    maxWidth: 345,
  };
  styles2={
    height: 140,
  };
  styles3={
    fontSize:"1rem",
    color:"black"
    
  };
  styles4={
    fontSize:"0.8rem",
    color:"#0000007a"
  };
  styles5={
    fontSize:"0.8rem",
    color:"#0000007a"
  };

  render() {
    return (
      <>
     

        <Card  raised="true">
          <CardContent>
            <CardMedia
              style={this.styles2}
              image="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              title="Image"
            />
          </CardContent>
          <CardContent>
            <Typography >
              <p style={this.styles3}>{this.props.names}</p>
            </Typography>
            <Typography style={this.styles4}>
              Location
            </Typography>
            <Typography style={this.styles5}>
              Last Seen
            </Typography>

          </CardContent>
        </Card>
      
      </>
    );
  }
}

export default card;
