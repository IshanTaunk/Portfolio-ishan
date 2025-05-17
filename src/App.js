import './App.scss';
import inst from "./assets/inst.png";
import { useState } from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
import Company from './components/Company';
import About from './components/About';
import AboutImage from './components/AboutImage';
import Skills from './components/Skills';
import SkillsImage from './components/SkillsImage';
import Contacts from './components/Contacts';
import ContactsImage from './components/ContactsImage';

//TO-DO
// Add Header bar and make it sticky
// Add scroll to inside header tabs to scroll to that section
// Add work experience modals for each company

const allCompanyInfo = [
    {
    companyName: "Aidetic (2020-2022)",
    workDesc : "To develop responsive web applications using HTML5, CSS3, Javascript, React and Angular framework.",
    projects : [{
        projectName: "73Strings",
        projectDescrip: "To design and maintain the AI related pages of the website using Angular framework. Created a feature which helpsthe client in uploading their documents and visualize the conatined information in an organized manner."
    }] 
},{
    companyName: "Quantum (2022-Present)",
    workDesc : "Working as a frontend developer",
    projects : [{
        projectName: "Sizer tool",
        projectDescrip: "To improve the tool in order to better the user in selecting the type of NVR according to their needs."
    },{
        projectName: "Template Upload",
        projectDescrip: "To help the user deploy the software with just an upload of document and configuring the required information."
    },{
        projectName: "USP5.0",
        projectDescrip: "To manage the USP 5.0 UI and improve it by adding new features in angular framework."
    }] 
}];

function App() {
    const [nightMode, setNightMode] = useState(false);
    const isMobileView = window.screen.width < 500;
    console.log(isMobileView,'width');
    
    const handleAlignment = (event, value) => {
        console.log(event, "eve", value);
        setNightMode(value);
    }

    return (
        !isMobileView?
        (<div className={`App${nightMode ? '-night-mode' : ''}`}>
            {/* <div className='header'>
                <ToggleButtonGroup exclusive value={nightMode} size="small" onChange={handleAlignment}>
                    <ToggleButton value={false} ><WbSunnyIcon></WbSunnyIcon></ToggleButton>
                    <ToggleButton value={true}><ModeNightIcon></ModeNightIcon></ToggleButton>
                </ToggleButtonGroup>
            </div> */}
            <div>
            <div className="row">
                <About/>
                <AboutImage />
            </div>
            <div className="row">
                <div className="we-image image-sec">
                    <img className="inst-image" src={inst} alt="inst.png" loading='lazy'></img>
                </div>
                <div className="work-experience-timeline text-sec">
                    <div className="about-me-text-header">Work</div>
                    {allCompanyInfo.map(companyInfo=>{
                        return <Company company={companyInfo} key={companyInfo.companyName}/>
                    })}
                </div>
            </div>
            {/* Skills */}
            <div className="row">
                <Skills/>
                <SkillsImage />
            </div>
            {/* Contact */}
            <div className="row">
                <ContactsImage/>
                <Contacts />
            </div>
            </div>
        </div>)
        :
        (<div className='mobile-App App'> {/* Mobile View */}
            <div>
                <AboutImage />
                <About/>
            </div>
            <div>
                <SkillsImage />
                <Skills/>
            </div>
            <div>
                <ContactsImage/>
                <Contacts />
            </div>
        </div>) 
    );
}

export default App;
