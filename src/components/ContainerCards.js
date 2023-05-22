import React from "react";
import styled from "styled-components";

import Pages from "./Pages";

const ContainerCards = ({ children }) => {
  return (
    <Fragment>
      <ContainerCard>{children}</ContainerCard>
      <Pages />
    </Fragment>
  );
};

export default ContainerCards;

const Fragment = styled.div`
  background: #eefefe;
  background: rgb(148, 236, 235);
  background: radial-gradient(
    circle,
    rgba(148, 236, 235, 1) 0%,
    rgba(2, 40, 75, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 25px 0;
  margin-bottom: 0px;
  min-height: 100vh;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
  margin: 0 auto;
  justify-content: center;
  max-width: 1024px;
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px;
    grid-gap: 10px;
  }
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 10px;
    grid-gap: 10px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 10px;
    grid-gap: 10px;
  }
`;
