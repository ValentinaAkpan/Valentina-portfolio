const Experience = () => {
  const experiences = [
    {
      role: "Technical Support Specialist",
      company: "Weir Motion Metrics",
      timeFrame: "Jun 2024 – Present",
      location: "Vancouver, Hybrid",
      type: "Full-time",
      responsibilities: [
        "Monitor systems and fix technical issues with IP networking and routing",
        "Troubleshoot problems across Windows, Linux, and company software",
        "Use Jira and Salesforce to track tickets and performance metrics",
        "Work with remote servers and collect data from mining sites",
        "Collaborate with teams worldwide on R&D projects"
      ]
    },
    {
      role: "Technical Support & Data Analyst",
      company: "The Undivide Project",
      timeFrame: "May 2024 – Present",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Support data systems for UN-related programs and compliance requirements",
        "Automate data collection and reporting with Python to reduce manual work",
        "Check data quality to make sure everything is accurate before analysis",
        "Write scripts to streamline repetitive tasks and reduce errors",
        "Help teams set up digital tools for collaboration and remote work",
        "Create documentation and training materials for non-technical staff"
      ]
    },
    {
      role: "Data Analyst",
      company: "Contract",
      timeFrame: "Jan 2024 – Oct 2024",
      location: "Remote",
      type: "Contract",
      responsibilities: [
        "Analyze business data using Python, Pandas, and NumPy to find trends",
        "Create charts and predictive models with Plotly and Matplotlib",
        "Build automated pipelines to connect different data sources",
        "Make dashboards and reports to track key metrics for stakeholders",
        "Work with different teams to understand what data they need",
        "Set up data validation to ensure analysis accuracy"
      ]
    },
    {
      role: "Administrative Assistant",
      company: "On-site",
      timeFrame: "Jul 2023 – Jun 2024",
      location: "Vancouver",
      type: "Full-time",
      responsibilities: [
        "Handle admin work across teams to keep daily operations running smoothly",
        "Automate repetitive tasks using Excel macros and Google Sheets to save time",
        "Improve scheduling, reporting, and document processes with digital workflows",
        "Coordinate meetings, events, and communications with attention to detail",
        "Organize digital filing systems to make data easier to find",
        "Train colleagues on new tools and document updated procedures",
        "Serve as main contact for internal operations and process improvements"
      ]
    },
    {
      role: "Data Analyst, Web Developer & Administrative Assistant - Multiple Companies",
      company: "Virtual Gurus",
      timeFrame: "Mar 2022 – Feb 2024",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "CUTRIC - Canadian Urban Transit Research & Innovation Consortium: Administrative Assistant",
        "The Undivide Project - Non-profit promoting social cohesion and democracy: Data Analyst/Executive Assistant", 
        "HRAI - Heating, Refrigeration and Air Conditioning Institute of Canada: Administrative Assistant/Website Manager",
        "Spur Communications - Strategic communications and public affairs agency: Executive Assistant/Personal Assistant",
        "Arinka Services Inc. - Business consulting and administrative services: Administrative Assistant",
        "Selling Circus - Digital Marketing & Funnel Strategy Agency: Administrative Assistant/Automation Expert", 
        "Advocates for Reproductive Education (WeARE) - Reproductive health advocacy organization: Administrative Assistant/Data Analyst",
        "Resilient Renewables LLC - Clean energy consulting and project development: Administrative Assistant",
        "Tease Tea INC - Premium tea retailer and wellness brand: Administrative Assistant",
        "Ecologic Energy Advisors - Energy efficiency consulting firm: Technical Customer Service Representative",
        "Heckya Events Inc - Event planning and management company: E-commerce Assistant",
        "Families Canada - National family advocacy organization: Web Developer",
        "Ogden Surgical-Medical Society - Medical professional association: Administrative Assistant",
        "K3 Fitness LLC - Fitness training and wellness services: Administrative Assistant"
      ]
    },
    {
      role: "Network Team Lead",
      company: "Huawei",
      timeFrame: "Sep 2019 – Mar 2020",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Led a team of network engineers to troubleshoot issues and respond to alarms quickly",
        "Track network outages and review performance to minimize downtime",
        "Manage ticket workflows and prioritize critical network problems",
        "Coordinate with different departments for resource allocation and support",
        "Create standard procedures for network maintenance and emergency response",
        "Mentor junior engineers and run training sessions on troubleshooting"
      ]
    },
    {
      role: "Network Support Engineer",
      company: "Huawei",
      timeFrame: "Nov 2017 – Aug 2019",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Monitor 2G/3G networks and manage fault detection systems",
        "Provide technical support and coordinate field service for network issues",
        "Analyze network performance and create reports for management and clients",
        "Troubleshoot complex network problems and implement solutions",
        "Maintain network documentation and update configuration databases",
        "Work with vendors and contractors to resolve hardware and software issues"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "Contract",
      timeFrame: "Oct 2016 – Oct 2017",
      location: "Lagos",
      type: "Contract",
      responsibilities: [
        "Provide technical support through chat, email, and phone",
        "Fix network connectivity issues and troubleshoot hardware/software problems",
        "Document support cases and create knowledge base articles",
        "Improve customer satisfaction and increase resolution rates",
        "Train new support staff on procedures and customer service",
        "Escalate complex issues while keeping clients informed"
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
