import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Slide from "@material-ui/core/Slide";
import "./AddSkillModal.css";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const skillGroup = [
  {
    value: 'Frontend',
    label: 'Frontend',
  },
  {
    value: 'Build',
    label: 'Build',
  },
  {
    value: 'Backend',
    label: 'Backend',
  },
  {
    value: 'Deploy',
    label: 'Deploy',
  },
];

class AddSkillModal extends Component {
  state = {
    redirect: false,
    skill: '',
    multiline: '',
    skillGroup: ''
  };
  onClose = () => {
    this.setState({
      redirect: true
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
 
  render() {
    const { classes, baseRoute } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={baseRoute} />;
    }
    return (
      <Dialog
        open={true}
        onClose={this.onClose}
        TransitionComponent={Transition}
        classes={{ paper: "sm-modal-container" }}
      >
      <div className="sm-modal-button-wrapper">
        <IconButton
          aria-label="close"
          className="sm-modal-close-button"
          onClick={this.onClose}
        >
          <Icon className="sm-modal-button-icon">close</Icon>
        </IconButton>
      </div>
      <div className="sm-modal-form-section">
        <h1>Add Skills</h1>
        <form className="sm-modal-form-container" noValidate autoComplete="off">
        <div className="sm-modal-form-fields">
          <TextField
            id="select-skill-group"
            select
            label="Select"
            className="drpdown"
            value={this.state.skillGroup}
            onChange={this.handleChange('skillGroup')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your skill group"
            margin="normal"
          >
            {skillGroup.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="skill"
            label="skill"
            className="textfield"
            value={this.state.skill}
            onChange={this.handleChange('skill')}
            margin="normal"
          />
          </div>
          <div className="sm-modal-form-btn">
            <Button
              variant="contained"
              size="small"
              className="sm-modal-form-btn add"
              >
              Add
            </Button>
            <Button
              variant="contained"
              size="small"
              className="sm-modal-form-btn clear"
              >
              Cancel
            </Button>
            </div>
        </form>
      </div>
      </Dialog>
    );
  }

}

AddSkillModal.propTypes = {
  classes: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

AddSkillModal.defaultProps = {
  baseRoute: '/users/:userId'
};

export default withStyles(styles)(AddSkillModal);
