const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/matches", (req, res) => {
  const teams = [
    "Manchester United",
    "Chelsea",
    "Arsenal",
    "Liverpool",
    "Manchester City",
    "Tottenham",
    "Leeds United",
    "Everton",
    "Leicester City",
    "West Ham",
    "Newcastle",
    "Aston Villa",
    "Brighton",
    "Southampton",
    "Wolves",
    "Crystal Palace",
    "Brentford",
    "Nottingham Forest",
    "Fulham",
    "Bournemouth",
  ];

  const dummyMatches = Array.from({ length: 100 }, (_, index) => {
    const team1 = teams[Math.floor(Math.random() * teams.length)];
    let team2 = teams[Math.floor(Math.random() * teams.length)];

    // Ensure team1 ≠ team2
    while (team1 === team2) {
      team2 = teams[Math.floor(Math.random() * teams.length)];
    }

    // Date: today + index days
    const date = new Date();
    date.setDate(date.getDate() + index);
    const isoDate = date.toISOString();

    return {
      team1,
      team2,
      date: isoDate,
    };
  });

  res.json(dummyMatches);
});

app.listen(4000, () =>
  console.log("✅ Dummy server running at http://localhost:4000/matches")
);
