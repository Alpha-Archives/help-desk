import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

import {loading, logError} from './commonActions'

import { parseJSON } from "../utils";

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await parseJSON(res);

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await fetch("/logs");
    const data = await parseJSON(res);

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch(logError(err.response.statusText))
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await parseJSON(res);

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch(logError(err.response.statusText));
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    dispatch(loading());

    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch(logError(err.response.statusText));
  }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await parseJSON(res);

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch(logError(err.response.statusText));
  }
};

// Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await fetch(`/logs?q=${text}`);
    const data = await parseJSON(res);

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch(logError(err.response.statusText));
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
