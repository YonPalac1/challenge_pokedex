import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import { deleteAllPokemonSelected , getAllPokemonAction } from "../actions/pokemonActions";
import { ConfirmAlert } from "../services/alertsService";

import Favorite from "../components/Favorite";
import Navbar from "../components/Navbar";
import { Header } from "../components/Header";
import SearchResult from "../components/SearchResult";
import Home from "../components/Home";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((store) => store.pokemon);

  useEffect(() => {
    dispatch(getAllPokemonAction());
  }, [dispatch]);

  const deleteToSelected = (selected) => {
    ConfirmAlert("Quiere poke-eliminar los seleccionados?").then(result => {
      if(result.isConfirmed) dispatch(deleteAllPokemonSelected(selected))
    })
  }

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/resultados" element={<SearchResult />} />
      </Routes>
      {selected.length > 0 ? (
        <TrashIcon>
          <DeleteIcon
            style={{ color: "red", fontSize: "30px" }}
            onClick={() => deleteToSelected(selected)}
          />
        </TrashIcon>
      ) : (
        ""
      )}
    </Router>
  );
};

export default AppRouter;

const TrashIcon = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px; 
  z-index: 5;
`;
