import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Cards from "./Cards";
import ContainerCards from "./ContainerCards";
import LoadingSpinner from "./LoadingSpinner";

const SearchResult = () => {
  const { searchResult, isLoading } = useSelector((store) => store.pokemon);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ContainerCards>
      {searchResult.length === 0 ? (
        <MessageNoPlanet>No hay pokeresultados</MessageNoPlanet>
      ) : (
        searchResult.map((item, i) => <Cards item={item} key={i} />)
      )}
    </ContainerCards>
  );
};

export default SearchResult;

const MessageNoPlanet = styled.p`
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
