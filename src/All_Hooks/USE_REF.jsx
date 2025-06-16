import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const USE_REF = () => {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const field = useRef();
  const popfield = () => {
    field.current.style.background = "green";
    field.current.style.color = "white";
    field.current.style.transition = "all 0.3s ease";
  };

  const resetField = () => {
    field.current.style.background = "";
    field.current.style.color = "";
  };
  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      </div>
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
      </div>{" "}
      <button
        className="bg-red-600 text-white  m-4 px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
        onClick={handlehome}
      >
        Home
      </button>
      ;{/* Header Section */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 mb-6 backdrop-blur-sm">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-shimmer">
                useRef Hook
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
              Master DOM references and mutable values without re-renders
            </p>
          </div>

          {/* Theory Section */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fadeInUp delay-500">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl mr-4 flex items-center justify-center text-lg shadow-lg">
                📌
              </span>
              What is useRef?
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                useRef is a React Hook that gives you a way to store a value
                that doesn't trigger a re-render when it changes. You can use
                useRef for two main purposes: accessing DOM elements directly
                and storing mutable values that persist across renders.
              </p>

              <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 font-semibold">
                    useRef Syntax
                  </span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-cyan-400">import</div>
                <span className="text-white"> {`{`} </span>
                <span className="text-purple-400">useRef</span>
                <span className="text-white"> {`}`} </span>
                <span className="text-cyan-400">from</span>
                <span className="text-green-400"> 'react'</span>
                <span className="text-white">;</span>
                <div className="mt-2">
                  <span className="text-cyan-400">const</span>
                  <span className="text-white"> myRef = </span>
                  <span className="text-purple-400">useRef</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">initialValue</span>
                  <span className="text-white">);</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="group bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-emerald-400 font-semibold text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                    🎯 DOM Access
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Direct access to DOM elements for focus, scroll, or style
                    manipulation
                  </p>
                </div>
                <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-blue-400 font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    💾 Mutable Storage
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Store values that persist across renders without causing
                    re-renders
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-500/20">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="text-yellow-400 font-semibold text-lg">
                    Key Feature
                  </span>
                </div>
                <p className="text-slate-300">
                  Returns an object like{" "}
                  <code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">{`{ current: initialValue }`}</code>{" "}
                  - changing{" "}
                  <code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">
                    current
                  </code>{" "}
                  doesn't trigger re-renders!
                </p>
              </div>
            </div>
          </div>

          {/* Examples Section */}
          <div className="space-y-8">
            {/* Example 1 - Render Counter */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 animate-fadeInUp delay-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Render Counter - Mutable Storage
                  </h3>
                  <p className="text-emerald-300">
                    Track renders without causing re-renders
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-emerald-500/20 px-6 py-3 rounded-full border border-emerald-500/40 mb-4">
                      <span className="text-3xl font-bold text-emerald-300">
                        {value}
                      </span>
                    </div>
                    <p className="text-slate-400">Current Value</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setvalue((prev) => prev + 1)}
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => setvalue((prev) => prev - 1)}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                    >
                      -1
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50">
                  <div className="text-center">
                    <div className="inline-block bg-purple-500/20 px-6 py-3 rounded-full border border-purple-500/40 mb-4">
                      <span className="text-3xl font-bold text-purple-300">
                        {count.current}
                      </span>
                    </div>
                    <p className="text-slate-400">Total Renders</p>
                    <p className="text-xs text-slate-500 mt-2">
                      Updates without causing re-renders
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
                <div className="text-cyan-400 mb-2">const</div>
                <div className="ml-4 text-white">
                  count = <span className="text-purple-400">useRef</span>(0);
                </div>
                <div className="mt-4 text-purple-400">useEffect</div>
                <span className="text-white">(() => {`{`}</span>
                <div className="ml-4 text-emerald-400 py-1">
                  count.current = count.current + 1;
                </div>
                <div className="text-white">{`}`});</div>
                <div className="mt-4 text-slate-400">
                  // count.current updates don't trigger re-renders!
                </div>
              </div>
            </div>

            {/* Example 2 - DOM Manipulation */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-fadeInUp delay-900">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    DOM Manipulation - Direct Access
                  </h3>
                  <p className="text-blue-300">
                    Access and modify DOM elements directly
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <input
                    type="text"
                    ref={field}
                    placeholder="Type something here..."
                    className="flex-1 bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={popfield}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                    >
                      Change Style
                    </button>
                    <button
                      onClick={resetField}
                      className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
                <div className="text-cyan-400 mb-2">const</div>
                <div className="ml-4 text-white">
                  field = <span className="text-purple-400">useRef</span>();
                </div>
                <div className="mt-4 text-cyan-400">const</div>
                <div className="ml-4 text-white">popfield = () => {`{`}</div>
                <div className="ml-8 text-blue-400 py-1">
                  field.current.style.background = "red";
                </div>
                <div className="ml-8 text-blue-400 py-1">
                  field.current.style.color = "white";
                </div>
                <div className="ml-4 text-white">{`}`};</div>
                <div className="mt-4 text-slate-400">
                  // Direct DOM manipulation without re-renders
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 animate-fadeInUp delay-1100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                  ✨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Key Benefits of useRef
                  </h3>
                  <p className="text-yellow-300">
                    Why useRef is essential in React
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-green-400 font-semibold text-lg mb-3 group-hover:text-green-300 flex items-center">
                    <span className="mr-2">🚀</span>
                    Performance
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">
                    No re-renders when values change, improving performance for
                    frequently updated values
                  </p>
                </div>
                <div className="group bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 font-semibold text-lg mb-3 group-hover:text-blue-300 flex items-center">
                    <span className="mr-2">🎯</span>
                    Direct Access
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">
                    Access DOM elements directly for focus, scroll,
                    measurements, and animations
                  </p>
                </div>
                <div className="group bg-slate-900/40 p-6 rounded-2xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-purple-400 font-semibold text-lg mb-3 group-hover:text-purple-300 flex items-center">
                    <span className="mr-2">💾</span>
                    Persistence
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300">
                    Values persist across renders without being reset, perfect
                    for timers and counters
                  </p>
                </div>
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
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1100 {
          animation-delay: 1.1s;
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

export default USE_REF;
