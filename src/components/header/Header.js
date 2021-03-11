import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" style={{
          "background-color": "#B72B2B"}}>
          <Toolbar className="app-header">
          <IconButton edge="start"color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h6">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
