  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";

  const USE_EFFECT = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // Example 1: No dependency - runs on every render (infinite loop)
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timer);
    });

    // Example 2: Empty dependency - runs only once on mount
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount2(count2 + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

    // Example 3: With dependency - runs when count changes
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount3(count3 + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }, [count]);

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
        <button
          className="bg-red-600 text-white  m-4 px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
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
              <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 mb-6 backdrop-blur-sm">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-shimmer">
                  useEffect Hook
                </h1>
              </div>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
                Master side effects in React with comprehensive interactive
                examples
              </p>
            </div>

            {/* Theory Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fadeInUp delay-500">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl mr-4 flex items-center justify-center text-lg shadow-lg">
                  🔄
                </span>
                What is useEffect?
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  useEffect is a React Hook that lets you perform side effects in
                  functional components. Side effects are anything outside React's
                  rendering process like API calls, subscriptions, DOM
                  manipulation, or timers.
                </p>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 font-semibold">
                      useEffect Syntax
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-purple-400">useEffect</div>
                  <span className="text-white">(</span>
                  <span className="text-yellow-400">() =&gt; {`{`}</span>
                  <div className="ml-4 text-slate-300 py-1">
                    // Side effect code here
                  </div>
                  <div className="ml-4 text-cyan-400">return () =&gt; {`{`}</div>
                  <div className="ml-8 text-slate-300 py-1">
                    // Cleanup code (optional)
                  </div>
                  <div className="ml-4 text-cyan-400">{`}`};</div>
                  <span className="text-yellow-400">{`}`}</span>
                  <span className="text-white">, [</span>
                  <span className="text-orange-400">dependencies</span>
                  <span className="text-white">]);</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="group bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-emerald-400 font-semibold text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                      Effect Function
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      Runs after render and contains your side effect logic
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-blue-400 font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                      Cleanup Function
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      Optional return function for cleaning up subscriptions
                    </p>
                  </div>
                  <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-orange-400 font-semibold text-lg mb-2 group-hover:text-orange-300 transition-colors">
                      Dependencies
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      Array that controls when the effect runs
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 group">
                    <div className="text-green-400 font-semibold mb-2 group-hover:text-green-300">
                      [] (Empty)
                    </div>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300">
                      Runs once on mount
                    </p>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-600/50 hover:border-yellow-500/50 transition-all duration-300 group">
                    <div className="text-yellow-400 font-semibold mb-2 group-hover:text-yellow-300">
                      [value]
                    </div>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300">
                      Runs when value changes
                    </p>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-all duration-300 group">
                    <div className="text-red-400 font-semibold mb-2 group-hover:text-red-300">
                      No Array
                    </div>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300">
                      Runs on every render
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="space-y-8">
              {/* Example 1 */}
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 animate-fadeInUp delay-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      No Dependencies - Infinite Loop
                    </h3>
                    <p className="text-red-300">
                      Runs on every render (not recommended)
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-red-500/20 px-6 py-3 rounded-full border border-red-500/40">
                    <span className="text-2xl font-bold text-red-300">
                      Count: {count}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">
                    useEffect(() =&gt; {`{`}
                  </div>
                  <div className="ml-4 text-slate-300">
                    const timer = setTimeout(() =&gt; {`{`}
                  </div>
                  <div className="ml-8 text-yellow-400">setCount(count + 1);</div>
                  <div className="ml-4 text-slate-300">{`}`}, 1000);</div>
                  <div className="ml-4 text-cyan-400">
                    return () =&gt; clearTimeout(timer);
                  </div>
                  <div className="text-purple-400">
                    {`}`});{" "}
                    <span className="text-red-400">// No dependency array!</span>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 animate-fadeInUp delay-900">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Empty Dependencies - Run Once
                    </h3>
                    <p className="text-green-300">Runs only on component mount</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-green-500/20 px-6 py-3 rounded-full border border-green-500/40">
                    <span className="text-2xl font-bold text-green-300">
                      Count: {count2}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">
                    useEffect(() =&gt; {`{`}
                  </div>
                  <div className="ml-4 text-slate-300">
                    const timer = setTimeout(() =&gt; {`{`}
                  </div>
                  <div className="ml-8 text-yellow-400">
                    setCount2(count2 + 1);
                  </div>
                  <div className="ml-4 text-slate-300">{`}`}, 1000);</div>
                  <div className="ml-4 text-cyan-400">
                    return () =&gt; clearTimeout(timer);
                  </div>
                  <div className="text-purple-400">
                    {`}`}, <span className="text-green-400">[]</span>);{" "}
                    <span className="text-green-400">
                      // Empty dependency array
                    </span>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-fadeInUp delay-1100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      With Dependencies - Conditional
                    </h3>
                    <p className="text-blue-300">Runs when dependency changes</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/40">
                    <span className="text-2xl font-bold text-blue-300">
                      Count: {count3}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">
                    useEffect(() =&gt; {`{`}
                  </div>
                  <div className="ml-4 text-slate-300">
                    const timer = setTimeout(() =&gt; {`{`}
                  </div>
                  <div className="ml-8 text-yellow-400">
                    setCount3(count3 + 1);
                  </div>
                  <div className="ml-4 text-slate-300">{`}`}, 1000);</div>
                  <div className="ml-4 text-cyan-400">
                    return () =&gt; clearTimeout(timer);
                  </div>
                  <div className="text-purple-400">
                    {`}`}, <span className="text-blue-400">[count]</span>);{" "}
                    <span className="text-blue-400">// Depends on count</span>
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

          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(51, 65, 85, 0.3);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(
              45deg,
              rgba(139, 92, 246, 0.6),
              rgba(59, 130, 246, 0.6)
            );
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              45deg,
              rgba(139, 92, 246, 0.8),
              rgba(59, 130, 246, 0.8)
            );
          }
        `}</style>
      </div>
    );
  };

  export default USE_EFFECT;
