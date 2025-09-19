import './App.scss';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
import Company from './components/Company';
import About from './components/About';
import AboutImage from './components/AboutImage';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import ContactsImage from './components/ContactsImage';

//TO-DO
// Add Header bar and make it sticky
// Add scroll to inside header tabs to scroll to that section
// Add work experience modals for each company

const allCompanyInfo = [{
    companyName: 'Frontend Engineer @ Holiday Inn Club Vacations',
    period: '2025-Present',
    workDesc : 'To lead the UI development work for booking website.',
    projects: [{
        projectDescrip: 'Led front-end modernization with React and NextJS improving performance, maintainability, and user experience for high traffic, customer-facing application.'
    },{
        projectDescrip: 'Utilized React, Typescript and SCSS to improve the calendar feature by implementing new workflow to help the customer navigate smoothly through the resort booking flow.'
    },{
        projectDescrip: 'Fostered cross-functional collaboration accross UX, QA and engineering teams, boosting project delivery success rate by 40% and employee engagement by 50%.'
    },{
        projectDescrip: 'Added new content types with properties in Content Stack Management system and integrated the corresponding data in UI along with test cases in JEST.'
    }]
    },
    {
    companyName: "Frontend Engineer @ Quantum",
    period: '2022-2024',
    workDesc : "Working as a frontend developer",
    projects : [{
        projectDescrip: "To improve the tool in order to better the user in selecting the type of NVR according to their needs."
    },{
        projectDescrip: "To help the user deploy the software with just an upload of document and configuring the required information."
    },{
        projectDescrip: "To manage the USP 5.0 UI and improve it by adding new features in angular framework."
    }] 
},{
    companyName: "Frontend Engineer @ Aidetic",
    period: '2020-2022',
    workDesc : "To develop responsive web applications using HTML5, CSS3, Javascript, React and Angular framework.",
    projects : [{
        projectDescrip: "To design and maintain the AI related pages of the website using Angular framework. Created a feature which helps the client in uploading their documents and visualize the contained information in an organized manner."
    }] 
}];

function App() {
    const isMobileView = window.innerWidth < 500;
    console.log(isMobileView,'width');

    return (
        !isMobileView?
        (<div className='App'>
            <div className="row">
                <div className='intro-left-col'>
                    <About/>
                </div>
                <div className='intro-right-col'>
                    <AboutImage />
                </div>
            </div>
            <div className="row">
                <div className="left-col">
                    <h1>Work Experience</h1>
                </div>
                <div className="right-col">
                    {allCompanyInfo.map(companyInfo=>{
                        return <Company company={companyInfo} key={companyInfo.companyName}/>
                    })}
                </div>
            </div>
            {/* Skills */}
            <div className="row">
                <div className="left-col">
                    <h1>Skills</h1>
                </div>
                <div className="right-col">
                    <Skills/>
                </div>
            </div>
            {/* Contact */}
            <div className="row">
                <div className="left-col">
                    <ContactsImage/>
                </div>
                <div className="right-col">
                    <Contacts />
                </div>
            </div>
        </div>)
        :
        (<div className='App'> {/* Mobile View */}
            <div className='intro-sm-row'>
                <AboutImage />
            </div>
            <div className='sm-row'>
                <About/>
            </div>
            <div className='sm-row'>
                <div>
                    <h1>Work Experience</h1>
                </div>             
                {allCompanyInfo.map(companyInfo=>{
                        return <Company company={companyInfo} key={companyInfo.companyName}/>
                    })}
            </div>
            <div className='sm-row'>
                <div>
                    <h1>Skills</h1>
                </div>             
                <Skills/>
            </div>
            <div className='sm-row'>
                <ContactsImage/>
                <Contacts />
            </div>
        </div>) 
    );
}

export default App;
