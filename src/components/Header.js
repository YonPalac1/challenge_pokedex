import React, { useState } from "react";
import styled from "styled-components";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import 'animate.css';

import Search from "./Search";
import CheckboxSelect from "./CheckboxSelect";

import img from "../utils/images/pokedex2.png"

export const Header = () => {
  const [placeholder, setPlaceholder] = useState("Buscar por nombre");
  const [name, setName] = useState(true);
  const [ability, setAbility] = useState(false);

  const checked = () => {
    setName(!name)
    setAbility(!ability)
    
    if(!name) setPlaceholder("Buscar por nombre")
    if(!ability) setPlaceholder("Buscar por habilidades (separar por espacio)")
  }

  return (
    <Contenedor>
      <HeaderImg src={img} className="animate__animated animate__backInDown" />
      <Search type={placeholder} />
      <CheckContainer className="animate__animated animate__backInDown">
        <b>nombre:</b>
        <CheckboxSelect
          icon={<TaskAltIcon />}
          iconUnchecked={<RadioButtonUncheckedIcon />}
          action={checked}
          checked={name}
        />
        <b>habilidades:</b>
        <CheckboxSelect
          icon={<TaskAltIcon />}
          iconUnchecked={<RadioButtonUncheckedIcon />}
          action={checked}
          checked={ability}
        />
      </CheckContainer>
    </Contenedor>
  );
};

const Contenedor = styled.div`
  align-items: center;
  background: rgb(14, 77, 147);
  background: radial-gradient(
    circle,
    rgba(14, 77, 147, 1) 0%,
    rgba(0, 22, 60, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;
const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  color: lightblue;
  font-size: 15px;
  padding: 8px 10px;
  text-decoration: none;
`;
const HeaderImg = styled.img`
  width: 310px;
  padding-top: 25px;
  @media (min-width: 610px) {
    width: 320px;
  }
`;
