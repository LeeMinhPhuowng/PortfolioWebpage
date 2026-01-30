export function ScoreCounter() {
  const score = 19725;

  return (
    <div className="fixed top-24 right-6 z-40 bg-[#2B2B2B] border-4 border-black 
                    shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#FFD700] font-['Press_Start_2P',_monospace] text-sm">
          SCORE
        </span>
      </div>
      <div className="text-white font-['Press_Start_2P',_monospace] text-2xl text-center">
        {score.toString().padStart(5, '0')}
      </div>
    </div>
  );
}