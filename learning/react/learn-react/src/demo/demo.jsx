// import usersJSON from "./user"
import { useEffect, useState } from "react";
import usersJSON from "./users.json";

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

export default function Demo() {
  const [id, setId] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [loaded, setLoaded] = useState(false); // isLoading = true


  useEffect(() => {
    (async () => {
      try {
        setLoaded(false);
        await sleep(1000);
        const data = await fetchRecipeBtId(id);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    })();
  }, [id]);

  async function fetchRecipeBtId(id) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  }



  return (
    <div>
      <h1>Demo</h1>
      <button
        onClick={() => {
          if (id === 1) {
            return;
          } else {
            setId((id) => id - 1);
          }
        }}
      >
        Prev
      </button>
      <button onClick={() => setId((id) => id + 1)}>Next</button>
      {loaded ? (
        <div>
          <p>
            <b>Dish: </b>
            {recipe?.name}
          </p>

          <p>
            <b>Ingredients: </b>
          </p>
          <ul>
            {recipe?.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>

          <p>
            <b>Instruction: </b>
          </p>
          <ol>
            {recipe?.instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </ol>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
