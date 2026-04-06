const skillGroups = [
  {
    title: 'Frontend',
    description:
      '5+ years of experience building fast, scalable, and responsive front-end applications.',
    items: [
      'React',
      'Next.js',
      'Angular',
      'Redux',
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'Webpack'
    ]
  },
  {
    title: 'Workflow & Delivery',
    description:
      'Experience working with cross-functional teams in Agile environments and shipping features with consistency.',
    items: ['Agile', 'Scrum', 'Jira', 'Bitbucket', 'Git', 'Figma', 'Storybook', 'Jest']
  },
  {
    title: 'Soft Skills',
    description:
      'Strong communication, ownership, and adaptability across product, UX, QA, and engineering collaboration.',
    items: [
      'Communication',
      'Collaboration',
      'Adaptability',
      'Problem-solving',
      'Leadership',
      'Time Management'
    ]
  }
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-blue-400/30 bg-white/5 p-5 backdrop-blur-sm"
        >
          <h3 className="mb-2 text-lg font-semibold text-blue-400">
            {group.title}
          </h3>

          <p className="mb-4 text-sm leading-6 text-white/75 sm:text-base">
            {group.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="list-none rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;