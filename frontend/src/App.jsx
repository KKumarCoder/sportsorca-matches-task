// src/App.jsx
import { useEffect, useState } from "react";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/matches")
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] to-[#928dab] p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-xl">
        ⚽ Upcoming Soccer Matches
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {matches.map((match, idx) => (
          <div
            key={idx}
            className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-6 shadow-lg transition transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="text-xl font-semibold text-white mb-2 tracking-wide">
              {match.team1} <span className="text-yellow-300">vs</span>{" "}
              {match.team2}
            </div>
            <div className="text-sm text-gray-200">
              {new Date(match.date).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
