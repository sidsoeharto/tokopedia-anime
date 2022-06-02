import * as actions from './actions';

export const initialState = {
  animeList: [],
  pageInfo: {
    currentPage: 1
  },
  animeDetail: {},
  collections: [],
  collectionNames: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SAVE_ANIME_LIST:
      return {
        ...state,
        animeList: payload.data
      };
    case actions.ADD_TO_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, payload.data]
      };
    case actions.UPDATE_TO_COLLECTION:
      return {
        ...state,
        collections: payload.data
      };
    case actions.REMOVE_FROM_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter((v) => v.id !== payload.id)
      };
    case actions.ADD_COLLECTION:
      return {
        ...state,
        collectionNames: [...state.collectionNames, payload]
      };
    case actions.UPDATE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.filter((el) => el.name !== payload.name)
      };
    case actions.REMOVE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.filter((el) => el.name !== payload.name)
      };
    case actions.SAVE_PAGE_INFO:
      return {
        ...state,
        pageInfo: payload.data
      };
    default:
      return state;
  }
}