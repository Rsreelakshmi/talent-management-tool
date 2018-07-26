import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import "./UserDetails.css";

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
function createData(title, value) {
  id += 1;
  return { id, title, value };
}

const data = [
  createData('Name', 'John'),
  createData('e-mail', 'abc@gmail.com'),
  createData('DOB', '10/Jan/1980'),
  createData('Designation ', 'Sr. Manager'),
  createData('Interested in', 'Angular 6'),
  createData('Linkedin', 'www.linkedin.com/abc123'),
];
class UserDetails extends Component {
  render() {

    return (
      <Grid container className="sm-section">
        <Grid item xs={12} sm={6}>
          <Paper className="user-skill-list-section">
            <Table className="user-skill-list-table">
              {/* <TableHead>
                <TableRow>
                  <TableCell className="skill-list-title">User</TableCell>
                  <TableCell className="skill-list-title">Details</TableCell>
                </TableRow>
              </TableHead> */}
              <TableBody>
                {data.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell component="th" scope="row" className="user-skill-list-text">{n.title}</TableCell>
                      <TableCell className="user-skill-list-text">{n.value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>  
    );
  }

}

UserDetails.propTypes = {
  userData: PropTypes.object.isRequired,
};

UserDetails.defaultProps = {
  userData: { },
  favorites: [],
  baseRoute: "/home/"
};

export default withStyles(styles)(withRouter(UserDetails));
