// import React from "react";
// import "./Navbar.css";

// const Navbar = props => (
//           <nav className="navbar navbar-default navbar-fixed-top">
//             <div className="container-fluid">
//               <div className="navbar-header">
//                 <a className="navbar-brand" href="/">GPK</a>
//               </div>
//                 <div className="nav navbar-right">
//                     <a className="nav navbar-text" href="/about">About</a>
//                 </div>
//             </div>
//           </nav>
// )

// export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Click!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);