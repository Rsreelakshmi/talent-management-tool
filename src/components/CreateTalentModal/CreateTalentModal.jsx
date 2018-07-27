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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
    formData: {
      skillsSet: [{name:'', skill:'', poc: '', skillDate:''}],
      designation: '',
      name: '',
      last_name: '',
      email: '',
      skillInterest: ''
    },
    greatWork: {
      description :''
    },
    isAdd: false
  };
  onClose = () => {
    this.setState({
      redirect: true
    });
  };
  handleChange = name => event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: event.target.value
      }
    });
  };
  handleDescChange = name => event => {
    this.setState({
      greatWork: {
        ...this.state.greatWork,
        [name]: event.target.value
      }
    });
  };

  addSkillFields = () => {
    this.setState({
      formData: {
        ...this.state.formData,
        skillsSet: this.state.formData.skillsSet.concat([{ name: '' , skill: '', poc: '', skillDate:''}])
      }
    });
  };

  handleAddSkill = this.addSkillFields.bind(this);
  handleSkillSetChange = (idx) => (evt) => {
    const newSkillset = this.state.formData.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: evt.target.value, skill: skillSet.skill, poc: skillSet.poc, skillDate: skillSet.skillDate };
    });
    
    this.setState({
      formData: {
        ...this.state.formData,
        skillsSet: newSkillset
      }
    });
  };

  handleSkillChange = (idx) => (evt) => {
    const newSkillset = this.state.formData.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: skillSet.name, skill: evt.target.value, poc: skillSet.poc, skillDate: skillSet.skillDate };
    });

    this.setState({
      formData: {
        ...this.state.formData,
        skillsSet: newSkillset
      }
    });
  };

  handlePocChange = (idx) => (evt) => {
    const newSkillset = this.state.formData.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: skillSet.name, skill: skillSet.skill, poc: evt.target.value, skillDate: skillSet.skillDate };
    });

    this.setState({
      formData: {
        ...this.state.formData,
        skillsSet: newSkillset
      }
    });
  };

  handleSkillDateChange = (idx) => (evt) => {
    const newSkillset = this.state.formData.skillsSet.map((skillSet, sidx) => {
      if (idx !== sidx) return skillSet;
      return { ...skillSet, name: skillSet.name, skill: skillSet.skill, poc: skillSet.poc, skillDate: evt.target.value };
    });

    this.setState({
      formData: {
        ...this.state.formData,
        skillsSet: newSkillset
      }
    });
  };

  createFormJson = () => {
    let formJson = {};
    formJson = this.state.formData;
    formJson.greatWork = this.state.greatWork;
    let skillJson = {};
    let tempJson;
    formJson.skillsSet.forEach(skillSet => {
      tempJson = {
        [skillSet.name] : {
          [skillSet.skill] : {
            date: skillSet.skillDate,
            pocUrl: skillSet.poc
          }
        }
      };
      skillJson = Object.assign(tempJson, skillJson);
    });
    delete formJson.skillsSet;
    formJson.skillSet = skillJson;
    // TODO: Send this json to API
    console.log(JSON.stringify(formJson));
  };
 
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
        <ValidatorForm className="sm-ct-modal-form-container" ref="form" onSubmit={this.createFormJson.bind(this)} autoComplete="off">
          <div className="sm-ct-modal-form-fields">
              <TextValidator
                id="designation"
                label="I am"
                className="textfield"
                name="designation"
                value={this.state.formData.designation}
                onChange={this.handleChange('designation')}
                validators={['required']}
                errorMessages={['this field is required', 'designation is not valid']}
                />
              <TextValidator
                id="name"
                label="First Name"
                className="textfield"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange('name')}
                validators={['required']}
                errorMessages={['this field is required', 'name is not valid']}
                />
              <TextValidator
                id="last_name"
                label="Last Name"
                className="textfield"
                name="last_name"
                value={this.state.formData.last_name}
                onChange={this.handleChange('last_name')}
                validators={['required']}
                errorMessages={['this field is required', 'last_name is not valid']}
                />
              <TextValidator
                id="email"
                label="Email"
                onChange={this.handleChange('email')}
                name="email"
                className="textfield"
                value={this.state.formData.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                />
              <div className="sm-ct-modal-skill-set-section skill-group-section">
                <h4 className="sm-ct-modal-skill-sec-title"> Skill section</h4>
                {this.state.formData.skillsSet.map((skillSet, id) => (
                  <div className="sm-ct-modal-sg-section" key={id}>
                    <TextField
                      id="select-skill-group"
                      select
                      label="Select"
                      className="sg-section-drpdown"
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
                    <TextValidator
                      id="skill"
                      label="Skill"
                      name="skill"
                      className="sg-section-skill-field"
                      value={skillSet.skill}
                      onChange={this.handleSkillChange(id)}
                      validators={['required']}
                      errorMessages={['this field is required', 'Skill is not valid']}
                      />
                    <TextField
                      id="poc"
                      label="POC URL (if any)"
                      type="textfield"
                      value={skillSet.poc}
                      className="sg-section-textfield"
                      onChange={this.handlePocChange(id)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextValidator
                      id="date"
                      label="From (date)"
                      type="date"
                      name="skill"
                      value={skillSet.skillDate}
                      className="sg-section-skill-date"
                      onChange={this.handleSkillDateChange(id)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      validators={['required']}
                      errorMessages={['this field is required', 'Date is not valid']}
                      />
                  </div>
                ))}
                <IconButton className="skill-add" onClick={this.handleAddSkill}>
                  <Icon className="" color="secondary" style={{ fontSize: 30 }}>
                    add_circle
                  </Icon>
                </IconButton>
              </div>
              <TextField
                id="interest-skill"
                multiline
                label="Interested in"
                className="textfield"
                value={this.state.formData.skillInterest}
                onChange={this.handleChange('skillInterest')}
                margin="normal"
              />
            <TextField
                id="description"
                multiline
                label="About yourself"
                className="textfield"
                value={this.state.greatWork.description}
                onChange={this.handleDescChange('description')}
                margin="normal"
              />
            </div>
            <div className="sm-ct-modal-form-btn">
              <Button
                variant="contained"
                size="small"
                className="sm-ct-modal-form-btn add"
                type="submit"
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
          </ValidatorForm>
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
