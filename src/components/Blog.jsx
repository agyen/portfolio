import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Building Scalable Enterprise Applications",
    date: "2023-12-15",
    excerpt: "Insights from my experience at Morgan Stanley building enterprise-scale applications.",
    readTime: "5 min read",
    tags: ["Enterprise", "Architecture", "Scalability"]
  },
  {
    title: "Mentoring Junior Developers",
    date: "2023-11-30",
    excerpt: "Lessons learned from mentoring 16+ engineers at Turntabl Ghana.",
    readTime: "4 min read",
    tags: ["Mentoring", "Leadership", "Career Growth"]
  },
  {
    title: "Version Control for Configuration Data",
    date: "2023-11-15",
    excerpt: "How we built a snapshot version control system using ASP.NET Core.",
    readTime: "6 min read",
    tags: ["ASP.NET Core", "Architecture", "Version Control"]
  }
];

export default function Blog() {
  return (
    <section className="py-16" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}