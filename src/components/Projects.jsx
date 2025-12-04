export default function Projects() {
  const projects = [
    {
      name: "@morgan-stanley/composeui-messaging-abstractions – NPM library",
      description: "A standardized messaging abstraction layer for ComposeUI",
      link: "https://www.npmjs.com/package/@morgan-stanley/composeui-messaging-abstractions",
      technologies: ["Typescript"]
    },
    {
      name: "Afrodin",
      description: "A live e-commerce platform showcasing African fashion and cultural products",
      link: "https://www.afrodin.com",
      technologies: ["React", "Node.js", "Postgres"]
    },
    {
      name: "Pollster",
      description: "Application for taking polls",
      technologies: ["React", "Express", "MongoDB"]
    }
  ];

  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
            <a className="text-primary-600 dark:text-primary-300 font-medium mb-5" href={project.link}> {project.link}</a>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}