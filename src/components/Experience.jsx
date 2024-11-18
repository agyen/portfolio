import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const experiences = [
    {
      company: "Morgan Stanley",
      role: "Software Engineer (Contingent)",
      period: "Aug 2020 - Present",
      achievements: [
        "Led development of enterprise-scale applications in a 4-member cross-functional team",
        "Architected a snapshot version control system using ASP.NET Core & Angular",
        "Created an open-source packaging tool with 5+ contributors"
      ]
    },
    {
      company: "Turntabl Ghana Limited",
      role: "Software Engineer",
      period: "Oct 2019 - Present",
      achievements: [
        "Spearheaded development of time management system, boosting productivity by 30%",
        "Mentored 16+ engineers in modern development practices",
        "Established volunteer committee for tech education outreach"
      ]
    }
  ];

  return (
    <section className="py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">{experience.role}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{experience.period}</span>
      </div>
      <ul className="space-y-3">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-2 mr-3"></span>
            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}