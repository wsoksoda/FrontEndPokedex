import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "../../pokemonInterface";

function TypeFilter() {
  let pokemons: pokemon[] = [];

  let searchId: number;

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const { pageable } = useParams();

  const [offset, setOffset] = React.useState(Number(pageable));

  const [type, setType] = React.useState("Type");

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/pokemon/type/${type}?offset=${offset}&pageSize=24`
      )
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [offset]);
  return <p>type</p>;
}

export default TypeFilter;
