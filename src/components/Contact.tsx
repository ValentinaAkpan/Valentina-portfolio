
import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Let's discuss how I can help with your technical challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in discussing new opportunities, technical challenges, 
                and collaborative projects. Whether you need technical support, data analysis, 
                or network troubleshooting expertise, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300 group"
              >
                <Mail className="text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">your.email@example.com</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300 group"
              >
                <Linkedin className="text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-400">Connect with me</p>
                </div>
              </a>
              
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300 group"
              >
                <Github className="text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-400">View my code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400">
          © 2024 Portfolio. Built with React, Tailwind CSS, and modern web technologies.
        </p>
      </div>
    </section>
  );
};

export default Contact;
