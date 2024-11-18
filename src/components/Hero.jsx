import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/isaacpassport.jpeg';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary-600 dark:text-primary-400">
                Isaac Agyen Duffour
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate Software Engineer specializing in building
              exceptional digital experiences. Currently working with Morgan
              Stanley and contributing to open-source projects.
            </p>
            <div className="flex space-x-6">
              <SocialLink
                href="https://github.com/agyen"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/isaac-agyen-9b29a8160"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:izagyen96@gmail.com"
                icon={FaEnvelope}
                label="Email"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
              <img
                src={profileImg}
                alt="Isaac Agyen Duffour"
                className="w-full h-full object-cover w-3/4 h-3/4 mx-auto my-auto"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-primary-500/20 dark:ring-primary-400/20 ring-offset-2"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}
