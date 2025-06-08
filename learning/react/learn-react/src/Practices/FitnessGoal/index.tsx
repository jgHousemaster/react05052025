import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { GoalsContext } from "./GoalsContext";
import { ThemeContext } from "./ThemeContext";

function Fitness() {
  // Data of goals list
  const [goals, setGoals] = useState([]);
  // The form
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("Strength Training");
  const [repetition, setRepetition] = useState("");
  // ID Tool (Should use uuid or timestamp)
  const [id, setId] = useState(0);
  // Theme
  const [theme, setTheme] = useState("light");

  // Available Categories
  const categories = ["Strength Training", "Cardio", "Diet"];

  // Update the unit in the form UI
  let unit = "";
  if (category === "Strength Training") {
    // Strength
    unit = "Repetitions";
  } else if (category === "Cardio") {
    // Cardio
    unit = "Minutes";
  } else {
    // Diet
    unit = "Calories";
  }

  // Set a goal achieved or unachieved
  const handleAchieve = (id, achieved) => {
    setGoals((pre) => {
      return pre.map((goal) => {
        if (goal.id === id) {
          return { ...goal, achieved: achieved };
        } else {
          return goal;
        }
      });
    });
  };

  // Submit the form and add a new goal
  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id,
      goal,
      category,
      repetition,
      achieved: false,
    };
    if (goal === "") {
      newGoal.goal = "Unknown Goal";
    }
    if (repetition === "") {
      newGoal.repetition = "";
    }
    setGoals((pre) => [...pre, newGoal]);
    setId((pre) => pre + 1);
    setGoal("");
    setRepetition("");
    setCategory("Strength Training");
  };

  // Main Layout
  return (
    <ThemeContext value={theme}>
      <div className="App">
        <h1>Fitness Goal Tracker</h1>
        {/* The form */}
        <form onSubmit={handleAddGoal}>
          <label>
            Fitness Goal
            <input
              placeholder="Enter fitness goal"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
              }}
            />
          </label>
          <label>
            Category
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            {unit}
            <input
              placeholder={`Enter ${unit}`}
              value={repetition}
              onChange={(e) => {
                setRepetition(e.target.value);
              }}
            />
          </label>
          <button>Add Goal</button>
        </form>

        <GoalsContext value={handleAchieve}>
          <GoalList goals={goals} />
        </GoalsContext>

        <button
          className="themeButton"
          onClick={() => {
            setTheme((pre) => (pre === "light" ? "dark" : "light"));
          }}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>

        <Theme />
      </div>
    </ThemeContext>
  );
}

// Goal card item Component
function Goal({ goal }) {
  const handleAchieve = useContext(GoalsContext);
  let unit = "";
  if (goal.category === "Strength Training") {
    // Strength
    unit = "repetitions";
  } else if (goal.category === "Cardio") {
    // Cardio
    unit = "minutes";
  } else {
    // Diet
    unit = "calories";
  }

  return (
    <div
      key={goal.id}
      className="goal"
      style={{ textDecorationLine: goal.achieved ? "line-through" : "none" }}
    >
      {goal.goal} - <b>{goal.category}</b>{" "}
      {"(" + goal.repetition + " " + unit + ")"}
      {goal.achieved ? (
        <button
          className="addBack"
          onClick={() => {
            handleAchieve(goal.id, false);
          }}
        >
          Add Back
        </button>
      ) : (
        <button
          className="achieve"
          onClick={() => {
            handleAchieve(goal.id, true);
          }}
        >
          Mark as Achieved
        </button>
      )}
    </div>
  );
}

function GoalList({ goals }) {
  return (
    <div>
      {/* Make unachieved goals go top */}
      {goals.map((goal) => {
        if (!goal.achieved) return <Goal key={goal.id} goal={goal} />;
      })}
      {goals.map((goal) => {
        if (goal.achieved) return <Goal key={goal.id} goal={goal} />;
      })}
    </div>
  );
}

// A component showing the theme context is working
function Theme() {
  const theme = useContext(ThemeContext);
  const classname = theme;
  return (
    <div className={classname}>
      I'm a Child Component, and I know the theme is now <b>{theme}</b>!
    </div>
  );
}

export default Fitness;
