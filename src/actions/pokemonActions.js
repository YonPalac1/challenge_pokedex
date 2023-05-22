import {
  GET_ALL_POKEMON,
  NEXT_PAGE,
  PREV_PAGE,
  ADD_TO_FAVORITE,
  REMOVE_TO_FAVORITE,
  SEARCH_RESULT,
  LOADING,
  SELECT_POKEMON,
  REMOVE_POKEMON_SELECTED,
  ESCAPE_SELECTED,
  ESCAPE_TO_FAVORITE,
  API_URl,
} from "../constants";
import { get, getDetails } from "../services/apiService";

export const getAllPokemonAction = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const arrayData = [];

  try {
    const { data } = await get(API_URl);

    if (data) {
      for (let pokeData of data.results) {
        const { data } = await getDetails(pokeData.url);
        arrayData.push(data);
      }
    }
    dispatch({ type: GET_ALL_POKEMON, payload: arrayData });
    dispatch({ type: LOADING, payload: false });
  } catch (e) {
    console.log(e);
  }
};

export const nextPageAction = () => async (dispatch, getState) => {
  dispatch({ type: LOADING, payload: true });
  const count = getState().pokemon.count;
  const siguiente = count + 1;
  const offset = count * 50;
  const arrayData = [];

  const { data } = await get(API_URl, offset);

  if (data) {
    for (let pokeData of data.results) {
      const { data } = await getDetails(pokeData.url);
      arrayData.push(data);
    }
    dispatch({
      type: NEXT_PAGE,
      payload: {
        array: arrayData,
        count: siguiente,
        offset,
      },
    });
    dispatch({ type: LOADING, payload: false });
  }
};

export const prevPageAction = () => async (dispatch, getState) => {
  dispatch({ type: LOADING, payload: true });
  const count = getState().pokemon.count;
  const anterior = count - 1;
  const offset = getState().pokemon.offset - 50;
  const arrayData = [];

  const { data } = await get(API_URl, offset);

  if (data) {
    for (let pokeData of data.results) {
      const { data } = await getDetails(pokeData.url);
      arrayData.push(data);
    }
    dispatch({
      type: PREV_PAGE,
      payload: {
        array: arrayData,
        count: anterior,
        offset,
      },
    });
    dispatch({ type: LOADING, payload: false });
  }
};

export const addToFavorite = (favorito) => async (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITE,
    payload: favorito,
  });
};
export const escapeToFavorite = (favorito) => async (dispatch) => {
  dispatch({
    type: ESCAPE_TO_FAVORITE,
    payload: favorito,
  });
};

export const deletePokemonToFavorite = (removeFavorite) => (dispatch) => {
  dispatch({
    type: REMOVE_TO_FAVORITE,
    payload: removeFavorite,
  });
};

export const selectPokemon = (select) => async (dispatch) => {
  dispatch({
    type: SELECT_POKEMON,
    payload: select,
  });
};

export const unselectPokemon = (select) => async (dispatch) => {
  dispatch({
    type: ESCAPE_SELECTED,
    payload: select,
  });
};

export const deleteAllPokemonSelected = (removeSelected) => (dispatch) => {
  dispatch({
    type: REMOVE_POKEMON_SELECTED,
    payload: removeSelected,
  });
};

export const searchResultsByName = (keywords) => async (dispatch, getState) => {
  dispatch({ type: LOADING, payload: true });
  const allPokemon = getState().pokemon.array;
  const key = keywords.toLowerCase();

  try {
    const filterPokemonByName = allPokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(key);
    });

    dispatch({ type: SEARCH_RESULT, payload: filterPokemonByName, keywords });
    dispatch({ type: LOADING, payload: false });
  } catch (e) {
    console.log(e);
  }
};

export const searchResultsByAbilities =
  (keywords) => async (dispatch, getState) => {
    const key = keywords.toLowerCase().split(" ");
    const allPokemon = getState().pokemon.array;
    const newArray = [];

    for (let poke of allPokemon) {
      for (let item of poke.abilities) {
        for (let arr of key) {
          if (item.ability.name.toLowerCase().includes(arr)) {
            newArray.push(poke);
          }
        }
      }
    }
    
    dispatch({
      type: SEARCH_RESULT,
      payload: newArray,
      keywords,
    });
  };
