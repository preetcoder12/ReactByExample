import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ALL_HOOKS = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // For demo purposes, using state instead of navigate
  const navigate = useNavigate();
  const handleUseState = () => {
    navigate("/usestate");
  };

  const handleUseRef = () => {
    navigate("/useref");
  };

  const handleUseEffect = () => {
    navigate("/useEffect");
  };

  const handleUseContext = () => {
    navigate("/usecontext");
  };
  const handleUsememo = () => {
    navigate("/usememo");
  };
  const handleCallBack = () => {
    navigate("/usecallback");
  };

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const hooks = [
    {
      name: "useState Hook",
      icon: "📊",
      description: "Manage component state",
      gradient: "from-pink-500 via-rose-500 to-violet-600",
      hoverGradient: "from-pink-600 via-rose-600 to-violet-700",
      onClick: handleUseState,
      enabled: true,
      glowColor: "shadow-pink-500/50",
    },
    {
      name: "useRef Hook",
      icon: "🎯",
      description: "Reference DOM elements",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      hoverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
      onClick: handleUseRef,
      enabled: true,
      glowColor: "shadow-emerald-500/50",
    },
    {
      name: "useEffect Hook",
      icon: "⚡",
      description: "Handle side effects",
      gradient: "from-orange-500 via-amber-500 to-red-600",
      hoverGradient: "from-orange-600 via-amber-600 to-red-700",
      onClick: handleUseEffect,
      enabled: true,
      glowColor: "shadow-orange-500/50",
    },
    {
      name: "useContext Hook",
      icon: "🔄",
      description: "Share data globally",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      hoverGradient: "from-cyan-600 via-blue-600 to-indigo-700",
      onClick: handleUseContext,
      enabled: true,
      glowColor: "shadow-cyan-500/30",
    },
    {
      name: "useMemo Hook",
      icon: "🔄",
      description: "Share data globally",
      gradient: "from-pink-500 via-rose-500 to-violet-600",
      hoverGradient: "from-pink-600 via-rose-600 to-violet-700",
      onClick: handleUsememo,
      enabled: true,
      glowColor: "shadow-pink-500/50",
    },
    {
      name: "useCallback Hook",
      icon: "🔄",
      description: "Share data globally",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      hoverGradient: "from-emerald-600 via-teal-600 to-cyan-700",
      onClick: handleCallBack,
      enabled: true,
      glowColor: "shadow-pink-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic background based on mouse position */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-2000"></div>

        {/* Floating orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-8 relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10 max-w-lg w-full hover:bg-white/10 transition-all duration-500 group">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 mb-6 backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-500">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2 animate-shimmer">
                  React Hooks
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
              </div>
              <p className="text-slate-300 text-lg font-medium">
                Master the power of React Hooks
              </p>
              <p className="text-slate-400 text-sm">
                Interactive learning made simple
              </p>
            </div>

            {/* Hook buttons */}
            <div className="space-y-4">
              {hooks.map((hook, index) => (
                <button
                  key={hook.name}
                  onClick={hook.enabled ? hook.onClick : undefined}
                  disabled={!hook.enabled}
                  className={`
                    w-full group/button relative overflow-hidden 
                    bg-gradient-to-r ${hook.gradient} 
                    hover:${hook.hoverGradient}
                    text-white font-semibold py-5 px-8 rounded-2xl 
                    transition-all duration-500 transform 
                    ${
                      hook.enabled
                        ? `hover:scale-105 hover:${hook.glowColor} hover:shadow-2xl active:scale-95 cursor-pointer`
                        : "opacity-50 cursor-not-allowed scale-95"
                    }
                    border border-white/20 hover:border-white/40
                    animate-fadeInUp
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl transform group-hover/button:scale-110 transition-transform duration-300">
                        {hook.icon}
                      </span>
                      <div className="text-left">
                        <div className="text-lg font-bold">{hook.name}</div>
                        <div className="text-sm opacity-90 font-normal">
                          {hook.description}
                        </div>
                      </div>
                    </div>

                    {hook.enabled ? (
                      <div className="text-xl transform group-hover/button:translate-x-1 transition-transform duration-300">
                        →
                      </div>
                    ) : (
                      <div className="text-sm bg-black/20 px-2 py-1 rounded-full">
                        Soon
                      </div>
                    )}
                  </div>

                  {/* Progress bar for enabled hooks */}
                  {hook.enabled && (
                    <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
                      <div className="h-full bg-white/60 w-0 group-hover/button:w-full transition-all duration-500"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-slate-300 text-sm font-medium">
                  Interactive Learning Experience
                </p>
              </div>
              <p className="text-slate-400 text-xs">
                Click on any available hook to start learning
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes float-random {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.5;
          }
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

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            45deg,
            rgba(139, 92, 246, 0.6),
            rgba(59, 130, 246, 0.6)
          );
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
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

export default ALL_HOOKS;
