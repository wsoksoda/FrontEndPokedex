import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  let searchId: any;

  const [searchInput, setSearchInput] = React.useState(String);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon/name/${searchInput}`)
      .then((response) => {
        searchId = response.data["id"];
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput]);

  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Uh Oh">
      Looks like that pokemon doesn't exist. Make sure to capitalize the first
      initial of their name
    </Popover>
  );

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function toPokemon() {
    if (searchId != null) {
      navigate(`pokemon/${searchId}`);
    }
  }

  return (
    <Form className="d-flex" onSubmit={toPokemon}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popoverBottom}
      >
        <Button
          variant="outline-dark"
          style={{ marginRight: "2rem" }}
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Button>
      </OverlayTrigger>
    </Form>
  );
}

export default Search;
