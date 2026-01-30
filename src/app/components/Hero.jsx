export function Hero() {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };    
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 px-6">
        <h1 className="text-white font-['Press_Start_2P',_monospace] text-5xl mb-8 
                     drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] tracking-wider">
          LE<br />MINH<br />PHUONG
        </h1>
        <p className="text-white font-['Press_Start_2P',_monospace] text-base mb-12 
                    drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] leading-loose max-w-2xl mx-auto">
          INDIE GAME DEVELOPER<br />
          THIRD-YEAR STUDENT<br />
          <span className="text-xs">POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY</span>
        </p>
            <button
            onClick={() => scrollToSection('projects')}
            className="bg-[#FFD700] text-black font-['Press_Start_2P',_monospace] text-sm 
                        px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.3)]
                        hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1
                        transition-all duration-100 active:shadow-none active:translate-x-2 active:translate-y-2"
            >
            VIEW GAMES
            </button>
      </div>
    </section>
  );
}