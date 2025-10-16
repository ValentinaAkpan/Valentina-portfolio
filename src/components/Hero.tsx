
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">
              Valentina
            </span>
            <br />
            <span className="text-foreground">Akpan</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Executive Assistant & Data Analyst
            <br />
            Delivering innovative administrative solutions and exceptional analytical expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rellatechvirtualassistantservices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary rounded-lg text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Visit My Website
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border-2 border-border rounded-lg text-foreground font-semibold hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-border rounded-lg text-foreground font-semibold hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
