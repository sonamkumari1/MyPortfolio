
import React from 'react';

const projects = [
  {
    title: 'Online Digital Website',
    description: 'Full Stack platform with role-based auth, product management, cart, Stripe payments, dashboard.',
    tech: 'React.js, Node.js, Express.js, MongoDB, RTK, Stripe, Cloudinary',
    link: 'https://digitalstore-p5is.onrender.com/'
  },
  {
    title: 'Next.js Blog App',
    description: 'Full-stack blog with secure admin panel and responsive UI.',
    tech: 'Next.js, MongoDB, Tailwind CSS, JWT',
    link: 'https://github.com/sonamkumari1/blog_nextjs'
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Visualized sorting algorithms like Merge, Quick, Bubble Sort, etc.',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://sortingvisualization-kappa.vercel.app/'
  }
];

const Projects = () => (
  <section id="projects" className="mb-12">
    <h2 className="text-3xl font-bold text-center mb-8">
      <span className="text-white">Latest</span><span className="text-teal-400">Project</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-sm text-gray-400 mb-4">Tech: {project.tech}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 text-center"
          >
            Visit
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
