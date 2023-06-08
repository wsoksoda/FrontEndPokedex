import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pokemon, statColor, type } from "../pokemonInterface";

interface Props {
  offset: number;
  post: pokemon[];
}

function PokemonCard(props: Props) {
  const {} = props;

  return (
    <div className="display">
      {props.post.map((post, index) => (
        <Card className="m-2 " style={{ width: "17rem" }} key={index}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`pokemon/${post.id}`}
            state={{ from: "offset" }}
          >
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
              <Card.Img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
              ></Card.Img>
              <div className="display">
                {post.type.map((type: type, typeIndex) => (
                  <Card.Text
                    style={{
                      width: "5rem",
                      backgroundColor: statColor[type.type],
                      display: "block",
                      float: "left",
                      marginLeft: "1rem",
                      paddingTop: ".25rem",
                      textAlign: "center",
                      height: "2rem",
                      borderRadius: "1rem",
                    }}
                    key={typeIndex}
                  >
                    {type.type}
                  </Card.Text>
                ))}
              </div>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default PokemonCard;
