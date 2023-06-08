import React, { useEffect } from "react";
import axios from "axios";
import { pokemon } from "../../pokemonInterface";
import "./../../assets/index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import PokemonNavbar from "../pokemonNavbar";
import Pokemonlist from "../pokemonCard";
import PokemonCard from "../pokemonCard";

function Home() {
  let pokemons: pokemon[] = [];

  const [post, setPost] = React.useState<pokemon[]>(pokemons);

  const [pages, setPages] = React.useState(1);

  const { pageable } = useParams();

  const [offset, setOffset] = React.useState(Number(pageable));

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon?offset=${offset}&pageSize=24`)
      .then((response) => {
        setPost(response.data["content"]);
        setPages(response.data["totalPages"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [offset]);

  function changePage(page: number): number {
    if (page < 1) {
      setOffset(pages);
      return pages;
    } else if (page > pages) {
      setOffset(1);
      page = 1;
      return 1;
    } else {
      setOffset(page);
      page = page;
      return page;
    }
  }

  function next(): number {
    let currentPage = changePage(offset + 1);

    navigate(`/${currentPage}`);

    return 1;
  }

  function back(): number {
    let currentPage = changePage(offset - 1);

    navigate(`/${currentPage}`);

    return 1;
  }

  return (
    <div className="body">
      <PokemonNavbar goBack={back} goForward={next} />
      <PokemonCard offset={offset} post={post} />
    </div>
  );
}

export default Home;
