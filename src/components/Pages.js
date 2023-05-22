import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { nextPageAction, prevPageAction } from "../actions/pokemonActions";

const Pages = () => {
  const { count } = useSelector((store) => store.pokemon);
  const dispatch = useDispatch();

  return (
    <Paged>
      {count <= 1 ? null : (
        <ButtonPage onClick={() => dispatch(prevPageAction())}>
          <NavigateBeforeIcon style={{ color: "black" }} />
        </ButtonPage>
      )}
      <NumberPage>{count}</NumberPage>

      {count >= 6 ? null : (
        <ButtonPage onClick={() => dispatch(nextPageAction())}>
          <NavigateNextIcon style={{ color: "black" }} />
        </ButtonPage>
      )}
    </Paged>
  );
};

export default Pages;

const Paged = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NumberPage = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 999;
`;

const ButtonPage = styled.button`
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #4993b6,
    0 0 0.8rem #37abe1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 999;
  margin: 5px 20px 5px 20px;
  padding: 15px;
  width: 100px;
  &:hover {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #ffe600,
      0 0 0.8rem #ffe600, inset 0 0 1.3rem #ffe600;
  }
`;
