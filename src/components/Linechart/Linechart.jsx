import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LineChart from 'react-d3-basic';
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
    field: 'age',
    name: 'Age',
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
    const chartData=[
      {day:'02-11-2016',skill:'java'},
      {day:'02-12-2016',skill:'JavaScript'},
      {day:'02-13-2016',skill:'React'},
      {day:'02-14-2016',skill:'NodeJS'},
      {day:'02-15-2016',skill:'Python'},
      {day:'02-16-2016',skill:'jQuery'},
      {day:'02-17-2016',skill:'angular'},
      {day:'02-18-2016',skill:'java'}
    ];

    const { classes } = this.props;
    return (
      <div className="">
        <LineChart
        width= {700}
        height= {300}
        data= {chartData}
        chartSeries= {chartSeries}
        x= {x}
      />
      </div>
    );
  }
}

Linechart.propTypes = {
};

export default withStyles(styles)(Linechart);
