import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import UserThumbnailImg from "../../assets/images/remy.jpg";
import UserImg from "../../assets/images/uxceo-128.jpg";
import "./UserTile.css";

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class UserTile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="user-section">
        <figure className="media-left">
          <p className="image user-image">
            <img
              src={UserImg}
              alt="Adele Thomas"
              className="user-img"
            />
          </p>
        </figure>
      </div>
    );
  }

}

UserTile.propTypes = {
  
};

UserTile.defaultProps = {
  session: { meta: {}, speakers: [], topics: [] },
  favorites: [],
  baseRoute: "/home/summary/"
};

export default withStyles(styles)(withRouter(UserTile));
