import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: techReducer(undefined, {type: '@@redux/INIT'}),
  loading: false,
  error: null
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: techReducer(state.techs, action),
      };
    case ADD_TECH:
      return {
        ...state,
        techs: techReducer(state.techs, action),
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: techReducer(state.techs, action),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

function techReducer(state = [], action) {
  switch(action.type) {
    case GET_TECHS:
      return action.payload
    case ADD_TECH:
      return state.concat(action.payload)
    case DELETE_TECH:
      return state.filter(tech => tech.id !== action.payload)
    default:
      return state
  }
}
