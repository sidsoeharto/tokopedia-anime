import { ActionTypes, Action } from './actions';
import { Anime, Collection, CollectionNames, PageInfo } from './interfaces';

export interface State {
  animeList: Anime[];
  pageInfo: PageInfo;
  animeDetail: Anime;
  collections: Collection[];
  collectionNames: CollectionNames[];
}

export const initialState: State = {
  animeList: [],
  pageInfo: {
    currentPage: 1,
    total: 1
  },
  animeDetail: {
    id: '',
    coverImage: {
      large: ''
    },
    title: {
      english: '',
      native: ''
    },
    duration: 0,
  },
  collections: [],
  collectionNames: []
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SAVE_ANIME_LIST:
      return {
        ...state,
        animeList: action.payload.data
      };
    case ActionTypes.ADD_TO_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload.data]
      };
    case ActionTypes.UPDATE_TO_COLLECTION:
      return {
        ...state,
        collections: action.payload.data
      };
    case ActionTypes.REMOVE_FROM_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter((v) => v.id !== action.payload.id)
      };
    case ActionTypes.ADD_COLLECTION:
      return {
        ...state,
        collectionNames: [
          ...state.collectionNames,
          {
            id: action.payload.id,
            name: action.payload.name
          }
        ] as CollectionNames[]
      };
    case ActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ) as CollectionNames[],
        collections: state.collections.map((el) => ({
          ...el,
          collectionOf: el.collectionOf?.map((e) =>
            e.id === action.payload.id ? action.payload : e
          ) as CollectionNames[]
        }))
      };      
    case ActionTypes.REMOVE_COLLECTION:
      return {
        ...state,
        collectionNames: state.collectionNames.filter((el) => el.name !== action.payload.name),
        collections: state.collections.reduce((result, el) => {
          if (el.collectionOf && el.collectionOf?.filter((e) => e.name !== action.payload.name).length > 0) {
            result.push({
              ...el,
              collectionOf: el.collectionOf.filter((e) => e.name !== action.payload.name)
            });
          }
          return result;
        }, [] as Collection[])
      };
    case ActionTypes.SAVE_PAGE_INFO:
      return {
        ...state,
        pageInfo: action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;
