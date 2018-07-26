import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./Userdetailpage.css";
import SkillSummary from "../components/SkillSummary/SkillSummary";
import Header from "../components/Header/Header";
// import Linechart from "../components/Linechart/Linechart";
import { connect } from "react-redux";
import Tabs from "../components/Tabs/Tabs";
import { actionUpdateTab } from "../store/actions";

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
                {/* <Linechart/> */}
                <Grid container className="sm-section">
                    <Grid item xs={12} sm={12}>
                        <SkillSummary/> 
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