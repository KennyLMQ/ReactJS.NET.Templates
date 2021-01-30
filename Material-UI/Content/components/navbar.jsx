import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Brightness4 from '@material-ui/icons/Brightness4';
import BrightnessHigh from '@material-ui/icons/BrightnessHigh';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<AppBar>
				<Toolbar>
          <Typography variant="h6">Material-UI</Typography>

          <List>
            <ListItem component="div" >
              <ListItemText inset>
                  <Link href="#" onClick={preventDefault} color='inherit'>
                    Link
                  </Link>
              </ListItemText>

              <ListItemText inset>
                  <Link href="#" onClick={preventDefault} color='inherit'>
                    Link
                  </Link>
              </ListItemText>

              <ListItemText inset>
                  <Link href="#" onClick={preventDefault} color='inherit'>
                    Link
                  </Link>
              </ListItemText>
            </ListItem >
          </List>

          <div className={classes.grow}></div>

          <IconButton color='inherit' onClick={props.toggleTheme} title='Toggle dark/light theme'>
            {
              props.type === 'dark' ?
                (<Brightness4 />) :
                (<BrightnessHigh />)
            }
          </IconButton>

          <Link href="#" onClick={preventDefault} color='inherit'>
            About
          </Link>

          {/*<List>
            <ListItem component="div" >
              <ListItemText inset>
                <Link href="#" onClick={preventDefault} color='inherit'>
                  About
                  </Link>
              </ListItemText>
            </ListItem >
          </List>*/}
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}