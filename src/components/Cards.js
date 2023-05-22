import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import 'animate.css';

import CheckboxSelect from "./CheckboxSelect";
import {
  selectPokemon,
  addToFavorite,
  unselectPokemon,
  escapeToFavorite,
} from "../actions/pokemonActions";
import { InfoAlert } from "../services/alertsService";

const Cards = ({ item, func, btndelete, key }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  const [fav, setFav] = useState(false);

  const addPokemonToFavorites = (item) => {
    setFav(!fav);

    if (!fav) {
      InfoAlert("Agregado a favoritos");
      dispatch(addToFavorite(item));
    } else {
      dispatch(escapeToFavorite(item));
    }
  };

  const checkSelect = (item) => {
    setSelect(!select);

    if (!select) {
      dispatch(selectPokemon(item));
    } else {
      dispatch(unselectPokemon(item));
    }
  };

  return (
    <Container className="animate__animated animate__fadeInUp">
      <Image>
        <img src={item.sprites.front_default} alt={item.name}></img>
        <Spam>{item.order}</Spam>
      </Image>
      <div>
        <PName>{item.name}</PName>
      </div>
      <hr></hr>
      <div>
        <PValues>
          <b>Weight: </b> {item.weight}
        </PValues>
      </div>
      <div>
        <PValues>
          <b>Abilities: </b>{" "}
          {item.abilities.map((abilities, i) => {
            return <div key={i}>{abilities.ability.name}</div>;
          })}
        </PValues>
      </div>
      <hr></hr>
      <div>
        <Footer>
          {!btndelete ? (
            <>
              <CheckboxSelect
                icon={<TaskAltIcon />}
                iconUnchecked={<RadioButtonUncheckedIcon />}
                action={() => checkSelect(item)}
              />
              <CheckboxSelect
                icon={<Favorite />}
                iconUnchecked={<FavoriteBorder />}
                action={() => addPokemonToFavorites(item)}
              />
            </>
          ) : (
            <DeleteIcon style={{ color: "red" }} onClick={func} />
          )}
        </Footer>
      </div>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  background-color: #e6feff;
  border: 0.2rem solid #fff;
  border-radius: 1rem;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #4993b6,
    0 0 0.8rem #37abe1;
  color: #171717;
  padding: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #ffe600,
      0 0 0.8rem #ff4040, 0 0 2rem #e20909, inset 0 0 1.3rem #ff9327;
  }
`;
const PName = styled.h3`
  color: #6c0b0b;
  text-transform: uppercase;
`;
const PValues = styled.p`
  font-size: 12px;
  margin: 3px 0 5px 0;
  text-transform: uppercase;
`;
const Image = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 5%;
  border: 2px solid #ccc;
  z-index: 1;
`;
const Spam = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
