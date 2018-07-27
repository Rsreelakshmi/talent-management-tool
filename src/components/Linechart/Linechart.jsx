import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {d3, LineChart, Brush} from 'react-d3-components';
// import * as d3 from 'd3';
import "./Linechart.css";

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      borderBottom: '1px solid #ebf1f5',
      width: 200,
    },
    menu: {
      width: 200,
    },
});

const chartSeries = [
  {
    field: 'skill',
    name: 'Skill',
    color: '#ff7f0e',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  }
],
x = function(d) {
  return d.index;
}

class Linechart extends Component {
  render() {
    const chartData={label: '', values: [
      {x: new Date(2015, 2, 5), y: 1},
      {x: new Date(2015, 2, 6), y: 2},
      {x: new Date(2015, 2, 7), y: 0},
      {x: new Date(2015, 2, 8), y: 3},
      {x: new Date(2015, 2, 9), y: 2},
      {x: new Date(2015, 2, 10), y: 3},
      {x: new Date(2015, 2, 11), y: 4},
      {x: new Date(2015, 2, 12), y: 4},
      {x: new Date(2015, 2, 13), y: 1},
      {x: new Date(2015, 2, 14), y: 5},
      {x: new Date(2015, 2, 15), y: 0},
      {x: new Date(2015, 2, 16), y: 1},
      {x: new Date(2015, 2, 16), y: 1},
      {x: new Date(2015, 2, 18), y: 4},
      {x: new Date(2015, 2, 19), y: 4},
      {x: new Date(2015, 2, 20), y: 5},
      {x: new Date(2015, 2, 21), y: 5},
      {x: new Date(2015, 2, 22), y: 5},
      {x: new Date(2015, 2, 23), y: 1},
      {x: new Date(2015, 2, 24), y: 0},
      {x: new Date(2015, 2, 25), y: 1},
      {x: new Date(2015, 2, 26), y: 1}
  ]};
    const xScale= d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 800 - 70]),
    xScaleBrush= d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 800 - 70])

    const { classes } = this.props;
    return (
      <div>
        <LineChart
          data={chartData}
          width={1000}
          height={400}
          margin={{top: 10, bottom: 50, left: 275, right: 20}}
          xScale={xScale}
          xAxis={{tickValues: xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%m/%d")}}
        />
        {/* <div className="brush" style={{float: 'none'}}>
          <Brush
            width={400}
            height={50}
            margin={{top: 0, bottom: 30, left: 50, right: 20}}
            xScale={xScaleBrush}
            extent={[new Date(2015, 2, 10), new Date(2015, 2, 12)]}
            xAxis={{tickValues: xScaleBrush.ticks(d3.time.day, 2), tickFormat: d3.time.format("%m/%d")}}
          />
        </div> */}
      </div>
    );
  }
}

Linechart.propTypes = {
};

export default withStyles(styles)(Linechart);
