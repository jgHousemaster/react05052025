import React, { useEffect, useState } from "react";
import { sleep } from "./demo";

function Demo0528() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  function saveGame(game) {
    // Save the information when Edit
    setGames((pre) =>
      pre.map((g) => {
        if (g.id === game.id) {
          return { ...game };
        }
        return g;
      })
    );
  }

  useEffect(() => {
    // Mock the API call and fetch the data
    const data = [
      { id: 1, name: "Mario", inStock: true },
      { id: 2, name: "Crash Bandicoot", inStock: true },
      { id: 3, name: "Mega Man", inStock: false },
      { id: 4, name: "Pokemon", inStock: true },
      { id: 5, name: "Sonic", inStock: false },
      { id: 6, name: "Rayman", inStock: true },
      { id: 7, name: "Donkey Kong", inStock: true },
    ];

    const initialize = async () => {
      await sleep(1000);
      setGames(data);
      setLoading(false);
    };

    initialize();
  }, []);

  return (
    <div>
      Demo0528
      <br />
      <div className="container">
        {loading
          ? "loading..."
          : games.map((game) => (
              <Card game={game} saveGame={saveGame} key={game.id} />
            ))}
      </div>
    </div>
  );

  function Card({ game, saveGame }) {
    const [editing, setEditing] = useState(false);
    const [inputName, setInputName] = useState(game.name);
    const [inStock, setInStock] = useState(game.inStock);

    const handleSave = () => {
      setEditing(false);
      saveGame({ ...game, name: inputName, inStock: inStock });
    };

    if (editing) {
      return (
        <div className="card">
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />

          <div>
            <label>
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => {
                  setInStock((pre) => !pre);
                }}
              />
              In Stock
            </label>
          </div>

          <button onClick={handleSave}>Save</button>
        </div>
      );
    } else {
      return (
        <div className="card">
          <b>{game.name}</b> -{" "}
          {game.inStock ? (
            <div style={{ color: "green" }}>In Stock</div>
          ) : (
            <div style={{ color: "red" }}>Out of Stock</div>
          )}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button
            onClick={() => {
              saveGame({ ...game, inStock: !game.inStock });
            }}
          >
            Toggle
          </button>
        </div>
      );
    }
  }
}

export default Demo0528;
