import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
} from "./types";

import {loading, techError} from './commonActions'

import { parseJSON } from "../utils";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    dispatch(loading())

    const res = await fetch("/techs");
    const data = await parseJSON(res);

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch(techError(err.response.statusText))
  }
};

// Add technician to server
export const addTech = (tech) => async (dispatch) => {
  try {
    dispatch(loading())

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await parseJSON(res);

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch(techError(err.response.statusText));
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    dispatch(loading())

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch(techError(err.response.statusText));
  }
};
