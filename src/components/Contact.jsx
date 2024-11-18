export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact</h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
            <a href="mailto:izagyen96@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              izagyen96@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
            <a href="tel:+233553458272" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              +233 553 458 272
            </a>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/isaac-agyen-9b29a8160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              linkedin.com/in/isaac-agyen-9b29a8160
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}