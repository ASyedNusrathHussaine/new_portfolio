import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Supermarket Management System',
      tag: 'College Project',
      description: 'Built a modern grocery web application with customer and admin dashboards. Implemented cart handling and order workflows with a clean UI.',
        liveDemo: 'https://spms-lac.vercel.app/',
        github: 'https://github.com/SyedNusrath07/SPMS.git',
      features: [
        'Customer and admin dashboards',
        'Product and order management',
        'Modular React components',
      ],
      technologies: ['React', 'Context API', 'Tailwind CSS'],
    },
    {
      title: 'Personal Portfolio',
      tag: 'Personal Project',
      description:
        "This portfolio website (the current project) showcases skills, projects, and contact information. Built with React, TypeScript, Vite and Tailwind CSS with a focus on accessibility and responsive design.",
      features: [
        'Responsive layout with Hero, Projects, Skills, Education, and Contact sections',
        'Reusable React components and Tailwind utility classes',
        'TypeScript types and Vite for fast development and build',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Dr.AI | AI-Powered Medical Symptom Analysis',
      tag: 'Mini Project',
      description:
        'Developed a responsive AI medical assistant with text, voice, and image input using React (TypeScript) and Tailwind CSS. Integrated a Gemini API backend to provide accurate symptom analysis, emergency recommendations, and ensured accessibility for inclusive user experience.',
      features: [
        'Text, voice, and image input for symptom reporting',
        'AI-powered symptom analysis and emergency recommendations',
        'Accessible and responsive UI built with Tailwind CSS',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
      liveDemo: 'https://dr-ai-syeds-projects-67bfc3ee.vercel.app/',
      github: 'https://github.com/SyedNusrath07/Dr.Ai.git',
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-slate-400 transition-colors">
              <div className="mb-4">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                  project.tag === 'Main College Project'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {project.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.features.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <button className="flex items-center gap-1 text-sm text-slate-900 opacity-50 cursor-not-allowed" disabled>
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                ) : (
                  <button className="flex items-center gap-1 text-sm text-slate-900 opacity-50 cursor-not-allowed" disabled>
                    <Github size={16} />
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
