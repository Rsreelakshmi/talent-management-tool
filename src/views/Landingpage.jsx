import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "../components/Tabs/Tabs";
import "./Userdetailpage.css";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";
import Skillchart from "../components/Skillchart/Skillchart";
import Linechart from "../components/Linechart/Linechart";

class Landingpage extends Component {
    handleChange = (event, value) => {
        const { history } = this.props;
        history.push(`/landingpage/${value}`);
      };
    componentWillMount() {
        const { updateTab } = this.props;
        updateTab("home");
    }
    render() {
        const {tab} = this.props;
        return (
            <div className="sm-landing-container">
                <Header/>
                <Paper elevation={1}>
                    <Tabs tab={tab} tabClickHandler={this.handleChange} />
                </Paper>
                <Grid container className="sm-landing-section">
                    <Grid item xs={12} sm={12} className="sm-landing-chart">
                        {/* <Skillchart/> */}
                        <Linechart/>
                    </Grid>
                </Grid>  
                <Grid container >
                    <Grid item xs={12} sm={12} className="sm-landing-desc">
                        <Grid item xs={12} sm={8} className="sm-landing-btn-desc">
                            <div className="sm-landing-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu est leo. Maecenas vulputate, mi et 
                                congue facilisis, est urna elementum lacus, sed eleifend sem eros sit amet massa. Aliquam.
                            </div>
                            </Grid>
                        <Grid item xs={12} sm={4} className="sm-landing-btn-section">
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
                        </Grid>
                        <div className="clearfix"></div>
                    </Grid>
                </Grid>
                {/* <Grid container className="sm-section">
                    
                </Grid>   */}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    tab: state.tab.value,
});
const mapDispatchToProps = dispatch => ({
    updateTab: data => {
      dispatch(actionUpdateTab(data));
    }
});
  
Landingpage.propTypes = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )( withRouter(Landingpage));