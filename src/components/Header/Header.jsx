import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Header.css";

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      borderBottom: '1px solid #ebf1f5',
      width: 200,
    },
    menu: {
      width: 200,
    },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <header className="sm-header">
        <h1 className="title">Talent Building Tool</h1>
        <form className="sm-header-search-field" noValidate autoComplete="off">
          <TextField
              id="search"
              label="Search field"
              type="search"
              className="sm-header-search-input"
              margin="normal"
          />
        </form>
        <div className="clearfix"></div>
      </header>
    );
  }
}

Header.propTypes = {
};

export default withStyles(styles)(Header);
