const Experience = () => {
  const experiences = [
    {
      role: "Technical Support Specialist",
      company: "Weir Motion Metrics",
      timeFrame: "Jun 2024 – Present",
      location: "Vancouver, Hybrid",
      type: "Full-time",
      responsibilities: [
        "Monitoring systems and resolving technical issues involving IP networking, routing, and synchronization",
        "Troubleshooting across Windows, Linux, and proprietary software",
        "Using Jira and Salesforce to manage reports and track performance",
        "Working with remote servers, collecting data from mine sites",
        "Collaborating with global teams on R&D and system improvements"
      ]
    },
    {
      role: "Technical Support & Data Analyst",
      company: "The Undivide Project",
      timeFrame: "May 2024 – Present",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Supported data infrastructure and reporting workflows aligned with UN-related program goals and compliance standards",
        "Automated data collection, transformation, and reporting tasks using Python and spreadsheet-based tools to reduce manual workload",
        "Conducted quality assurance checks on incoming datasets, ensuring accuracy, completeness, and consistency before analysis or distribution",
        "Built custom scripts to streamline recurring administrative and data-processing tasks, improving efficiency and reducing errors",
        "Assisted project teams with setting up digital tools and technical systems for collaboration, remote communication, and information tracking",
        "Created internal documentation and training resources to support non-technical staff in using digital systems and handling data securely"
      ]
    },
    {
      role: "Data Analyst",
      company: "Contract",
      timeFrame: "Jan 2024 – Oct 2024",
      location: "Remote",
      type: "Contract",
      responsibilities: [
        "Analyzed operational data using Python, Pandas, and NumPy to identify trends and performance metrics",
        "Created predictive models and visualizations using Plotly and Matplotlib to support business decision-making",
        "Built automated data pipelines to integrate multiple data sources and streamline reporting processes",
        "Developed custom dashboards and reports for stakeholders to track key performance indicators",
        "Collaborated with cross-functional teams to understand data requirements and deliver actionable insights",
        "Implemented data quality checks and validation procedures to ensure accuracy and reliability of analysis"
      ]
    },
    {
      role: "Administrative Assistant",
      company: "On-site",
      timeFrame: "Jul 2023 – Jun 2024",
      location: "Vancouver",
      type: "Full-time",
      responsibilities: [
        "Provided comprehensive administrative support across teams, ensuring smooth daily operations and effective communication",
        "Led efforts to automate repetitive office tasks using tools like Excel macros, Google Sheets scripts, and online forms, saving time and reducing manual errors",
        "Streamlined scheduling, reporting, and document management processes by introducing digital workflows and shared systems",
        "Coordinated internal meetings, event logistics, and external communications with a strong focus on detail and follow-through",
        "Created and maintained organized digital filing systems, improving data accessibility and team productivity",
        "Supported cross-functional collaboration by training colleagues on new tools and documenting updated procedures",
        "Acted as a point of contact for internal operations, assisting with onboarding, supply tracking, and process improvements"
      ]
    },
    {
      role: "Data Analyst & Admin",
      company: "Virtual Gurus",
      timeFrame: "Mar 2022 – Feb 2024",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Managed comprehensive data systems and databases to support business operations and decision-making",
        "Organized team workflows and project management processes to improve efficiency and collaboration",
        "Contributed to web development projects using modern frameworks and technologies",
        "Analyzed client data to provide insights and recommendations for business improvement",
        "Created and maintained documentation for data processes and administrative procedures",
        "Supported remote team coordination and communication across multiple time zones"
      ]
    },
    {
      role: "Network Team Lead",
      company: "Huawei",
      timeFrame: "Sep 2019 – Mar 2020",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Led a team of network engineers in field troubleshooting and rapid alarm response across multiple sites",
        "Oversaw comprehensive network outage tracking and performance review processes to minimize downtime",
        "Managed ticket resolution workflows and prioritized critical network issues for optimal service delivery",
        "Coordinated with multiple departments to ensure efficient resource allocation and technical support",
        "Developed and implemented standard operating procedures for network maintenance and emergency response",
        "Mentored junior engineers and conducted training sessions on network troubleshooting techniques"
      ]
    },
    {
      role: "Network Support Engineer",
      company: "Huawei",
      timeFrame: "Nov 2017 – Aug 2019",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Monitored 2G/3G network infrastructure and managed fault detection systems to ensure optimal network performance",
        "Provided technical customer support and coordinated field service dispatch for network issues",
        "Analyzed network performance metrics and generated reports for management and client stakeholders",
        "Troubleshot complex network problems and implemented solutions to prevent recurring issues",
        "Maintained network documentation and updated configuration management databases",
        "Collaborated with vendors and third-party contractors to resolve hardware and software issues"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "Contract",
      timeFrame: "Oct 2016 – Oct 2017",
      location: "Lagos",
      type: "Contract",
      responsibilities: [
        "Provided comprehensive end-user technical support through multiple channels including chat, email, and phone",
        "Resolved network connectivity issues and troubleshot hardware and software problems for clients",
        "Maintained detailed documentation of support cases and developed knowledge base articles",
        "Implemented customer satisfaction improvement initiatives that increased resolution rates",
        "Trained new support staff on technical procedures and customer service best practices",
        "Escalated complex technical issues to appropriate teams while maintaining client communication"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-blue-500/20 text-blue-400 border-blue-400";
      case "Freelance": return "bg-purple-500/20 text-purple-400 border-purple-400";
      case "Contract": return "bg-green-500/20 text-green-400 border-green-400";
      default: return "bg-gray-500/20 text-gray-400 border-gray-400";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-4">{exp.timeFrame}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
