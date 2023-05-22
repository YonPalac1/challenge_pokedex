import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { deletePokemonToFavorite } from "../actions/pokemonActions";
import { ConfirmAlert } from "../services/alertsService";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";
import LoadingSpinner from "./LoadingSpinner";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorite, isLoading } = useSelector((store) => store.pokemon);
  const [checked, setChecked] = useState(false);

  const deleteToFavorites = (item) => {
    ConfirmAlert("Quiere poke-eliminar esta carta de favoritos?").then(
      (result) => {
        setChecked(false)
        if (result.isConfirmed) dispatch(deletePokemonToFavorite(item));
      }
    );
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ContainerCards>
      {favorite.length !== 0 ? (
        favorite.map((item, i) => (
          <Cards
            item={item}
            func={() => deleteToFavorites(item)}
            btndelete={true}
            key={i}
            checked={checked}
          />
        ))
      ) : (
        <MessageNoFavorites>No hay Pokefavoritos</MessageNoFavorites>
      )}
    </ContainerCards>
  );
};

export default Favorite;

const MessageNoFavorites = styled.p`
  color: white;
  font-size: 32px;
  height: 100vh;
  text-align: center;
  width: 310px;
  text-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #ffe600,
    0 0 0.8rem #ffe600, inset 0 0 1.3rem #ffe600;
  @media (min-width: 500px) {
    width: 500px;
  }
  @media (min-width: 720px) {
    width: 710px;
  }
  @media (min-width: 1024px) {
    width: 1000px;
  }
`;
