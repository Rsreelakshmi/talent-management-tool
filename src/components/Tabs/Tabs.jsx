import React, { Component } from "react";
import PropTypes from "prop-types";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import "./Tabs.css";

class Tabs extends Component {
  render() {
    const { tab, tabClickHandler } = this.props;
    return (
      <div className="tm-tabs-container">
        <MUITabs
          value={tab}
          onChange={tabClickHandler}
          indicatorColor="secondary"
          centered={true}
        >
          <MUITab label="Home" value="home" />
          <MUITab label="Profile" value="profile" />
          {/* <MUITab label="Skills" value="skills" /> */}
          <MUITab label="Summary" value="summary" />
        </MUITabs>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabClickHandler: PropTypes.func.isRequired,
  tab: PropTypes.oneOf(["home","summary", "profile"])
};

Tabs.defaultProps = {
  tabClickHandler: () => {},
  tab: "summary"
};

export default Tabs;
