import "./Company.css";

const Company = (props)=>{
    return <div className="company">
        <h2 className="company-name">{props.company.companyName}</h2>
        <h3>{props.company.period}</h3>
        {props.company.projects.map(project=>{
        return<ul key={project.projectName}>
            <li>{project.projectDescrip}</li>
        </ul>
        })}
    </div>
}

export default Company;