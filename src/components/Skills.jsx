export default function Skills() {
  const skills = {
    "Programming Languages": ["C#", "Java", "Javascript/Typescript"],
    "Databases": ["Postgres", "MySQL", "CosmosDB"],
    "APIs": ["REST"],
    "DevOps Technologies": ["Terraform", "Azure", "Heroku", "Travis CI", "GitHub Actions"]
  };

  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}