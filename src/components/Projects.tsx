import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Undivide Project",
      description: "A climate-focused platform dedicated to bridging the digital divide and creating equitable access to technology and environmental solutions. I analyze data and provide technical support for their programs.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
      status: "Live",
      liveUrl: "https://theundivideproject.org/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "GEV Analysis - Multi-Hazard Risk Dashboard",
      description: "Interactive risk analysis dashboard for Generalized Extreme Value distributions featuring multi-hazard controls (Wind, Drought, Wildfire risks), county filtering, and dynamic risk visualizations with customizable minimum risk thresholds",
      tech: ["Python", "Streamlit", "Statistics", "Data Visualization", "Risk Analysis"],
      status: "Live",
      liveUrl: "https://gevtenstates-37sxyyuhn8ahyqvbc2yfi2.streamlit.app/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "Monica C Sanders",
      description: "Professional website showcasing expertise and services",
      tech: ["Web Development", "HTML", "CSS", "JavaScript"],
      status: "Live",
      liveUrl: "https://monicacsanders.com/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "Bonneterre Consulting",
      description: "Professional consulting website showcasing services and expertise",
      tech: ["Web Development", "HTML", "CSS", "JavaScript"],
      status: "Live",
      liveUrl: "https://bonneterreconsulting.com/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "HRAI Member Survey Analysis",
      description: "Interactive data analysis dashboard for HRAI member survey insights and visualizations",
      tech: ["Python", "Streamlit", "Pandas", "Data Analysis"],
      status: "Live",
      liveUrl: "https://hrai-member-survey-analysis-efx8m8mchyg8w725872cd5.streamlit.app/",
      githubUrl: null,
      sourceCodeText: "Confidential"
    },
    {
      title: "HRHP Fundraising Strategy Visualizations",
      description: "Strategic fundraising dashboard with comprehensive data visualizations and insights",
      tech: ["Python", "Streamlit", "Data Visualization"],
      status: "Live",
      liveUrl: "https://hrhp-fundraising-strategy-visualizations-7bd4appydu968phuahne6.streamlit.app/",
      githubUrl: null,
      sourceCodeText: "Confidential"
    },
    {
      title: "Spanish Translation Tool",
      description: "Streamlit-based tool for quick Spanish translations with formatting preservation",
      tech: ["Python", "Streamlit", "Google Translate API"],
      status: "Live",
      liveUrl: "https://spanish.streamlit.app/",
      githubUrl: "https://github.com/ValentinaAkpan/Spanish",
      sourceCodeText: "Source Code"
    },
    {
      title: "English to French Translation Tool",
      description: "Streamlit-based tool for quick English to French translations with formatting preservation",
      tech: ["Python", "Streamlit", "Google Translate API"],
      status: "Live",
      liveUrl: "https://englishtofrenchtranslate.streamlit.app/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "Bucket Camera & LCS Performance Dashboard",
      description: "Interactive dashboard analyzing BC3D bucket camera and Lens Cleaning System performance with filtering and visualization capabilities",
      tech: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
      status: "Live",
      liveUrl: null,
      githubUrl: null,
      sourceCodeText: "Confidential"
    },
    {
      title: "Potential Improvements to Operational Efficiency with ShovelMetrics™ PLM",
      description: "Analysis and recommendations for operational efficiency improvements using ShovelMetrics™ Performance Lifecycle Management",
      tech: ["Python", "Data Analysis", "Performance Analytics"],
      status: "Live",
      liveUrl: null,
      githubUrl: null,
      sourceCodeText: "Confidential"
    },
    {
      title: "Predictive Maintenance Model",
      description: "ML model for predicting equipment failures in industrial settings",
      tech: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
      status: "Coming Soon",
      sourceCodeText: "Source Code"
    },
    {
      title: "File Backup Automation Tool",
      description: "Streamlit-based file backup automation tool for secure data management",
      tech: ["Python", "Streamlit", "File Management", "Automation"],
      status: "Live",
      liveUrl: "https://filebackup.streamlit.app/",
      githubUrl: "https://github.com/ValentinaAkpan/Filebackup",
      sourceCodeText: "Source Code"
    },
    {
      title: "Data Cleaner",
      description: "Streamlit-based data cleaning and preprocessing tool for CSV files",
      tech: ["Python", "Streamlit", "Pandas", "Data Processing", "Automation"],
      status: "Live",
      liveUrl: "https://datacleanerv.streamlit.app/",
      githubUrl: null,
      sourceCodeText: "Source Code Unavailable"
    },
    {
      title: "Automation Scripts",
      description: "Collection of scripts for automating routine technical tasks - more coming soon",
      tech: ["Python", "Bash", "PowerShell"],
      status: "Coming Soon",
      sourceCodeText: "Source Code"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">Showcasing web development, data analysis tools, dashboards, and automation solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                  <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
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
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold opacity-50 cursor-not-allowed">
                    <ExternalLink size={16} />
                    Demo Not Available
                  </button>
                )}
                
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 text-sm font-semibold hover:border-blue-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    {project.sourceCodeText}
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-500 text-sm font-semibold opacity-50 cursor-not-allowed">
                    <Github size={16} />
                    {project.sourceCodeText}
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
