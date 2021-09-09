export const getRandomPerson = (state) => state.person || {};

export const getPersonLoading = (state) => getRandomPerson(state).isLoading;

export const getPersonError = (state) => getRandomPerson(state).error;

export const getPersonData = (state) => getRandomPerson(state).data;


export const randomPersonSelectors = {
  getRandomPerson,
  getPersonLoading,
  getPersonError,
  getPersonData,
}