import {
  GET_ALL_POKEMON,
  NEXT_PAGE,
  PREV_PAGE,
  ADD_TO_FAVORITE,
  SELECT_POKEMON,
  REMOVE_TO_FAVORITE,
  REMOVE_POKEMON_SELECTED,
  ESCAPE_SELECTED,
  SEARCH_RESULT,
  LOADING,
  ESCAPE_TO_FAVORITE,
} from "../constants";

const dataInicial = {
  array: [],
  isLoading: false,
  count: 1,
  offset: 0,
  favorite: [],
  selected: [],
  searchResult: [],
  keywords: "",
};

//Reducer
export default function pokemonReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_POKEMON:
      return { ...state, array: action.payload };

    case LOADING:
      return { ...state, isLoading: action.payload };

    case NEXT_PAGE:
      return {
        ...state,
        array: action.payload.array,
        count: action.payload.count,
        offset: action.payload.offset,
      };

    case PREV_PAGE:
      return {
        ...state,
        array: action.payload.array,
        count: action.payload.count,
      };

    case ADD_TO_FAVORITE:
      return { ...state, favorite: [...state.favorite, action.payload] };

    case SELECT_POKEMON:
      return { ...state, selected: [...state.selected, action.payload] };

    case REMOVE_POKEMON_SELECTED:
      const selected = action.payload.map((item) => item.order);
      const newArray = state.array.filter(
        (item) => !selected.includes(item.order)
      );
      const newArraySelected = state.searchResult.filter(
        (item) => !selected.includes(item.order)
      );

      return {
        ...state,
        array: newArray,
        searchResult: newArraySelected,
        selected: [],
      };

    case ESCAPE_SELECTED: {
      const selected = action.payload;
      const newArray = [];

      for (let select of state.selected) {
          if (select !== selected) {
            newArray.push(select);
          }
      }

      return {
        ...state,
        selected: newArray,
      };
    }

    case REMOVE_TO_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter(
          (element) => element.name !== action.payload.name
        ),
      };

    case ESCAPE_TO_FAVORITE: {
      const selected = action.payload;
      const newArray = [];

      for (let select of state.favorite) {
          if (select !== selected) {
            newArray.push(select);
          }
      }
      
      return {
        ...state,
        favorite: newArray,
      };
    }
    case SEARCH_RESULT:
      return { ...state, searchResult: action.payload };

    default:
      return state;
  }
}
