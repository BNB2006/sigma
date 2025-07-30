import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-6 bg-primary-background'>

    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-primary-accentHover rounded-xl flex items-center justify-center animate-pulse-glow">
        <span className="text-white font-bold text-xl">🛠️</span>
      </div>
      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary-accent to-primary-accentHover rounded-xl opacity-20 animate-ping"></div>
    </div>
    
    <div className="text-center">
      <h2 className="text-xl font-semibold text-primary-text mb-2">Sigma</h2>
      <p className="text-sm text-primary-textSecondary">Loading your workspace...</p>
    </div>
    
    <div className="flex gap-2">
      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  </div>
);

export default Loader;
