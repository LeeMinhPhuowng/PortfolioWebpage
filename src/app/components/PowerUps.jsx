export function PowerUps() {
  return (
    <div className="fixed bottom-8 right-8 z-40 space-y-4">
      <div
        className="bg-[#2B2B2B] border-4 border-black p-4 
                    shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white font-['Press_Start_2P',_monospace] text-xs">
            POWER UPS
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FF6347] border-2 border-black"></div>
            <span className="text-gray-300 font-['Press_Start_2P',_monospace] text-xs">
              OOP
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#32CD32] border-2 border-black"></div>
            <span className="text-gray-300 font-['Press_Start_2P',_monospace] text-xs">
              DATA STRUCTURES
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FFD700] border-2 border-black"></div>
            <span className="text-gray-300 font-['Press_Start_2P',_monospace] text-xs">
              ALGORITHM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}