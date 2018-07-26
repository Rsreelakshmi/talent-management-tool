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
import "./CreateTalentModal.css";

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

class CreateTalentModal extends Component {
  state = {
    redirect: false,
    skill: '',
    multiline: '',
    skillsSet: [{name:'', skill:''}],
    bio: '',
    designation: '',
    firstname: '',
    lastname: '',
    email: '',
    skillInterest: '',
    skillDate: '',
    isAdd: false
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

  addSkillFields = () => {
    this.setState({
      skillsSet: this.state.skillsSet.concat([{ name: '' , skill: ''}])
    });
  };

  handleSkillSetChange = (idx) => (evt) => {
    const newSkillset = this.state.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: evt.target.value, skill: skillSet.skill };
    });

    this.setState({ skillsSet: newSkillset });
  };

  handleSkillChange = (idx) => (evt) => {
    const newSkillset = this.state.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: skillSet.name, skill: evt.target.value };
    });

    this.setState({ skillsSet: newSkillset });
  }
 
  render() {
    const { classes, baseRoute } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={baseRoute} />;
    }
    return (
      <Dialog
        fullScreen
        open={true}
        onClose={this.onClose}
        TransitionComponent={Transition}
        classes={{ paper: "sm-ct-modal-container" }}
      >
      <div className="sm-ct-modal-button-wrapper">
        <IconButton
          aria-label="close"
          className="sm-ct-modal-close-button"
          onClick={this.onClose}
        >
          <Icon className="sm-ct-modal-button-icon">close</Icon>
        </IconButton>
      </div>
      <div className="sm-ct-modal-form-section">
        <h1>Create your talent record</h1>
        <form className="sm-ct-modal-form-container" noValidate autoComplete="off">
          <div className="sm-ct-modal-form-fields">
            <TextField
                id="designation"
                multiline
                label="I am"
                className="textfield"
                value={this.state.designation}
                onChange={this.handleChange('designation')}
                margin="normal"
              />
              <TextField
                id="firstname"
                label="First Name"
                className="textfield"
                value={this.state.firstname}
                onChange={this.handleChange('firstname')}
                margin="normal"
              />
              <TextField
                id="lastname"
                label="Last Name"
                className="textfield"
                value={this.state.lastname}
                onChange={this.handleChange('lastname')}
                margin="normal"
              />
              <TextField
                id="email"
                label="email ID"
                className="textfield"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <div className="sm-ct-modal-skill-set-section skill-group-section">
                <h4 className="sm-ct-modal-skill-sec-title"> Skill section</h4>
                {this.state.skillsSet.map((skillSet, id) => (
                  <div className="" key={id}>
                    <TextField
                      id="select-skill-group"
                      select
                      label="Select"
                      className="drpdown"
                      value={skillSet.name}
                      onChange={this.handleSkillSetChange(id)}
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
                      value={skillSet.skill}
                      onChange={this.handleSkillChange(id)}
                      margin="normal"
                    />
                    <TextField
                      id="date"
                      label="From (date)"
                      type="date"
                      value={this.state.skillDate}
                      className={classes.textField}
                      onChange={this.handleChange('skillDate')}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                ))}
                {/* <IconButton className="skill-add" onClick={this.addSkillFields()}>
                  <Icon className="" color="secondary" style={{ fontSize: 30 }}>
                    add_circle
                  </Icon>
                </IconButton> */}
              </div>
              <TextField
                id="interest-skill"
                multiline
                label="Interested in"
                className="textfield"
                value={this.state.skillInterest}
                onChange={this.handleChange('skillInterest')}
                margin="normal"
              />
            <TextField
                id="bio"
                multiline
                label="About yourself"
                className="textfield"
                value={this.state.bio}
                onChange={this.handleChange('bio')}
                margin="normal"
              />
            </div>
            <div className="sm-ct-modal-form-btn">
              <Button
                variant="contained"
                size="small"
                className="sm-ct-modal-form-btn add"
                >
                Add Talent
              </Button>
              <Button
                variant="contained"
                size="small"
                className="sm-ct-modal-form-btn clear"
                >
                Clear
              </Button>
              </div>
          </form>
        </div>
      </Dialog>
    );
  }

}

CreateTalentModal.propTypes = {
  classes: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

CreateTalentModal.defaultProps = {
  baseRoute: '/landingpage/home'
};

export default withStyles(styles)(CreateTalentModal);
