import Box from '@material-ui/core/Box';
import ProjectList from './ProjectList';
import './Body.css';

export default function Header() {
	return (
		<Box id='Body'>
			<div id='ProjectList'>
				<h1 style={{textAlign:"-webkit-center"}}>Projects</h1>
				<ProjectList/>
			</div>	
		</Box>
	);
}