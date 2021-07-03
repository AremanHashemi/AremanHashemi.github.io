import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Data from '../Data/projects.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
	marginBottom: "10px",
    padding: theme.spacing(1),
	backgroundColor: "#2d3748",
	color: "white",
  },
  title: {
	  color:"white",
	  fontSize: "1.25em",
	  fontWeight: "bold",
  }
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap() {
  const classes = useStyles();
  let data = Data["projects"];
  console.log(data);
  const buildProjectList = () => (
	  data.map((project,index)=>(
		<Paper className={classes.paper} key={index}>
			<Grid container wrap="nowrap" spacing={2}>
				<Grid style={{placeSelf:"center",position:"relative", left:"-3vh"}} item>
					<Avatar 
						src={project.Img} 
						alt={project.Title}
						style={{height:"80px", width:"80px"}}/>
				</Grid>
				<Grid item xs>
					{project.Link? 
						<a href={project.Link} className={classes.title}> {project.Title} </a>
						:<Typography className={classes.title}>{project.Title}</Typography>
					}
					<Typography>{project.Body}</Typography>
				</Grid>
			</Grid>
		</Paper>
	  ))
  )
  return (
    <div className={classes.root}>
	  	{buildProjectList()}    
    </div>
  );
}