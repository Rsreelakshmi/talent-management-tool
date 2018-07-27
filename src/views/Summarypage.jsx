import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import SkillSummary from "../components/SkillSummary/SkillSummary";
import Header from "../components/Header/Header";
import Skillchart from "../components/Skillchart/Skillchart";
import { connect } from "react-redux";
import Tabs from "../components/Tabs/Tabs";
import { actionUpdateTab } from "../store/actions";
import "./Userdetailpage.css";

class Summarypage extends Component {
    handleChange = (event, value) => {
        const { history } = this.props;
        history.push(`/landingpage/${value}`);
    };
    componentWillMount() {
        const { updateTab } = this.props;
        updateTab("summary");
    }
    render() {
        const { tab } = this.props;
        return (
            <div className="sm-container">
                <Header/>
                <Paper elevation={1}>
                    <Tabs tab={tab} tabClickHandler={this.handleChange} />
                </Paper>
                <Grid container className="sm-section">
                    <Grid item xs={12} sm={6} className="sm-summary-chart">
                        <Skillchart/>
                    </Grid>
                    <Grid item xs={12} sm={6} className="sm-summary-desc">
                        <Card className="sm-summary-card">
                            <CardContent>
                                <div className="">
                                    <p>John is well experienced in Python and he has done POCs using the same.</p>
                                    <p>Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                    <p>Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                    <p>Please find the POC links below:</p>
                                    <a href="#">https://jsbin.com/nocecif/3/</a>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>  
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
Summarypage.propTypes = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Summarypage));