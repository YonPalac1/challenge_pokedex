import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'animate.css';

const Navegation = () => {
  return (
    <Container>
      <Enlace to="/" className="animate__animated animate__bounceInLeft">Home </Enlace>
      <Enlace to="/favorite" className="animate__animated animate__bounceInRight">Favorites</Enlace>
    </Container>
  );
};

export default Navegation;

const Container = styled.div`
  background: rgb(14, 77, 147);
  background: radial-gradient(
    circle,
    rgba(14, 77, 147, 1) 0%,
    rgba(0, 22, 60, 1) 100%
  );
  border-bottom: 1px solid rgba(14, 77, 147, 1);
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  z-index: 5;
`;
const Enlace = styled(Link)`
  color: lightblue;
  font-size: 15px;
  padding: 8px 10px;
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #ffe600,
      0 0 0.8rem #ffe600, inset 0 0 1.3rem #ffe600;
  }
`;
