import './App.css';
import profile from "./assets/profile.jpg";
import inst from "./assets/inst.png";
import contact from "./assets/contact.jpg";
import skills from "./assets/skills-pic.jpg";
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Company from './components/Company';
import Resume from "./assets/Ishan_Taunk_Resume.pdf";

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
    
    const handleAlignment = (event, value) => {
        console.log(event, "eve", value);
        setNightMode(value);
    }

    return (
        <div className={`App${nightMode ? '-night-mode' : ''}`}>
            <div className='header'>
                <ToggleButtonGroup exclusive value={nightMode} size="small" onChange={handleAlignment}>
                    <ToggleButton value={false} ><WbSunnyIcon></WbSunnyIcon></ToggleButton>
                    <ToggleButton value={true}><ModeNightIcon></ModeNightIcon></ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
            <div className="row row-reverse">
                <div className="profile-pic image-sec">
                    <img src={profile} className="profile-pic-image" alt="atlas.jpg"></img>
                </div>
                <div className="about-me-text text-sec">
                    <div className="about-me-text-header">Hi, I am Ishan Taunk</div>
                    <div>As a Frontend Web Developer I specialise in creating functional and beautiful websites and web applications that are optimised for user experience. My expertise lies in HTML, CSS, JavaScript, Angular and React.</div>
                    <div className='btn-section'>
                        <a href={Resume} download="Ishan_Taunk_Resume.pdf"><button className='btn'>Download Resume</button></a>
                    </div>
                </div>
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
            <div className="row row-reverse">
                <div className="work-experience-image image-sec">
                    <img className="inst-image" src={skills} alt="inst.png"></img>
                </div>
                <div className="work-experience-timeline text-sec">
                    <div className="about-me-text-header">Skills</div>
                    <div className='skills-list'>
                        <strong>Framework: Angular</strong>
                    </div>
                    <div className='skills-list'>
                        <strong>Library: ReactJS</strong>
                    </div>
                    <div className='skills-list'>
                        <strong>Language: Typescript | Javascript</strong>
                    </div>
                </div>
            </div>
            {/* Contact */}
            <div className="row">
                <div className="contact-image image-sec">
                    <img src={contact} className="contact-image-pic" alt="atlas.jpg"></img>
                </div>
                <div className="contact-text text-sec">
                    <div className="about-me-text-header">Contact</div>
                    <p><strong>Phone:</strong> +91-9080975271</p>
                    <p><strong>Email:</strong> ishan.taunk444@gmail.com</p>
                    <p><strong>Github:</strong><a href='https://github.com/IshanTaunk'> https://github.com/IshanTaunk</a></p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default App;
