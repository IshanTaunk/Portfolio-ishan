import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import "./Company.css";

const Company = (props)=>{
    return <>
        <div className='company-name'><strong>{props.company.companyName}</strong></div>
                    <span>{props.company.workDesc}</span>
                    <div className='project-header-text'><strong>Projects:</strong></div>
                    {props.company.projects.map(project=>{
                        return<>
                        <Accordion sx={{backgroundColor:'rgb(256,256,256,0.2)'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{backgroundColor:'rgb(256,256,256,0.2)'}}
                        >
                            <Typography>{project.projectName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {project.projectDescrip}
                            </Typography>
                        </AccordionDetails>
                        </Accordion></>
                    })}
    </>
}

export default Company;