import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SkillList from "../components/SkillList/SkillList";
import "./Homepage.css";
import Header from "../components/Header/Header";

class Landingpage extends Component {
    render() {
        return (
            <div className="sm-landing-container">
                <Header/>
                <Grid container className="sm-landing-section">
                    <div className="sm-landing-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu est leo. Maecenas vulputate, mi et 
                        congue facilisis, est urna elementum lacus, sed eleifend sem eros sit amet massa. Aliquam.
                    </div>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className="sm-landing-btn"
                        component={Link}
                        to="/landingpage/add-talent"
                        >
                        Add Talent
                    </Button>
                    <div className="clearfix"></div>
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
Landingpage.propTypes = {

};

export default withRouter(Landingpage);