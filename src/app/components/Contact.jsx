export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 bg-[#2B2B2B] relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-16">
          <h2 className="text-white font-['Press_Start_2P',_monospace] text-4xl 
                       drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
            CONTACT
          </h2>
        </div>

        <div className="bg-[#5C94FC] border-4 border-black p-8 
                      shadow-[12px_12px_0_0_rgba(0,0,0,0.5)] mb-12">
          <p className="text-white font-['Press_Start_2P',_monospace] text-sm text-center leading-loose mb-8">
            GOT SOME GREAT IDEAS? <br />LET'S COLLABORATE!
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-white font-['Press_Start_2P',_monospace] text-xs mb-3">
                NAME
              </label>
              <input
                type="text"
                disabled
                className="w-full bg-white border-4 border-black px-4 py-3 
                         font-['Press_Start_2P',_monospace] text-sm
                         focus:outline-none focus:shadow-[4px_4px_0_0_rgba(255,215,0,1)]
                         transition-shadow"
                placeholder="LE MINH PHUONG"
              />
            </div>

            <div>
              <label className="block text-white font-['Press_Start_2P',_monospace] text-xs mb-3">
                EMAIL
              </label>
              <input
                type="email"
                disabled
                className="w-full bg-white border-4 border-black px-4 py-3 
                         font-['Press_Start_2P',_monospace] text-sm
                         focus:outline-none focus:shadow-[4px_4px_0_0_rgba(255,215,0,1)]
                         transition-shadow"
                placeholder="lmp1972005@gmail.com"
              />
            </div>

            {/* <div>
              <label className="block text-white font-['Press_Start_2P',_monospace] text-xs mb-3">
                MESSAGE
              </label>
              <textarea
                rows={6}
                className="w-full bg-white border-4 border-black px-4 py-3 
                         font-['Press_Start_2P',_monospace] text-sm
                         focus:outline-none focus:shadow-[4px_4px_0_0_rgba(255,215,0,1)]
                         transition-shadow resize-none"
                placeholder="YOUR MESSAGE HERE..."
              />
            </div> */}

            <button
                type="button"
                onClick={() => window.open("https://mail.google.com", "_blank")}
                className="w-full bg-[#FFD700] text-black font-['Press_Start_2P',_monospace] text-sm 
                        px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.3)]
                        hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1
                        transition-all duration-100 active:shadow-none active:translate-x-2 active:translate-y-2"
                >
                SEND MAIL
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
        {[
            { name: 'GITHUB', url: 'https://github.com/LeeMinhPhuowng' },
            { name: 'FACEBOOK', url: 'https://www.facebook.com/slothprofessor/' },
            { name: 'ITCH.IO', url: 'https://tooslothfultocode.itch.io/' },
            { name: 'TIKTOK', url: 'https://www.tiktok.com/@lee.minh.phuowng' },
        ].map((item) => (
            <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-['Press_Start_2P',_monospace] text-xs 
                        px-6 py-3 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]
                        hover:bg-[#FFD700] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.3)]
                        hover:translate-x-1 hover:translate-y-1
                        transition-all duration-100 inline-block"
            >
            {item.name}
            </a>
        ))}
        </div>


        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-['Press_Start_2P',_monospace] text-xs">
            © 2026 TOO SLOTHFUL TO CODE
          </p>
          <p className="text-gray-500 font-['Press_Start_2P',_monospace] text-xs mt-2">
            HAVE A NICE DAY!
          </p>
        </div>
      </div>
    </section>
  );
}
