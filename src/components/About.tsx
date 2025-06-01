
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated technical professional with extensive experience in 
              <span className="text-blue-400 font-semibold"> tech support</span>, 
              <span className="text-purple-400 font-semibold"> data analysis</span>, 
              <span className="text-pink-400 font-semibold"> network operations</span>, and 
              <span className="text-green-400 font-semibold"> administrative support</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My background spans from hands-on network troubleshooting in telecom and mining environments 
              to building data pipelines and creating predictive models. I excel at solving 
              complex technical problems and thrive in both hybrid and remote work environments.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With strong analytical skills and a passion for continuous learning, I bridge 
              the gap between technical complexity and practical solutions while ensuring 
              smooth operational workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <h3 className="text-blue-400 font-semibold text-xl mb-2">Technical Support</h3>
              <p className="text-gray-400">System monitoring, troubleshooting, and issue resolution</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors duration-300">
              <h3 className="text-purple-400 font-semibold text-xl mb-2">Data Analysis</h3>
              <p className="text-gray-400">Python, Pandas, predictive modeling, and visualization</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-pink-400 transition-colors duration-300">
              <h3 className="text-pink-400 font-semibold text-xl mb-2">Network Operations</h3>
              <p className="text-gray-400">IP networking, routing, and telecom infrastructure</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-colors duration-300">
              <h3 className="text-green-400 font-semibold text-xl mb-2">Administrative Support</h3>
              <p className="text-gray-400">Process automation, workflow optimization, and team coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
