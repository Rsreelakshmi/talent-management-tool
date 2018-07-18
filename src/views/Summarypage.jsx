import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Homepage.css";
import SkillSummary from "../components/SkillSummary/SkillSummary";
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

class Summarypage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="sm-container">
                <Header/>
                <Grid container className="sm-section">
                    <Grid item xs={12} sm={12}>
                        <SkillSummary/> 
                    </Grid>
                </Grid>  
            </div>
        );
    }
}
Summarypage.propTypes = {

};

export default withRouter(Summarypage);