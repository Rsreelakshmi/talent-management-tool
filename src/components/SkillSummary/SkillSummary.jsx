import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import "./SkillSummary.css";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


let id = 0;
function createData(name, type, level, experience) {
  id += 1;
  return { id, name, type, level, experience };
}

const data = [
  createData('Java', 'Backend', 'expert', 3),
  createData('JavaScript', 'frontend', 'expert', 6),
  createData('DevOps', 'Build', 'beginner', 1),
  createData('Python', 'Backend', 'intermediate', 2),
  createData('Python', 'Backend', 'expert', 5),
  createData('HTML5', 'Frontend', 'expert', 4),
];

class SkillSummary extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className="skill-list-section">
        <Table className="skill-list-table">
          <TableHead>
            <TableRow>
              <TableCell className="skill-list-title">Skill Name</TableCell>
              <TableCell className="skill-list-title">Skill Type</TableCell>
              <TableCell className="skill-list-title">Level</TableCell>
              <TableCell className="skill-list-title" numeric>Experience (in yrs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row" className="skill-list-text">
                    {n.name}
                  </TableCell>
                  <TableCell className="skill-list-text">{n.type}</TableCell>
                  <TableCell className="skill-list-text">{n.level}</TableCell>
                  <TableCell className="skill-list-text" numeric>{n.experience}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

SkillSummary.propTypes = {
  
};

SkillSummary.defaultProps = {
  session: { meta: {}, speakers: [], topics: [] },
  favorites: [],
  baseRoute: "/home/summary/"
};

export default withStyles(styles)(withRouter(SkillSummary));
