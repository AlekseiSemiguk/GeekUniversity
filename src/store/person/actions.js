import { ENDPOINT } from "../../api";

export const CHANGE_PERSON_LOADING = 'CHANGE_PERSON_LOADING';

export const CHANGE_PERSON_ERROR = 'CHANGE_PERSON_ERROR';

export const CHANGE_PERSON_DATA = 'CHANGE_PERSON_DATA';


export const changePersonLoading = (isLoading) => ({
  type: CHANGE_PERSON_LOADING,
  payload: isLoading,
})

export const changePersonError = (error) => ({
  type: CHANGE_PERSON_ERROR,
  payload: error
})

export const changePersonData = (person) => ({
  type: CHANGE_PERSON_DATA,
  payload: person
})


export const getRandomPersonAction = (props) => async (dispatch) => {
  dispatch(changePersonData(null));
  dispatch(changePersonError(null));
  dispatch(changePersonLoading(true));

  try {
    const url = ENDPOINT;

    const response = await fetch(url);

    const result = await response.json();



    dispatch(changePersonData(result))

  } catch (e) {
    console.dir(e);
    dispatch(changePersonError(e))
  }

  dispatch(changePersonLoading(false))
}