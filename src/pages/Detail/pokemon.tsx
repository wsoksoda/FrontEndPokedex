import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/detail.css";
import { pokemon, statColor, stat, type } from "../../pokemonInterface";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import BackButton from "../backButton";
import PokemonNavbar from "../pokemonNavbar";
import { PokemonChart } from "./pokemonChart";

function Pokemon() {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;
  let thisAbility = {} as pokemon["ability"];
  let thisEggGroup = {} as pokemon["eggGroup"];

  const [post, setPost] = React.useState(thisPokemon);
  const [stats, setStats] = React.useState(thisStat);
  const [ability, setAbility] = React.useState(thisAbility);
  const [eggGroup, setEggGroup] = React.useState(thisEggGroup);

  const { pageable } = useParams();

  const { id } = useParams();

  let navigate = useNavigate();

  const pokemonSize = 553;

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon/${id}`)
      .then((response) => {
        setPost(response.data);
        setStats(response.data["stats"]);
        setAbility(response.data["abilty"]);
        setEggGroup(response.data["eggGroup"]);

        console.log(post);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  function changePage(id: number): number {
    if (id > pokemonSize) {
      id = pokemonSize;
    } else if (id < 1) {
      id = 1;
    }
    return id;
  }

  function next(): number {
    let currentPage = changePage(Number(id) + 1);

    navigate(`/${pageable}/pokemon/${currentPage}`);

    return 1;
  }

  function back(): number {
    let currentPage = changePage(Number(id) - 1);

    navigate(`/${pageable}/pokemon/${currentPage}`);

    return 1;
  }

  return (
    <div className="body">
      <PokemonNavbar goBack={back} goForward={next} />
      <Card
        style={{
          width: "50rem",
          display: "block",
          margin: "auto",
          marginTop: "2rem",
          marginBottom: "10rem",
        }}
      >
        <Card.Body>
          <Card.Title>
            <Link to={`/${pageable}`}>
              <BackButton />
            </Link>
            <div className="display">
              <h1>{post.name} &nbsp;</h1>
              <h1 style={{ color: "gray" }}> #{post.id}</h1>
              {post.type?.map((type: type, typeIndex) => (
                <h1
                  style={{
                    width: "10rem",
                    backgroundColor: statColor[type.type],
                    display: "block",
                    float: "right",
                    marginLeft: "3rem",
                    textAlign: "center",
                    height: "3.5rem",
                    borderRadius: "5rem",
                  }}
                  key={typeIndex}
                >
                  {type.type}
                </h1>
              ))}
            </div>
          </Card.Title>
          <div className="display">
            <Card.Img
              style={{ maxWidth: "20rem" }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
            ></Card.Img>
            <div className="centerText">
              <div className="display">
                <h3>Height: {post.height} </h3>
                <p> &nbsp; M</p>
              </div>
              <div className="display">
                <h3>Weight: {post.weight} </h3>

                <p> &nbsp; Kg</p>
              </div>
              {/* {ability.map((ability: String, index) => (
                <h3 key={index}>{ability}</h3>
              ))}
              {eggGroup.map((eggGroup: String, index) => (
                <h3 key={index}>{eggGroup}</h3>
              ))} */}
            </div>
          </div>
          <PokemonChart
            id={stats.id}
            hp={stats.hp}
            attack={stats.attack}
            defense={stats.defense}
            speed={stats.speed}
            specialAttack={stats.specialAttack}
            specialDefense={stats.specialDefense}
          ></PokemonChart>
          <Card.Text>
            <h3>{post.genus}</h3>
            <p>{post.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pokemon;
