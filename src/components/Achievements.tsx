
import { Award, Target, TrendingUp, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <TrendingUp className="text-blue-400" size={32} />,
      title: "Machine Learning Mining Analytics App",
      description: "Developed a machine learning-powered application hosted on Streamlit that enables users to upload mining data, such as shovel digging rates and dump times. The app visualizes productivity metrics, providing customers with actionable insights into potential performance improvements and cost-saving opportunities."
    },
    {
      icon: <Target className="text-purple-400" size={32} />,
      title: "Lens Cleaning System Dashboard",
      description: "Designed a dashboard to monitor the performance of the Lens Cleaning System (LCS) used in mining operations. This tool allowed the team to better understand how the LCS was performing under different conditions, leading to actionable insights on how to enhance its effectiveness."
    },
    {
      icon: <Award className="text-green-400" size={32} />,
      title: "Spanish Translation Tool",
      description: "Developed a Streamlit-based tool that enables users to upload English transcripts and quickly generate Spanish translations. Designed for the documentation team, this solution saved significant time and costs by eliminating the need to hire external Spanish translators. The app leverages Google translation services while preserving the original formatting."
    },
    {
      icon: <Users className="text-pink-400" size={32} />,
      title: "Leadership & Operational Excellence",
      description: "Took on an interim buyer role, ensuring smooth operations during a colleague's absence without the need for temporary staffing. Demonstrated adaptability and cross-functional expertise in maintaining business continuity."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Innovative solutions and impactful contributions across data analysis, 
            machine learning, and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
