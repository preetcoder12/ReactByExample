import React, { useContext, createContext, useState } from "react";

// Create contexts for the demo
const ThemeContext = createContext();
const UserContext = createContext();
const AppContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('purple');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  const changeAccent = (color) => {
    setAccentColor(color);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, accentColor, toggleTheme, changeAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

// User Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Alex Developer',
    email: 'alex@example.com',
    role: 'Frontend Engineer',
    avatar: '👨‍💻'
  });
  
  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };
  
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// App Provider Component (matching your original)
const AppProvider = ({ children }) => {
  const phone = "+91 9876543210";
  const company = "Tech Innovations Inc.";
  const location = "New Delhi, India";
  
  return (
    <AppContext.Provider value={{ phone, company, location }}>
      {children}
    </AppContext.Provider>
  );
};

// Demo Components
const ThemeCard = () => {
  const { theme, accentColor, toggleTheme, changeAccent } = useContext(ThemeContext);
  
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-purple-500/10 transition-all duration-500">
      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
        <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-xl mr-3 flex items-center justify-center text-sm">
          🎨
        </span>
        Theme Context
      </h4>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-400/30">
          <span className="text-white font-semibold">Current Theme:</span>
          <span className="text-2xl font-bold text-purple-300 capitalize">{theme}</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-400/30">
          <span className="text-white font-semibold">Accent Color:</span>
          <span className="text-2xl font-bold text-pink-300 capitalize">{accentColor}</span>
        </div>
        
        <button
          onClick={toggleTheme}
          className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Toggle Theme
        </button>
        
        <div className="flex gap-2">
          {['purple', 'blue', 'green', 'pink'].map(color => (
            <button
              key={color}
              onClick={() => changeAccent(color)}
              className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                accentColor === color 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transform scale-105' 
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const UserCard = () => {
  const { user, updateUser } = useContext(UserContext);
  
  const roles = ['Frontend Engineer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer'];
  
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-cyan-500/10 transition-all duration-500">
      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
        <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl mr-3 flex items-center justify-center text-sm">
          👤
        </span>
        User Context
      </h4>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl border border-cyan-400/30">
          <span className="text-4xl">{user.avatar}</span>
          <div>
            <h5 className="text-white font-semibold text-lg">{user.name}</h5>
            <p className="text-cyan-300">{user.email}</p>
            <p className="text-teal-300 text-sm">{user.role}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-slate-300 text-sm font-medium">Change Role:</label>
          <select
            value={user.role}
            onChange={(e) => updateUser({ role: e.target.value })}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500/50 transition-colors duration-300"
          >
            {roles.map(role => (
              <option key={role} value={role} className="bg-slate-800">
                {role}
              </option>
            ))}
          </select>
        </div>
        
        <input
          type="text"
          value={user.name}
          onChange={(e) => updateUser({ name: e.target.value })}
          className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-300"
          placeholder="Update your name"
        />
      </div>
    </div>
  );
};

const ContactCard = () => {
  const { phone, company, location } = useContext(AppContext);
  
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-green-500/10 transition-all duration-500">
      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
        <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mr-3 flex items-center justify-center text-sm">
          📱
        </span>
        Contact Context
      </h4>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30">
          <span className="text-slate-300">📞 Phone:</span>
          <span className="text-green-300 font-mono font-bold">{phone}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-400/30">
          <span className="text-slate-300">🏢 Company:</span>
          <span className="text-blue-300 font-semibold">{company}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-400/30">
          <span className="text-slate-300">📍 Location:</span>
          <span className="text-orange-300 font-semibold">{location}</span>
        </div>
      </div>
    </div>
  );
};

const USE_CONTEXT = () => {
  const [renderCount, setRenderCount] = useState(0);

  // Track component renders
  React.useEffect(() => {
    setRenderCount((prev) => prev + 1);
  });

  return (
    <ThemeProvider>
      <UserProvider>
        <AppProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Enhanced animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
              <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
            </div>
            
            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Header Section */}
            <div className="relative z-10 pt-12 pb-8">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 animate-fadeInUp">
                  <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 mb-6 backdrop-blur-sm">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-shimmer">
                      useContext Hook
                    </h1>
                  </div>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
                    Share data across components without prop drilling and manage global state efficiently
                  </p>
                </div>

                {/* Theory Section */}
                <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fadeInUp delay-500">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-xl mr-4 flex items-center justify-center text-lg shadow-lg">
                      🧠
                    </span>
                    What is useContext?
                  </h2>
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg leading-relaxed">
                      useContext is a React Hook that lets you access shared data (context) across components without passing props manually at every level. It helps avoid "prop drilling" – where you pass data through many nested components even if only the last one needs it.
                    </p>

                    <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-purple-400 font-semibold">useContext Syntax</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div><span className="text-cyan-400">const</span> <span className="text-white">MyContext</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">createContext</span><span className="text-white">();</span></div>
                        <div><span className="text-cyan-400">const</span> <span className="text-white">contextValue</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">useContext</span><span className="text-white">(</span><span className="text-orange-400">MyContext</span><span className="text-white">);</span></div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                      <h3 className="text-purple-400 font-semibold text-lg mb-3">🎯 Why use useContext?</h3>
                      <div className="space-y-2 text-sm">
                        <p>• <span className="text-yellow-400">Avoid Prop Drilling:</span> No need to pass props through multiple levels</p>
                        <p>• <span className="text-blue-400">Global State:</span> Share data like themes, user info, or settings</p>
                        <p>• <span className="text-pink-400">Cleaner Code:</span> Direct access to context values in any component</p>
                        <p>• <span className="text-green-400">Performance:</span> Only re-renders when context value changes</p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-2xl border border-cyan-500/20">
                      Components must be wrapped in a <code className="text-orange-400 bg-slate-800/50 px-2 py-1 rounded">Provider</code> to access the context value.
                    </p>
                  </div>
                </div>

                {/* Interactive Examples */}
                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 animate-fadeInUp delay-700">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                      🚀
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Interactive Context Examples</h3>
                      <p className="text-purple-300">Experience how useContext shares data across components</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <ThemeCard />
                    <UserCard />
                    <ContactCard />
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center text-sm">📊</span>
                      Context Performance
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-300">Component Renders:</span>
                        <span className="text-green-400 font-bold">{renderCount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-300">Active Contexts:</span>
                        <span className="text-blue-400 font-bold">3</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-300">Prop Drilling:</span>
                        <span className="text-red-400 font-bold">Avoided ✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="mt-12 bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm animate-fadeInUp delay-900">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 font-semibold">Code Implementation</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-400">// 1. Create Context</div>
                    <div><span className="text-cyan-400">const</span> <span className="text-white">ThemeContext</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">createContext</span><span className="text-white">();</span></div>
                    
                    <div className="mt-4 text-gray-400">// 2. Provide Context</div>
                    <div><span className="text-purple-400">&lt;ThemeContext.Provider</span> <span className="text-orange-400">value</span><span className="text-white">=</span><span className="text-green-400">{`{theme}`}</span><span className="text-purple-400">&gt;</span></div>
                    <div className="ml-4 text-slate-300">&lt;YourComponent /&gt;</div>
                    <div><span className="text-purple-400">&lt;/ThemeContext.Provider&gt;</span></div>
                    
                    <div className="mt-4 text-gray-400">// 3. Consume Context</div>
                    <div><span className="text-cyan-400">const</span> <span className="text-white">theme</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">useContext</span><span className="text-white">(</span><span className="text-orange-400">ThemeContext</span><span className="text-white">);</span></div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .delay-1000 { animation-delay: 1s; }
              .delay-2000 { animation-delay: 2s; }
              .delay-300 { animation-delay: 0.3s; }
              .delay-500 { animation-delay: 0.5s; }
              .delay-700 { animation-delay: 0.7s; }
              .delay-900 { animation-delay: 0.9s; }

              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes shimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
              }

              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
              }

              .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
              .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
              .animate-float { animation: float 4s ease-in-out infinite; }
            `}</style>
          </div>
        </AppProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default USE_CONTEXT;