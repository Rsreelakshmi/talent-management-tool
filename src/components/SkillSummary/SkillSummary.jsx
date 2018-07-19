import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter, Link } from "react-router-dom";
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
function createData(name, designation, project, experience) {
  id += 1;
  return { id, name, designation, project, experience };
}

const data = [
  createData('John', 'Sr. Developer', 'proj 1', 3),
  createData('Alex', 'Associate', 'proj 2', 1),
  createData('Charlie', 'Sr. Architect', 'Proj 1', 9),
  createData('Mary ', 'Sr. Manager', 'proj 1', 12),
  createData('Henry', 'AL1', 'proj 4', 2),
  createData('Catie', 'SAL1', 'proj 3', 4),
];
class SkillSummary extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className="skill-list-section">
        <Table className="skill-list-table">
          <TableHead>
            <TableRow>
              <TableCell className="skill-list-title">Name</TableCell>
              <TableCell className="skill-list-title">Designation</TableCell>
              <TableCell className="skill-list-title">Project</TableCell>
              <TableCell className="skill-list-title" numeric>Experience (in yrs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row" className="skill-list-text">
                    <Link to={`/users/${n.id}`}>{n.name}</Link>
                  </TableCell>
                  <TableCell className="skill-list-text">{n.designation}</TableCell>
                  <TableCell className="skill-list-text">{n.project}</TableCell>
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
