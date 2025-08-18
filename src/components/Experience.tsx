
const Experience = () => {
  const experiences = [
    {
      role: "Executive Assistant & Data Analyst",
      company: "The Undivide Project",
      timeFrame: "May 2024 – Present",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Support data systems for UN-related programs and compliance requirements",
        "Automate data collection and reporting with Python to reduce manual work",
        "Manage executive scheduling and coordinate international team communications",
        "Create documentation and training materials for stakeholders",
        "Ensure data quality and accuracy for organizational decision-making",
        "Streamline administrative processes using digital collaboration tools"
      ]
    },
    {
      role: "Data Analyst",
      company: "Contract",
      timeFrame: "Jan 2024 – Oct 2024",
      location: "Remote",
      type: "Contract",
      responsibilities: [
        "Analyze business data using Python, Pandas, and NumPy to identify trends",
        "Create interactive dashboards and predictive models with Plotly and Matplotlib",
        "Build automated reporting pipelines to connect different data sources",
        "Present insights and recommendations to executives and stakeholders",
        "Collaborate with cross-functional teams to understand analytical requirements",
        "Implement data validation processes to ensure reporting accuracy"
      ]
    },
    {
      role: "Administrative Assistant",
      company: "On-site",
      timeFrame: "Jul 2023 – Jun 2024",
      location: "Vancouver",
      type: "Full-time",
      responsibilities: [
        "Manage daily operations and administrative tasks across multiple departments",
        "Automate repetitive processes using Excel macros and Google Workspace",
        "Coordinate executive calendars, meetings, and corporate events",
        "Develop and maintain digital filing systems for improved data accessibility",
        "Create process documentation and train staff on new administrative procedures",
        "Serve as primary liaison for internal communications and operational improvements"
      ]
    },
    {
      role: "Executive Assistant, Data Analyst & Web Developer - Multiple Organizations",
      company: "Virtual Gurus",
      timeFrame: "Mar 2022 – Feb 2024",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Austin Bryant Consulting - Digital marketing company (US): Executive Assistant/Technical Support Lead",
        "CUTRIC - Canadian Urban Transit Research & Innovation Consortium (Canada): Administrative Assistant",
        "The Undivide Project - Non-profit promoting social cohesion and democracy (US): Data Analyst/Executive Assistant", 
        "HRAI - Heating, Refrigeration and Air Conditioning Institute of Canada (Canada): Administrative Assistant/Website Manager",
        "Spur Communications - Strategic communications and public affairs agency (Canada): Executive Assistant",
        "Arinka Services Inc. - Business consulting and administrative services (Canada): Administrative Assistant",
        "Selling Circus - Digital Marketing & Funnel Strategy Agency (Canada): Administrative Assistant/Automation Specialist", 
        "Advocates for Reproductive Education (WeARE) - Reproductive health advocacy organization (Canada): Administrative Assistant/Data Analyst",
        "Resilient Renewables LLC - Clean energy consulting and project development (Canada): Administrative Assistant",
        "Tease Tea INC - Premium tea retailer and wellness brand (Canada): Administrative Assistant",
        "Ecologic Energy Advisors - Energy efficiency consulting firm (Canada): Customer Service Representative",
        "Heckya Events Inc - Event planning and management company (Canada): E-commerce Assistant",
        "Families Canada - National family advocacy organization (Canada): Web Developer",
        "Ogden Surgical-Medical Society - Medical professional association (US): Web Developer",
        "K3 Fitness LLC - Fitness training and wellness services (US): Administrative Assistant"
      ]
    },
    {
      role: "Operations Team Lead",
      company: "Huawei",
      timeFrame: "Sep 2019 – Mar 2020",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Led cross-functional teams to resolve operational issues and respond to client requests",
        "Manage project workflows and prioritize critical business operations",
        "Coordinate with multiple departments for resource allocation and strategic planning",
        "Develop standard operating procedures for business continuity and efficiency",
        "Train and mentor junior staff on operational excellence and customer service",
        "Analyze performance metrics and create reports for senior management"
      ]
    },
    {
      role: "Operations Support Specialist",
      company: "Huawei",
      timeFrame: "Nov 2017 – Aug 2019",
      location: "Lagos",
      type: "Full-time",
      responsibilities: [
        "Monitor business operations and manage client service delivery systems",
        "Provide administrative support and coordinate service teams for client projects",
        "Analyze operational performance and create comprehensive reports for leadership",
        "Implement process improvements and maintain operational documentation",
        "Collaborate with vendors and partners to ensure service quality standards",
        "Support client relationship management and contract administration"
      ]
    },
    {
      role: "Customer Support Specialist",
      company: "Contract",
      timeFrame: "Oct 2016 – Oct 2017",
      location: "Lagos",
      type: "Contract",
      responsibilities: [
        "Provide exceptional customer service through multiple communication channels",
        "Resolve client inquiries and coordinate with internal teams for solutions",
        "Maintain detailed case documentation and develop knowledge base resources",
        "Analyze customer feedback to improve service delivery and satisfaction rates",
        "Train new customer service representatives on procedures and best practices",
        "Escalate complex cases while maintaining clear client communication"
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
