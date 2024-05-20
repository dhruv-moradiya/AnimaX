import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

const AnimeAppContext = createContext();

const initialState = {
  popularAnime: [],
  upcomeingAnime: [],
  airingAnime: [],
  searchResults: [],
  character: [],
  character_info: [],
  character_photos: [],
  loading: false,
  searchItems: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "POPULAR_ANIME":
      return { ...state, popularAnime: action.payload, loading: false };
    case "UPCOMEING_ANIME":
      return { ...state, upcomeingAnime: action.payload, loading: false };
    case "SEARCH_RESULT":
      return { ...state, searchResults: action.payload, loading: false };
    case "CHARACTER":
      return { ...state, character: action.payload, loading: false };
    case "CHARACTER_INFO":
      return { ...state, character_info: action.payload, loading: false };
    case "CHARACTER_PHOTOS":
      return { ...state, character_photos: action.payload, loading: false };
    case "SEARCH_ITEMS":
      return { ...state, searchItems: action.payload, loading: false };
    default:
      break;
  }
  return state;
};

export const AnimeAppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSearch, setIsSearch] = useState(false)




  return (
    <AnimeAppContext.Provider
      value={{ ...state, dispatch, isSearch, setIsSearch }}
    >
      {children}
    </AnimeAppContext.Provider>
  );
};

export const useAnimeContext = () => {
  return useContext(AnimeAppContext);
};
