import './Skills.scss';

const Skills = () => {
    return (<div className='skills'>
        <div className='skills-list'>
            <strong>Frontend</strong>
            <div>5+ Years of experience in building fast and responsive front-end applications</div>
            <ul>
                <li>Redux</li>
                <li>React</li>
                <li>Angular</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Webpack</li>
                <li>Javascript</li>
                <li>Typescript</li>
            </ul>
        </div>
        <div className='skills-list'>
            <strong>Agile</strong>
            <div>Experience in working with cross-functional teams in an Agile environments with international clients</div>
            <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Jira</li>
                <li>Bitbucket</li>
            </ul>
        </div>
        <div className='skills-list'>
            <strong>Soft Skills</strong>
            <div>Demonstrated ability to communicate effectively, collaborate in teams, and adapt to new challenges.</div>
            <ul>
                <li>Communication</li>
                <li>Collaboration</li>
                <li>Adaptability</li>
                <li>Problem-solving</li>
                <li>Leadership</li>
                <li>Time Management</li>
            </ul>
        </div>
    </div>)
}

export default Skills;