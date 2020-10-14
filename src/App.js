import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QTemu
          <Button color="inherit"> Create Meetup </Button>
          <Button color="inherit"> Explore </Button>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar><br></br>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar src="/static/images/avatar/1.jpg" className={classes.large} variant="square"></Avatar>
              </Grid>
              <Grid item xs>
                <Typography fontWeight="fontWeightBold">
                  <Box fontWeight="fontWeightBold" m={2}>
                    Hacktiv8 Meetup
                  </Box>
                  <Box m={2}>
                    Location : Jakarta, Indonesia
                  </Box>
                  <Box m={2}>
                    Members : 1,078
                  </Box>
                  <Box m={2}>
                    Organizers : Adhy Wiranata
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">Join Us</Button>
                  </Box>
                </Typography> 
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            Next Meetup
          </Box>
        </Grid>
      </Grid>      
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
        <Box fontWeight="fontWeightBold" m={1}>
          <Paper className={classes.paper}>Awesome Meetup and Event
        <br></br>25 January 2019 <br></br><br></br>Hello, JavaScrip & Node.js Ninjas!
        <br></br>Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!
        <br></br>The meetup format will contain some short stories and technical talks.
        <br></br>If your have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
        <br></br>Remember to bring a photo ID to get through building security.
        <br></br>_____
        <br></br>See you there!
        <br></br>Best,Hengki,Giovanni,Sofian,Riza,Agung The JakartaJS Organizers</Paper>
        </Box>
        </Grid>
      </Grid>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            About Meetup
          </Box>
        </Grid>
      </Grid>      
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.
        <br></br>Twitter: @JakartaJS and we use the hashtag #jakartajs
        </Grid>
      </Grid>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            Members
          </Box>
        </Grid>
      </Grid> 
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar src="/static/images/avatar/1.jpg" className={classes.small}></Avatar>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    Organizers
                  </Box>
                  <Box m={1}>
                    Adhy Wiranata
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={2}>
                <Box m={5}>
                  4 others.
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            Past Meetups
          </Box>
        </Grid>
      </Grid> 
      <Grid justify="center" container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    27 November 2017
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    #39 JakartaJS April Meetup with<br></br>
                    kumparan
                  </Box>
                  <Box m={2}>
                    139 went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    27 October 2017
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    #38 JakartaJS April Meetup with<br></br>
                    BliBli
                  </Box>
                  <Box m={2}>
                    113 went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    27 September 2017
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    #37 JakartaJS April Meetup with<br></br>
                    Hacktiv8
                  </Box>
                  <Box m={2}>
                    110 went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
      </Grid><br></br><br></br>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          <Box fontWeight="fontWeightBold" m={1}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid><br></br>
      <Grid justify="center" container spacing={3}>
        <Typography fontWeight="fontWeightBold">
          <Box m={2}>
            Copyright Hacktiv8 2018
          </Box>
        </Typography> 
      </Grid>       
    </div>
  );
}