import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types';

const initialState = {
  logs: logsReducer(undefined, {type: '@@redux/INIT'}),
  current: null,
  loading: false,
  error: null
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: logsReducer(state.logs, action),
      };
    case ADD_LOG:
      return {
        ...state,
        logs: logsReducer(state.logs, action),
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: logsReducer(state.logs, action),
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: logsReducer(state.logs, action),
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: logsReducer(state.logs, action),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

function logsReducer(state = [], action) {
  switch(action.type) {
    case GET_LOGS:
      return action.payload
    case ADD_LOG:
      return state.concat(action.payload)
    case DELETE_LOG:
      return state.filter(log => log.id !== action.id)
    case UPDATE_LOG: 
      return state.map(log =>
        log.id === action.payload.id ? action.payload : log
      )
    case SEARCH_LOGS:
      return action.payload
    default:
      return state
  }
}
