import Resume from '../assets/Ishan_Taunk_Resume.pdf';
import './About.scss';

const About = () => {
    return(
    <div className="about-me-text text-sec">
    <div className="about-me-text-header">Hi, I am Ishan Taunk</div>
    <div>As a Frontend Web Developer I specialise in creating functional and beautiful websites and web applications that are optimised for user experience. My expertise lies in HTML, CSS, JavaScript, Angular and React.</div>
    <div className='btn-section'>
        <a href={Resume} download="Ishan_Taunk_Resume.pdf"><button className='btn'>Download Resume</button></a>
    </div>
    </div>);
}

export default About;