
import { ExternalLink } from "lucide-react";

const LandingPages = () => {
  const landingPages = [
    {
      title: "HRAI Tariff Action",
      description: "Landing page for HRAI's tariff action initiative and advocacy efforts",
      url: "https://www.hrai.ca/tariff-action",
      category: "Advocacy"
    },
    {
      title: "Skills for Heat Pump Proficiency",
      description: "Educational resource page for heat pump training and skill development programs",
      url: "https://www.hrai.ca/skills-for-heat-pump-proficiency.aspx",
      category: "Education"
    },
    {
      title: "Refrigerant Transition",
      description: "Information hub for refrigerant transition guidelines and industry updates",
      url: "https://www.hrai.ca/refrigerant-transition",
      category: "Industry Updates"
    }
  ];

  return (
    <section id="landing-pages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Landing Pages
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">Professional landing pages developed for HRAI initiatives</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {landingPages.map((page, index) => (
            <div key={index} className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{page.title}</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                  {page.category}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{page.description}</p>
              
              <a 
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
              >
                <ExternalLink size={16} />
                View Page
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPages;
