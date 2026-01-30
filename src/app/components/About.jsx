const skills = [
  { name: "Unity", level: 65 },
  { name: "C#", level: 80 },
  { name: "Pixel Art", level: 55 },
  { name: "Game Design", level: 60 },
  { name: "Animation", level: 50 },
];

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-[#4A90E2] relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2
            className="text-white font-['Press_Start_2P',_monospace] text-4xl 
                       drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
          >
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Character and description */}
          <div
            className="bg-[#2B2B2B] border-4 border-black p-8 
                        shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-center mb-8">
              
            </div>

            <p className="text-white font-['Press_Start_2P',_monospace] text-xs leading-loose mb-6">
              HI, I'M A INDIE DEVELOPER PASSIONATE ABOUT CREATING GAMES.
            </p>

            <p className="text-gray-300 font-['Press_Start_2P',_monospace] text-xs leading-loose">
              I SPECIALIZE IN DEVELOPING 2D AND 3D GAME PRODUCTS USING UNITY AND C#.
            </p>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-['Press_Start_2P',_monospace] text-sm">
                    {skill.name}
                  </span>
                  <span className="text-[#FFD700] font-['Press_Start_2P',_monospace] text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="w-full h-8 bg-[#2B2B2B] border-4 border-black 
                              shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]"
                >
                  <div
                    className="h-full bg-[#70C05A] border-r-4 border-black transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
