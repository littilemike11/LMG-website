export default function ArcadeBG({content}){
    return(
        <>
        <div className="fixed inset-0 flex items-start justify-center overflow-hidden">
              {/* Neon Border - Fixed and Central */}
              <div className="absolute -top-3 flex items-center justify-center pointer-events-none">
                <div className="z-30 w-[97vw] h-[95vh] rounded-3xl border-8 border-pink-600 shadow-[0_0_40px_#ff00ff]"></div>
              </div>
        
              {/* Main Content with Fixed Header Inside Border */}
              <div className="relative w-[96vw] h-[95vh] rounded-3xl overflow-y-auto">
                {/* Header - Stays at the Top */}
                <header className="z-10 sticky top-0 bg-gradient-to-r from-pink-500 to-purple-700 text-center shadow-lg rounded-t-2xl">
                  <h1 className="text-white text-4xl p-2 md:text-5xl font-bold arcade-font uppercase tracking-widest neon-glow">
                    LMG Games
                  </h1>
                  <p className="text-xl mt-2 arcade-font text-gray-200">Learn · Make · Game</p>
                </header>
        
                {/* Scrollable Content */}
                {content}
        
                {/* Scanlines Overlay */}
                <div className="fixed top-28 w-[96vw] h-[80vh] inset-0 z-20 pointer-events-none scanlines"></div>
              </div>
            </div>
        </>
    )
}