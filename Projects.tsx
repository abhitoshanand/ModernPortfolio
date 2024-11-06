import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Project One',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      title: 'Project Two',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
    {
      title: 'Project Three',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600',
      github: 'https://github.com',
      demo: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Browse My Recent
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Projects
      </h2>

      <div className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{project.title}</h3>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}