import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Foot>
      <a className="text-center" href="" target="_blank">
        Challenge 2023 | by Jonatan Palacios
      </a>
    </Foot>
  );
};

const Foot = styled.footer`
  text-align: center;
  background: radial-gradient(
    circle,
    rgba(14, 77, 147, 1) 0%,
    rgba(0, 22, 60, 1) 100%
  );
  border-top: 1px solid rgba(14, 77, 147, 1);
  padding: 20px;
  a {
    color: yellow;
  }
`;
