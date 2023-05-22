import React from "react";
import styled from "styled-components";

import ContainerCards from "./ContainerCards";

const LoadingSpinner = () => (
  <ContainerCards>
    <div></div>
    <Container>
      <Title>Buscando...</Title>
      <img
        className="loading-spinner"
        alt="Loading..."
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
      />
      
      <Text>Mientras buscamos: sabias que el desarrollador de esta página lleva tres años programando y buscando trabajo pacientemente?</Text>
    </Container>
    <div></div>
  </ContainerCards>
);

export default LoadingSpinner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Title = styled.h3`
  color: blue;
`;
const Text = styled.p`
  color: blue;
  text-align: center;
`;
