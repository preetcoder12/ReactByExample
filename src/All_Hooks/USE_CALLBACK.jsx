import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = React.memo(({ onClick, children }) => {
  console.log("Button rendered:", children);
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      {children}
    </button>
  );
});

const USE_CALLBACK = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // Track component renders
  React.useEffect(() => {
    setRenderCount((prev) => prev + 1);
  });

  // ✅ useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };

  return (
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
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 mb-6 backdrop-blur-sm">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-shimmer">
                useCallback Hook
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
              Optimize performance by memoizing functions and preventing
              unnecessary re-renders
            </p>
          </div>

          {/* Theory Section */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fadeInUp delay-500">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-xl mr-4 flex items-center justify-center text-lg shadow-lg">
                🎯
              </span>
              What is useCallback?
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                useCallback is a React Hook that returns a memoized (cached)
                version of a function, so the function is not re-created on
                every render — unless its dependencies change.
              </p>

              <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 font-semibold">
                    useCallback Syntax
                  </span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-purple-400">
                  const memoizedFunction = useCallback
                </div>
                <span className="text-white">(</span>
                <span className="text-yellow-400">() =&gt; {`{`}</span>
                <div className="ml-4 text-slate-300 py-1">// your code</div>
                <span className="text-yellow-400">{`}`}</span>
                <span className="text-white">, [</span>
                <span className="text-orange-400">dependencies</span>
                <span className="text-white">]);</span>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold text-lg mb-3">
                  🧠 Why use useCallback?
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    •{" "}
                    <span className="text-yellow-400">
                      Functions get recreated:
                    </span>{" "}
                    Every time a component re-renders
                  </p>
                  <p>
                    • <span className="text-blue-400">Causes problems:</span>{" "}
                    When passed to child components (unnecessary re-renders)
                  </p>
                  <p>
                    • <span className="text-pink-400">Preserves identity:</span>{" "}
                    Function identity between renders
                  </p>
                  <p>
                    •{" "}
                    <span className="text-green-400">
                      Optimizes performance:
                    </span>{" "}
                    Only creates new function when dependencies change
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-2xl border border-cyan-500/20">
                It only creates a new version of the function if something in{" "}
                <code className="text-orange-400 bg-slate-800/50 px-2 py-1 rounded">
                  [dependencies]
                </code>{" "}
                changes.
              </p>
            </div>
          </div>

          {/* Interactive Example */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 animate-fadeInUp delay-700">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white mr-4 shadow-lg">
                🚀
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Example 1: Avoid Re-render
                </h3>
                <p className="text-purple-300">
                  Watch how useCallback prevents unnecessary child component
                  renders
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Controls Section */}
              <div className="space-y-6">
                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full mr-2 flex items-center justify-center text-sm">
                      ⚡
                    </span>
                    Interactive Controls
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-400/30">
                      <span className="text-white font-semibold">Count:</span>
                      <span className="text-3xl font-bold text-purple-300">
                        {count}
                      </span>
                    </div>

                    <Button onClick={increment}>Increment</Button>

                    <button
                      onClick={() => setOtherState(!otherState)}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Toggle Other State
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center text-sm">
                      📊
                    </span>
                    Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-slate-300">Component Renders:</span>
                      <span className="text-green-400 font-bold">
                        {renderCount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-slate-300">Other State:</span>
                      <span className="text-cyan-400 font-bold">
                        {otherState ? "True" : "False"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center text-sm">
                      ✓
                    </span>
                    How it Works
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-300">
                        <span className="font-semibold">
                          ✅ With useCallback:
                        </span>{" "}
                        The Button component only re-renders when absolutely
                        necessary
                      </p>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-blue-300">
                        <span className="font-semibold">
                          🎯 Memoized Function:
                        </span>{" "}
                        increment function keeps same reference across renders
                      </p>
                    </div>
                    <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <p className="text-purple-300">
                        <span className="font-semibold">
                          🚀 Performance Boost:
                        </span>{" "}
                        Child components avoid unnecessary re-renders
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="w-6 h-6 bg-yellow-500 rounded-full mr-2 flex items-center justify-center text-sm">
                      💡
                    </span>
                    Try This
                  </h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p>1. Click "Increment" - Button renders (count changed)</p>
                    <p>
                      2. Click "Toggle Other State" - Button doesn't render!
                    </p>
                    <p>3. Check console for "Button rendered:" messages</p>
                    <p>
                      4. Notice how useCallback prevents unnecessary renders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="mt-8 bg-slate-900/60 border border-slate-600/50 rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-400 font-semibold">
                  Code Implementation
                </span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-400">
                  // Memoized Button component
                </div>
                <div className="text-cyan-400">
                  const Button = React.memo(({`{`}onClick, children{`}`}) =&gt;{" "}
                  {`{`}
                </div>
                <div className="ml-4 text-slate-300">
                  console.log("Button rendered:", children);
                </div>
                <div className="ml-4 text-yellow-400">
                  return &lt;button onClick={`{`}onClick{`}`}&gt;{`{`}children
                  {`}`}&lt;/button&gt;;
                </div>
                <div className="text-cyan-400">{`}`});</div>
                <div className="mt-4 text-gray-400">
                  // useCallback to memoize function
                </div>
                <div className="text-purple-400">
                  const increment = useCallback(() =&gt; {`{`}
                </div>
                <div className="ml-4 text-slate-300">
                  setCount((prev) =&gt; prev + 1);
                </div>
                <div className="text-purple-400">{`}`}, []);</div>
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

export default USE_CALLBACK;
