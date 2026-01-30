export function PixelBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating clouds */}
      <div className="absolute top-20 left-[10%] w-24 h-12 animate-[float_8s_ease-in-out_infinite]">
        <div className="grid grid-cols-8 grid-rows-4 gap-0 w-full h-full">
          <div className="col-start-2 col-span-3 bg-white row-start-1"></div>
          <div className="col-start-1 col-span-6 bg-white row-start-2"></div>
          <div className="col-start-1 col-span-7 bg-white row-start-3"></div>
          <div className="col-start-3 col-span-4 bg-white row-start-4"></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-[20%] w-20 h-10 animate-[float_10s_ease-in-out_infinite_2s]">
        <div className="grid grid-cols-8 grid-rows-4 gap-0 w-full h-full">
          <div className="col-start-2 col-span-3 bg-white row-start-1"></div>
          <div className="col-start-1 col-span-6 bg-white row-start-2"></div>
          <div className="col-start-1 col-span-7 bg-white row-start-3"></div>
          <div className="col-start-3 col-span-4 bg-white row-start-4"></div>
        </div>
      </div>

      <div className="absolute top-[500px] left-[5%] w-20 h-10 animate-[float_12s_ease-in-out_infinite_4s]">
        <div className="grid grid-cols-8 grid-rows-4 gap-0 w-full h-full">
          <div className="col-start-2 col-span-3 bg-white row-start-1"></div>
          <div className="col-start-1 col-span-6 bg-white row-start-2"></div>
          <div className="col-start-1 col-span-7 bg-white row-start-3"></div>
          <div className="col-start-3 col-span-4 bg-white row-start-4"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
