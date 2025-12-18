function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python'],
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['SQL'],
    },
    {
      title: 'Core Concepts',
      skills: ['Object-Oriented Programming', 'Data Structures'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
