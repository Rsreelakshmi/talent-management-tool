import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch, withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import AddSkillModal from "../AddSkillModal/AddSkillModal";
import SkillTag from "../SkillTag/SkillTag";
// import SpeakerSocialShare from "../SpeakerSocialShare/SpeakerSocialShare";
import "./SkillList.css";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


let id = 0;
function createData(name, type, level, experience) {
  id += 1;
  return { id, name, type, level, experience };
}

const data = [
  createData('Java', 'Backend', 'expert', 3),
  createData('JavaScript', 'frontend', 'expert', 6),
  createData('DevOps', 'Build', 'beginner', 1),
  createData('Python', 'Backend', 'intermediate', 2),
  createData('Python', 'Backend', 'expert', 5),
  createData('HTML5', 'Frontend', 'expert', 4),
];

class SkillList extends Component {
  state = {
    expanded: false,
    open: false
  };
  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  createSubRoute = () => {
    const { baseRoute } = this.props;
    <Route exact={true} path='/landingpage/add-skill' render={() => (
      <div className="App">
        <AddSkillModal baseRoute={baseRoute}/>
      </div>
    )}/>
  };
  render() {
    const { classes, baseRoute } = this.props;
    return (
      <Grid container className="sm-section">
      {this.createSubRoute()}
        <Grid item xs={12} sm={6}>
            <Card
            className={`sm-tile-root`}
          >
            <CardHeader
              className="sm-tile-header"
              classes={{
                title: "sm-tile-title",
                action: "sm-tile-header-actions"
              }}
              title="Fullstack"
              subheader={
                <Fragment>
                  <div className="sm-tile-skills">
                      <SkillTag
                          key='13'
                          label='Java'
                          color='#b52a00'
                        />
                      <SkillTag
                          key='16'
                          label='Python'
                          color='#b50090'
                        />
                      <SkillTag
                          key='15'
                          label='Javascript'
                          color='#2700b5'
                      />
                    </div>
                </Fragment>
              }
              action={
                <Fragment>
                    <IconButton
                      onClick={this.toggleExpanded}
                      className={`sm-tile-expand ${
                        this.state.expanded ? "sm-tile-expand-open" : ""
                      }`}
                    >
                      <Icon>expand_more</Icon>
                    </IconButton>
                  </Fragment>
              }
            />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent className="sm-tile-collapsed-content">
                </CardContent>
                <CardActions className="sm-tile-collapsed-footer">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  component={Link}
                  to="/landingpage/add-skill"
                >
                  Add Skill
                </Button>
                
                </CardActions>
              </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Card
            className={`sm-tile-root`}
          >
            <CardHeader
              className="sm-tile-header"
              classes={{
                title: "sm-tile-title",
                action: "sm-tile-header-actions"
              }}
              title="Fullstack"
              subheader={
                <Fragment>
                  <div className="sm-tile-skills">
                      <SkillTag
                          key='13'
                          label='Java'
                          color='#b52a00'
                        />
                      <SkillTag
                          key='16'
                          label='Python'
                          color='#b50090'
                        />
                      <SkillTag
                          key='15'
                          label='Javascript'
                          color='#2700b5'
                      />
                    </div>
                </Fragment>
              }
              action={
                <Fragment>
                    <IconButton
                      onClick={this.toggleExpanded}
                      className={`sm-tile-expand ${
                        this.state.expanded ? "sm-tile-expand-open" : ""
                      }`}
                    >
                      <Icon>expand_more</Icon>
                    </IconButton>
                  </Fragment>
              }
            />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent className="sm-tile-collapsed-content">
                </CardContent>
                <CardActions className="sm-tile-collapsed-footer">
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    component={Link}
                    to="/landingpage/add-skill"
                    >
                    Add Skill
                  </Button>
                </CardActions>
              </Collapse>
          </Card>
        </Grid>
      </Grid>  
    );
  }

}

SkillList.propTypes = {
  
};

SkillList.defaultProps = {
  session: { meta: {}, speakers: [], topics: [] },
  favorites: [],
  baseRoute: "/home/"
};

export default withStyles(styles)(withRouter(SkillList));
