import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const USE_MEMO = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const square = (num) => {
    console.log("squaring done !");
    // Simulate a more expensive calculation with visual feedback
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 200);
    return Math.pow(num, 2);
  };

  const result = useMemo(() => square(number), [number]);

  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      </div>

      <button
        className="bg-red-600 text-white m-4 px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300 relative z-20"
        onClick={handlehome}
      >
        Home
      </button>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
            <div className="inline-block p-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl border border-indigo-500/30 mb-6 backdrop-blur-sm">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4 animate-shimmer">
                useMemo Hook
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
              Optimize performance with intelligent memoization and caching
            </p>
          </div>

          {/* Theory Section */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 animate-fadeInUp delay-500">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-xl mr-4 flex items-center justify-center text-lg shadow-lg">
                🧠
              </span>
              What is useMemo?
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                useMemo is a React Hook that helps optimize performance by memoizing (remembering) 
                the result of expensive calculations. It prevents unnecessary re-computations by 
                caching results and only recalculating when dependencies change.
              </p>

              <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm hover:border-indigo-500/50 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-indigo-400 font-semibold">
                    useMemo Syntax
                  </span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-indigo-400">const memoizedValue = useMemo</div>
                <span className="text-white">(</span>
                <span className="text-yellow-400">() =&gt; {`{`}</span>
                <div className="ml-4 text-slate-300 py-1">
                  // Expensive calculation here
                </div>
                <div className="ml-4 text-cyan-400">return result;</div>
                <span className="text-yellow-400">{`}`}</span>
                <span className="text-white">, [</span>
                <span className="text-orange-400">dependencies</span>
                <span className="text-white">]);</span>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-6 rounded-2xl border border-green-500/20">
                <h3 className="text-green-400 font-semibold text-lg mb-3">🧠 Why use useMemo?</h3>
                <div className="space-y-2 text-sm">
                  <p>• <span className="text-yellow-400">Performance:</span> Prevents expensive calculations on every render</p>
                  <p>• <span className="text-blue-400">Efficiency:</span> Only recalculates when dependencies change</p>
                  <p>• <span className="text-purple-400">Optimization:</span> Reduces unnecessary work in React components</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="group bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-indigo-400 font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                    Function
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    The expensive calculation to memoize
                  </p>
                </div>
                <div className="group bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-cyan-400 font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                    Dependencies
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Values that trigger recalculation when changed
                  </p>
                </div>
                <div className="group bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-teal-400 font-semibold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    Cached Result
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    The memoized value returned by useMemo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Example */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 animate-fadeInUp delay-700">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                ⚡
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Interactive Demo: Square Calculator
                </h3>
                <p className="text-indigo-300">
                  Watch how useMemo prevents unnecessary recalculations
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 backdrop-blur-sm">
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Number to Square:
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl px-4 py-3 text-white text-xl font-mono focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 outline-none"
                      placeholder="Enter a number..."
                    />
                    {isCalculating && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 backdrop-blur-sm">
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Counter (Independent):
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setCounter(counter + 1)}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Increment Counter
                    </button>
                    <div className="text-2xl font-bold text-cyan-400">
                      {counter}
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-400/30 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                    <span className="w-6 h-6 bg-indigo-500 rounded-full mr-2 flex items-center justify-center text-sm">✓</span>
                    Memoized Result
                  </h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-300 mb-2">
                      {result || '0'}
                    </div>
                    <div className="text-indigo-400 text-sm">
                      {number}² = {result}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="w-6 h-6 bg-yellow-500 rounded-full mr-2 flex items-center justify-center text-sm">ℹ</span>
                    Performance Insight
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300">
                      <span className="text-green-400">✓ Optimized:</span> Square calculation only runs when number changes
                    </p>
                    <p className="text-slate-300">
                      <span className="text-blue-400">✓ Efficient:</span> Counter updates don't trigger recalculation
                    </p>
                    <p className="text-slate-300">
                      <span className="text-purple-400">✓ Smart:</span> Check console for "squaring done!" messages
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="mt-8 bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-400 font-semibold">
                  Code Implementation
                </span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-purple-400">const square = (num) =&gt; {`{`}</div>
                <div className="ml-4 text-slate-300">console.log("squaring done !");</div>
                <div className="ml-4 text-cyan-400">return Math.pow(num, 2);</div>
                <div className="text-purple-400">{`}`};</div>
                <div className="mt-4 text-yellow-400">const result = useMemo(() =&gt; square(number), [number]);</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default USE_MEMO;