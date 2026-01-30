export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B] border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-['Press_Start_2P',_monospace] text-sm tracking-wider">
            LE MINH PHUONG
          </div>
          <div className="flex gap-6">
            {[
              { name: 'HOME', id: 'hero' },
              { name: 'PROJECTS', id: 'projects' },
              { name: 'ABOUT', id: 'about' },
              { name: 'CONTACT', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white font-['Press_Start_2P',_monospace] text-xs px-4 py-2 
                         hover:bg-[#FFD700] hover:text-black transition-all duration-200
                         border-2 border-transparent hover:border-black
                         active:translate-y-1"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
