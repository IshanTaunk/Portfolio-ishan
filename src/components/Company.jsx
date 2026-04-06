const Company = ({ company }) => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-blue-400 sm:text-xl">
          {company.companyName}
        </h3>
        <span className="text-sm text-white/60">{company.period}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 sm:text-base">
        {company.workDesc}
      </p>

      {/* Projects */}
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/80 sm:text-base">
        {company.projects.map((project, index) => (
          <li key={index} className="leading-relaxed">
            {project.projectDescrip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;