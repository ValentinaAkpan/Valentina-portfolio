
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
        
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Hi, I'm Valentina Akpan, an experienced Executive Assistant and virtual operations partner who helps busy entrepreneurs, consultants, and teams stay organized, on track, and focused on growth.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I specialize in handling the day-to-day so you don't have to. From calendar and task management to document organization, CRM updates, and cross-team coordination, I bring structure to chaos and make sure deadlines, details, and deliverables are always handled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <h3 className="text-blue-400 font-semibold text-xl mb-3">🌟 Executive & Admin Support</h3>
              <p className="text-gray-300">Calendar and meeting coordination, inbox triage, document management, digital filing systems, and professional communication support.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors duration-300">
              <h3 className="text-purple-400 font-semibold text-xl mb-3">🌟 Operations & Workflow Management</h3>
              <p className="text-gray-300">CRM maintenance, task tracking, SOP creation, and system organization built to scale with your business.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-pink-400 transition-colors duration-300">
              <h3 className="text-pink-400 font-semibold text-xl mb-3">🌟 Project Support & Coordination</h3>
              <p className="text-gray-300">Status reporting, follow-up tracking, team check-ins, and keeping everything (and everyone) moving forward.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-colors duration-300">
              <h3 className="text-green-400 font-semibold text-xl mb-3">🌟 Web & Tech Support</h3>
              <p className="text-gray-300">Update and troubleshoot websites (WordPress, Squarespace, Wix), handle forms and integrations, and keep things running smoothly behind the scenes.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
              <h3 className="text-yellow-400 font-semibold text-xl mb-3">🌟 Automation & Light AI</h3>
              <p className="text-gray-300">Use tools like Zapier, Make.com, Google Sheets, and ChatGPT to save time on repeat tasks without overcomplicating your systems.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
              <h3 className="text-cyan-400 font-semibold text-xl mb-3">Why Work With Me</h3>
              <div className="text-gray-300 space-y-2">
                <p>✔️ <strong>Proven Experience:</strong> 5+ years supporting professionals</p>
                <p>✔️ <strong>Detail-Focused:</strong> Clean, clear, client-ready work</p>
                <p>✔️ <strong>Reliable:</strong> Self-directed and proactive</p>
                <p>✔️ <strong>Tech-Savvy:</strong> Comfortable with all systems</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Work Smarter Together
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
