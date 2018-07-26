import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SkillList from "../components/SkillList/SkillList";
import "./Userdetailpage.css";
import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";

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

class Userskillspage extends Component {
    handleChange = (event, value) => {
        const { history } = this.props;
        history.push(`/landingpage/${value}`);
    };
    componentWillMount() {
        const { updateTab } = this.props;
        updateTab("skills");
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
const mapStateToProps = state => ({
    tab: state.tab.value,
});
const mapDispatchToProps = dispatch => ({
    updateTab: data => {
      dispatch(actionUpdateTab(data));
    }
});
Userskillspage.propTypes = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(withRouter(Userskillspage)));