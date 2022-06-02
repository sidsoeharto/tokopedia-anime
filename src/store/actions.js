export const SAVE_ANIME_LIST = 'SAVE_ANIME_LIST';
export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const UPDATE_TO_COLLECTION = 'UPDATE_TO_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const ADD_COLLECTION = 'ADD_COLLECTION';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';
export const SAVE_PAGE_INFO = 'SAVE_PAGE_INFO';

export function saveAnimeList(data) {
  return {
    type: SAVE_ANIME_LIST,
    payload: {
      data
    }
  };
}

export function addToCollection(data) {
  console.log(data)
  return {
    type: ADD_TO_COLLECTION,
    payload: {
      data
    }
  };
}

export function removeFromCollection(id) {
  return {
    type: REMOVE_FROM_COLLECTION,
    payload: {
      id
    }
  };
}

export function updateToCollection(data) {
  return {
    type: UPDATE_TO_COLLECTION,
    payload: {
      data
    }
  };
}

export function updateCollection(data) {
  console.log(data);
  return {
    type: UPDATE_COLLECTION,
    payload: data
  };
}

export function addCollection(name) {
  return {
    type: ADD_COLLECTION,
    payload:name
  };
}

export function removeCollection(name) {
  return {
    type: REMOVE_COLLECTION,
    payload: {
      name
    }
  };
}

export function savePageInfo(data) {
  return {
    type: SAVE_PAGE_INFO,
    payload: {
      data
    }
  };
}