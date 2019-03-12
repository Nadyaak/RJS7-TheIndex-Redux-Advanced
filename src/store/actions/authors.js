import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = res.data;
      dispatch({
        type: actionTypes.FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {}
  };
};

export const filterAuthors = query => {
  return {
    type: actionTypes.FILTER_AUTHORS,
    payload: query
  };
};
