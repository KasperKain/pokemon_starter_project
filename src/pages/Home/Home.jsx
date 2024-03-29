import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

export default () => {
  const [pokemon, setPokemon] = useState();
  const [types, setTypes] = useState(["fire", "water", "rock"]);

  //#region DATA FETCHING ---------------------
  // Setup the buttons for fetching data
  useEffect(() => {
    async function fetchData() {
      axios.get("https://pokeapi.co/api/v2/type/").then((res) => {
        console.log(res.data.results);
        setTypes(res.data.results);
      });
    }

    fetchData();
  }, []);

  // Click handler function for fetching data
  const handleClick = async (typeTitle) => {
    axios.get(`https://pokeapi.co/api/v2/type/${typeTitle}`).then((res) => {
      console.log(res.data.pokemon);
      setPokemon(res.data.pokemon);
    });
  };

  //#endregion

  //#region JSX RETURN ---------------------
  return (
    <div className="Home page">
      {types.map((item) => {
        return (
          <button
            onClick={() => {
              handleClick(item.name);
            }}
          >
            {item.name}
          </button>
        );
      })}

      {pokemon ? (
        pokemon.map((item) => {
          return <h1>{item.pokemon.name}</h1>;
        })
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );

  //#endregion
};
