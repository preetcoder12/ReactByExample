import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const USE_STATE = () => {
  // Counter state
  let [counter, setcounter] = useState(0);
  const inc_count = () => {
    setcounter(counter + 1);
  };
  const dec_count = () => {
    setcounter(counter - 1);
  };
  const reset = () => {
    setcounter(0);
  };

  // Todo list state
  const [value, setvalue] = useState("");
  const [task, settask] = useState([]);

  const addtask = () => {
    if (value.trim() !== "") {
      settask([...task, { id: Date.now(), text: value, completed: false }]);
      setvalue("");
    }
  };

  const removetask = (idToRemove) => {
    settask(task.filter((t) => t.id !== idToRemove));
  };

  const toggleTask = (idToToggle) => {
    settask(
      task.map((t) =>
        t.id === idToToggle ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const inputfield = (e) => {
    setvalue(e.target.value);
  };
  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      <button
        className="bg-red-600 text-white  m-4 px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
        onClick={handlehome}
      >
        Home
      </button>

      {/* Header Section */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
              useState Hook
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Master React's most fundamental hook with interactive examples
            </p>
          </div>

          {/* Theory Section */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 mb-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mr-3 flex items-center justify-center text-sm">
                📖
              </span>
              What is useState?
            </h2>
            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                useState is a React Hook that allows you to add state (data that
                changes) to functional components. Before hooks, only class
                components could manage state. Now any component can have
                reactive data.
              </p>
              <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-6 font-mono">
                <div className="text-cyan-400">const</div>
                <span className="text-white"> [</span>
                <span className="text-yellow-400">value</span>
                <span className="text-white">, </span>
                <span className="text-green-400">setValue</span>
                <span className="text-white">] = </span>
                <span className="text-purple-400">useState</span>
                <span className="text-white">(</span>
                <span className="text-orange-400">initialValue</span>
                <span className="text-white">);</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-600">
                  <span className="text-yellow-400 font-semibold">value:</span>
                  <p className="text-sm text-slate-400 mt-1">
                    Current state value
                  </p>
                </div>
                <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-600">
                  <span className="text-green-400 font-semibold">
                    setValue:
                  </span>
                  <p className="text-sm text-slate-400 mt-1">
                    Function to update state
                  </p>
                </div>
                <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-600">
                  <span className="text-orange-400 font-semibold">
                    initialValue:
                  </span>
                  <p className="text-sm text-slate-400 mt-1">
                    Default state value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Example */}
      <div className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mr-3 flex items-center justify-center text-sm">
                🔢
              </span>
              Example 1: Counter
            </h2>

            <div className="text-center">
              <div className="mb-8">
                <div className="text-7xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text animate-pulse">
                  {counter}
                </div>
                <p className="text-slate-400 text-lg">Current Count</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={inc_count}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-2xl mr-2">+</span>
                    Increase
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={dec_count}
                  className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-2xl mr-2">−</span>
                    Decrease
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={reset}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="text-xl mr-2">↻</span>
                    Reset
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Todo List Example */}
      <div className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mr-3 flex items-center justify-center text-sm">
                ✅
              </span>
              Example 2: Todo List
            </h2>

            <div className="max-w-2xl mx-auto">
              {/* Input Section */}
              <div className="flex gap-3 mb-8">
                <input
                  onChange={inputfield}
                  value={value}
                  type="text"
                  placeholder="Add a new task..."
                  className="flex-1 p-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => e.key === "Enter" && addtask()}
                />
                <button
                  onClick={addtask}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Add
                </button>
              </div>

              {/* Task List */}
              <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                {task.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-lg">No tasks yet. Add one above!</p>
                  </div>
                ) : (
                  task.map((t) => (
                    <div
                      key={t.id}
                      className={`group bg-slate-900/30 border border-slate-600 rounded-xl p-4 flex items-center justify-between hover:border-slate-500 transition-all duration-300 ${
                        t.completed ? "opacity-75" : ""
                      }`}
                    >
                      <div className="flex items-center flex-1">
                        <button
                          onClick={() => toggleTask(t.id)}
                          className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                            t.completed
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-slate-400 hover:border-green-400"
                          }`}
                        >
                          {t.completed && <span className="text-sm">✓</span>}
                        </button>
                        <span
                          className={`text-white transition-all duration-300 ${
                            t.completed ? "line-through text-slate-400" : ""
                          }`}
                        >
                          {t.text}
                        </span>
                      </div>
                      <button
                        onClick={() => removetask(t.id)}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Stats */}
              {task.length > 0 && (
                <div className="mt-6 flex justify-center space-x-8 text-sm text-slate-400">
                  <span>Total: {task.length}</span>
                  <span>
                    Completed: {task.filter((t) => t.completed).length}
                  </span>
                  <span>
                    Remaining: {task.filter((t) => !t.completed).length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Want to explore more React concepts?
            </p>
            <a
              href="https://react-playbox.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🚀</span>
              Visit React Playbox
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default USE_STATE;
