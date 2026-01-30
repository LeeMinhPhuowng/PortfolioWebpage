const projects = [
  {
    id: 1,
    title: "Capi's Adventure",
    description: 'A challenging 2D platformer about a capybara trying to escape the forest.',
    tech: ['Unity', 'C#', 'Platformer'],
    sprite: 'bird',
    color: '#FFD700',
  },
  {
    id: 2,
    title: 'Fantasy Survival',
    description: 'Fast-paced top-down survival game with thousands of surrounding enemies.',
    tech: ['Unity', 'C#', 'Top-down Survival'],
    sprite: 'hero',
    color: '#FF6347',
  },
  {
    id: 3,
    title: 'Noodle Code',
    description: 'An directionless programmer striving in life by selling bowls of noodles.',
    tech: ['Unity', 'C#', 'Job Simulator'],
    sprite: 'coin',
    color: '#32CD32',
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-white font-['Press_Start_2P',_monospace] text-4xl 
                       drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
            MY PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#2B2B2B] border-4 border-black p-6 
                       shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]
                       hover:shadow-[12px_12px_0_0_rgba(0,0,0,0.5)]
                       hover:-translate-y-1 transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Pixel art decoration */}
              <div className="flex justify-center mb-6 relative h-24">
                {/* Sprites removed */}
              </div>

              <h3 className="text-white font-['Press_Start_2P',_monospace] text-lg mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-300 font-['Press_Start_2P',_monospace] text-xs mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#FFD700] text-black font-['Press_Start_2P',_monospace] text-xs 
                             px-3 py-1 border-2 border-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button 
                className="w-full bg-transparent text-white font-['Press_Start_2P',_monospace] text-sm 
                         px-4 py-3 border-4 border-white
                         hover:bg-white hover:text-black transition-all duration-200"
              >
                PLAY DEMO
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
