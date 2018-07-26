import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {PieChart} from 'react-d3-components';
import "./Skillchart.css";

const styles = theme => ({
});

const data = {
  label: 'SkillA',
  values: [{x: 'SkillA', y: 10}, {x: 'SkillB', y: 4}, {x: 'SkillC', y: 3},{x: 'SkillD', y: 8}, {x: 'SkillE', y: 1}, {x: 'SkillF', y: 13}]
};

class Skillchart extends Component {
  render() {
    return (
        <PieChart
          data={data}
          width={600}
          height={400}
          margin={{top: 10, bottom: 10, left: 100, right: 100}}
          tooltipOffset={{top: 175, left: 200}}
          tooltipMode={'fixed'}
          sort={null}
        />
    );
  }
}

Skillchart.propTypes = {
};

export default withStyles(styles)(Skillchart);
