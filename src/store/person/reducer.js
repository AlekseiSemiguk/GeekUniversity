import { CHANGE_PERSON_LOADING, CHANGE_PERSON_ERROR, CHANGE_PERSON_DATA } from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PERSON_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case CHANGE_PERSON_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case CHANGE_PERSON_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}