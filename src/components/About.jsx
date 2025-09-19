import Resume from '../assets/Ishan_Taunk_Resume.pdf';
import './About.scss';
import OpenToWork from './OpenToWork';

const About = () => {
    return(
    <div className="about-me-text">
    <div><OpenToWork/></div>
    <h1 className="about-me-text-header">Hi, I am Ishan Taunk</h1>
    <div className="about-me-text">As a Frontend Web Developer I specialise in building responsive, user-centric websites and web applications. I bring expertise in HTML, CSS, JavaScript, React and Angular to craft seamless digital experiences.</div>
    <div className='btn-section'>
        <a href={Resume} download="Ishan_Taunk_Resume.pdf"><button className='btn'>Download Resume</button></a>
    </div>
    </div>);
}

export default About;