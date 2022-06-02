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
      // console.log(...state.collections)
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
        collectionNames: state.collectionNames.map(function(el) { return el.id === payload.id ? payload : el }),
        collections: state.collections.map(function (el) {
          return {
          ...el, 
          collectionOf: el.collectionOf?.map((e) => e.id === payload.id ? payload : e )
          }
        })
      };
    case actions.REMOVE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.filter((el) => el.name !== payload.name),
        collections: state.collections.reduce(function (result, el) {
          if (el.collectionOf?.filter((e) => e.name !== payload.name).length > 0) {
            result.push(
              {
                ...el, 
                collectionOf: el.collectionOf?.filter((e) => e.name !== payload.name)
              }
            ) 
          }
          return result;
        }, [])
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