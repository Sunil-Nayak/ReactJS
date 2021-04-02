import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { Icon } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import BrightnessHighTwoToneIcon from "@material-ui/icons/BrightnessHighTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import TodayIcon from "@material-ui/icons/Today";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";

class Details extends Component {
  state = {};
  styles = {
    marginTop: "2.5rem",
  };
  center = {
    textAlign: "center",
  };
  item1 = {
    color: "red",
    fontSize: "larger",
  };
  item1 = {
    color: "red",
    fontSize: "larger",
  };
  render() {
    return (
      <>
        <Grid container spacing={3} style={this.styles}>
          <Grid item xs={12} style={this.item1}>
              <hr/>
            <Typography>
              <strong>Name, Age</strong>
              <p>Location, Last seen</p>
            </Typography>
            <hr/>
          </Grid>
          <Grid item xs={12} style={this.center}>
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong style={this.item1}>Objectives</strong>
              <hr />
              <SearchOutlinedIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />{" "}
              <strong style={this.item2}>Looking For</strong>
              <p>
                Male, Female, Couple, Group of females, Group of males , 18-26
              </p>
              <BrightnessHighTwoToneIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />
              <strong style={this.item2}> Purpose of connection</strong>
              <p>Friendship, presents, good time </p>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong style={this.item1}>About Me</strong>
              <hr />
              <strong style={this.item2}>My Slogan</strong>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                dolore delectus hic, modi laudantium nobis ratione dolorem
                commodi exercitationem accusamus.
              </p>
              <WorkTwoToneIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />
              <strong style={this.item2}> Occupation</strong>
              <p>Hi-tech</p>
              <ThumbsUpDownIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />
              <strong style={this.item2}> Sponsor type</strong>
              <p>Basic needs, rent bills</p>
              <TodayIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />
              <strong style={this.item2}> Available time</strong>
              <p>Evenings</p>
              <CastForEducationIcon
                style={{ fontSize: 20, color: "red", fontWeight: "bolder" }}
              />
              <strong style={this.item2}> Education</strong>
              <p>Student</p>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Details;
