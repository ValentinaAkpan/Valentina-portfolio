
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Undivide Project",
      description: "A comprehensive web platform built to bridge divides and create meaningful connections",
      tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
      status: "Live",
      liveUrl: "https://theundivideproject.org/",
      githubUrl: null
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for operational data visualization and insights",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      status: "Coming Soon"
    },
    {
      title: "Network Monitoring Tool",
      description: "Automated system for monitoring network performance and alerts",
      tech: ["Python", "Network APIs", "Database"],
      status: "Coming Soon"
    },
    {
      title: "Predictive Maintenance Model",
      description: "ML model for predicting equipment failures in industrial settings",
      tech: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
      status: "Coming Soon"
    },
    {
      title: "Automation Scripts",
      description: "Collection of scripts for automating routine technical tasks",
      tech: ["Python", "Bash", "PowerShell"],
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">Showcasing web development, data analysis tools, dashboards, and automation solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-semibold opacity-50 cursor-not-allowed">
                    <ExternalLink size={16} />
                    View Demo
                  </button>
                )}
                
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-gray-300 text-sm font-semibold hover:border-blue-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-gray-400 text-sm font-semibold opacity-50 cursor-not-allowed">
                    <Github size={16} />
                    Source Code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            More projects coming soon! Check back for updates on my latest work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
