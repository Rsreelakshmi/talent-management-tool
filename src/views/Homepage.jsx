import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserTile from "../components/UserTile/UserTile";
import SkillList from "../components/SkillList/SkillList";
import "./Homepage.css";
import Header from "../components/Header/Header";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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

class Homepage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="sm-container">
                <Header/>
                <Grid container className="sm-section">
                    <Grid item xs={12} sm={4}>
                        <UserTile/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <SkillList/> 
                    </Grid>
                </Grid>  
                {/* <Grid container className="sm-section">
                    <Grid item xs={12} sm={8}>
                        <SkillSummary/> 
                    </Grid>
                </Grid>   */}
            </div>
        );
    }
}
Homepage.propTypes = {

};

export default withStyles(styles)(withRouter(Homepage));