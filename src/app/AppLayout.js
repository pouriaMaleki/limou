import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import css from "./AppLayout.module.sass"
import MenuItems from "./MenuItems"

class AppLayout extends Component {
  state = {
    sliderOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      sliderOpen: open,
    });
  };

  render() {
    return (
      <div className={css.container}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={css.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={css.flex}>
              Learno
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.sliderOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={css.list}>
              <MenuItems/>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AppLayout;
