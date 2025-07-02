import React from "react";

const projects = [
  {
    title: "Online Digital Website",
    description: [
      "Developed a full Stack Digital platform with role based authentication (Admin, User, Seller).",
      "Implemented product management features using Multer and Cloudinary for image and video uploads.",
      "Integrated product search, sorting, and a detailed product page to enhance UX.",
      "Developed shopping cart and checkout system with seamless order processing.",
      "Integrated Stripe & Webhook for secure payments.",
      "Designed user dashboard with wishlist, cart, and seller profile access.",
      "Used RTK Query for efficient data fetching and state management.",
    ],
    tech: "React.js, Node.js, Express.js, MongoDB, Redux Toolkit (RTK Query), Tailwind CSS, Stripe, Webhook, NodeMailer, Cloudinary",
    link: "https://digitalstore-p5is.onrender.com/",
    demo: "https://www.youtube.com/watch?v=your-demo-video-url",
  },
  {
    title: "Next.js Blog App",
    description: [
      "Developed a full-stack blog website using Next.js, MongoDB, and Tailwind CSS.",
      "Created a secure admin panel to upload, manage, and edit blog posts.",
      "Built backend APIs for efficient MongoDB interactions.",
      "Designed responsive UI with Tailwind CSS for seamless UX.",
    ],
    tech: "Next.js, React.js, Node.js, Express.js, MongoDB, TailwindCSS, JWT Authentication",
    link: "https://github.com/sonamkumari1/blog_nextjs",
    demo: "https://www.youtube.com/watch?v=your-demo-video-url",
  },
  {
    title: "Algorithm Visualizer",
    description: [
      "Web Application for visualizing sorting algorithms.",
      "Includes: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Heap Sort, Quick Sort.",
    ],
    tech: "HTML, CSS, JavaScript",
    link: "https://sortingvisualization-kappa.vercel.app/",
    demo: "https://www.youtube.com/watch?v=your-demo-video-url",
  },
];

const Projects = () => (
  <section id="projects" className="mb-20 ">
    <h2 className="text-4xl text-center text-white mb-20">
      Projects
      <div className="h-1 w-full bg-gradient-to-r from-white to-yellow-400 mx-auto mt-10 rounded" />
    </h2>

    <div className="flex flex-wrap justify-center gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] lg:w-[30%] bg-[#1a1a1a] p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-5">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              <span className="text-white font-medium">Tech:</span>{" "}
              {project.tech}
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-4">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between gap-3 mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900 text-center transition"
            >
              Visit
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-center transition"
            >
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
