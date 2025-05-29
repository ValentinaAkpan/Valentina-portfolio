
import { ExternalLink } from "lucide-react";

const EmailCampaigns = () => {
  const emailCampaigns = [
    {
      title: "HRAI Email Campaign - Must-read for Members: Winning Ways",
      description: "Professional email blast designed for HRAI member engagement and communication",
      tech: ["Email Marketing", "HTML", "CSS", "Constant Contact"],
      status: "Live",
      liveUrl: "https://myemail.constantcontact.com/Must-read-for-Members--Winning-Ways.html?soid=1109470830699&aid=Y_bnCf-8rgs",
      sourceCodeText: "Email Template"
    },
    {
      title: "HRAI Email Campaign - Don't Miss Out",
      description: "Engaging email blast created for HRAI member outreach and important announcements",
      tech: ["Email Marketing", "HTML", "CSS", "Constant Contact"],
      status: "Live",
      liveUrl: "https://myemail.constantcontact.com/-Don-t-miss-out-.html?soid=1109470830699&aid=Q6l8Lj9oRV4",
      sourceCodeText: "Email Template"
    }
  ];

  return (
    <section id="email-campaigns" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Email Campaigns
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">Professional email marketing campaigns and communications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {emailCampaigns.map((campaign, index) => (
            <div key={index} className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                  {campaign.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{campaign.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {campaign.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={campaign.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  View Campaign
                </a>
                
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-500 text-sm font-semibold opacity-50 cursor-not-allowed">
                  {campaign.sourceCodeText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailCampaigns;
