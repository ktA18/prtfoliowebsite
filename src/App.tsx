import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Coffee,
  Heart
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 }
    ],
    'Frontend Frameworks': [
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Angular', level: 70 },
      { name: 'Next.js', level: 85 }
    ],
    'Backend & Tools': [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Docker', level: 65 }
    ],
    'Design & Others': [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'AWS', level: 60 }
    ]
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kartikay
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img
              src="/WIN_20240729_12_25_30_Pro.jpg"
              alt="Kartikay - Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Passionate about creating digital experiences that make a difference. 
            Specializing in modern web technologies and user-centered design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-400 hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/WIN_20240729_12_25_30_Pro.jpg"
                alt="Kartikay - About me"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Hello! I'm Kartikay</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience creating 
                digital solutions that bridge the gap between design and technology. My journey 
                began with a Computer Science degree, and I've since developed expertise in 
                modern web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building scalable applications using React, Node.js, and cloud 
                technologies. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through technical writing.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-purple-400" />
                  <span className="text-gray-300">India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-purple-400" />
                  <span className="text-gray-300">Available for hire</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-purple-400" />
                  <span className="text-gray-300">Certified Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee size={16} className="text-purple-400" />
                  <span className="text-gray-300">Coffee enthusiast</span>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              UI/UX design, and problem-solving capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex space-x-2">
                      <a
                        href={project.live}
                        className="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various technologies and frameworks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-900 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-2 bg-purple-600/20 p-4 rounded-lg border border-purple-600/30">
                  <Award className="text-purple-400" size={20} />
                  <span className="text-purple-300">Web Development Certified</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-blue-600/20 p-4 rounded-lg border border-blue-600/30">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-blue-300">React Professional</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-green-600/20 p-4 rounded-lg border border-green-600/30">
                  <Award className="text-green-400" size={20} />
                  <span className="text-green-300">LeetCode 500+ Problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Whether you're looking for a developer, have a question, or just want to connect, 
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-400" size={20} />
                    <span className="text-gray-300">kartikay@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-purple-400" size={20} />
                    <span className="text-gray-300">India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-all duration-200 transform hover:scale-110 shadow-lg"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="your@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>by Kartikay</span>
              </p>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2024 Kartikay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;