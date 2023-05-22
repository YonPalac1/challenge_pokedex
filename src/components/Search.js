import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import 'animate.css';

import {
  searchResultsByName,
  searchResultsByAbilities,
} from "../actions/pokemonActions";
import useForm from "../hooks/useForm";

const Search = ({ type }) => {
  const [{ keywords }, handleInputChange, reset] = useForm({
    keywords: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    if (keywords !== "") {
      if (type === "Buscar por nombre") {
        dispatch(searchResultsByName(keywords));
      } else if (type === "Buscar por habilidades (separar por espacio)") {
        dispatch(searchResultsByAbilities(keywords));
      }
      reset();
    }
    navigate("/resultados");
  };

  return (
    <SearchBar className="animate__animated animate__backInDown">
      <form onSubmit={handleSearch}>
        <Input
          type="search"
          name="keywords"
          onChange={handleInputChange}
          placeholder={type}
          value={keywords}
        />

        <Button type="submit">
          <SearchIcon style={{ fontSize: "15px" }} />
        </Button>
      </form>
    </SearchBar>
  );
};

export default Search;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 550px;
  margin: 30px auto 0;
`;
const Input = styled.input`
  padding: 8px 12px;
  border-radius: 25px 0 0 25px;
  background: none;
  border: none;
  color: #fff;
  font-size: 15px;
  border-right-style: none;
  width: 350px;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #4993b6,
    0 0 0.8rem #37abe1;
`;
const Button = styled.button`
  border-radius: 0 25px 25px 0;
  background: none;
  color: #fff;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 10px;
  border-left-style: none;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #4993b6,
    0 0 0.8rem #37abe1;
`;
