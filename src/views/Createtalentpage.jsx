import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header/Header";
import "./Homepage.css";
import CreateTalentModal from "../components/CreateTalentModal/CreateTalentModal";

class Createtalentpage extends Component {
    render() {
        return (
            <div className="sm-container">
                <Header />
                <Grid container className="sm-section">
                    <Grid item xs={12} sm={12}>
                        <CreateTalentModal/>
                    </Grid>
                </Grid>  
            </div>
        );
    }
}
Createtalentpage.PropTypes = {

};

export default withRouter(Createtalentpage);