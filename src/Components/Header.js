import Box from '@material-ui/core/Box';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Selfie from '../Images/Selfie.jpeg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  typography:{
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
  },
  aboutMe:{
     textAlign:"center",
     color:"White",
     fontSize:"1.50rem",
     fontFamily:'monospace',
	 paddingTop:'0'
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    alignSelf: 'center',
  },
  header:{
	background: 'linear-gradient(310deg,#553c9a,#97266d);',
    borderBottom: `3px solid ${theme.palette.divider}`,
  },
  social:{
    fontSize:'xxx-large',
    color: 'black'
  },
}));
export default function Header() {
    const classes = useStyles();
	return (
		<Box className={classes.header}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justify="center">
			<Grid item xs={12}>
				<Avatar alt="Areman Hashemi" src={Selfie} className={classes.large} />
			</Grid>
			<Box className={classes.aboutMe} >
				<Grid item xs={12} style={{fontWeight:"bolder", fontSize:"2.0rem"}}>
					<Typography style={{fontSize:"2rem", fontFamily:"monospace"}}>Areman Hashemi</Typography>
				</Grid>
				<Grid item xs={12} style={{color:"#9088af"}}>
					<Typography>aremanhashemi@gmail.com</Typography>
				</Grid>
				<Grid item xs={12} style={{fontSize:"1rem"}}>
					<p>fullstack developer with interests in parallel and distributed systems
					<br/>
					Occasionally I cook something good
					</p>            
				</Grid>
			</Box>
			<Grid item xs={12}>
				<IconButton href="https://github.com/AremanHashemi">
					<GitHubIcon className={classes.social}/>
				</IconButton>
				<IconButton href="https://www.instagram.com/areman_hashemi/">
					<InstagramIcon className={classes.social}/>
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/areman-hashemi/">
					<LinkedInIcon className={classes.social}/>
				</IconButton>
			</Grid>
		</Grid>
	</Box>
	);
}