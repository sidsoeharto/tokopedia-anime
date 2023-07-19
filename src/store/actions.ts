import {
  ActionTypes,
  Anime,
  Collection,
  CollectionNames,
  PageInfo
} from './interfaces';

export interface SaveAnimeListAction {
  type: ActionTypes.SAVE_ANIME_LIST;
  payload: {
    data: Anime[];
  };
}

export interface AddToCollectionAction {
  type: ActionTypes.ADD_TO_COLLECTION;
  payload: {
    data: Collection;
  };
}

export interface UpdateToCollectionAction {
  type: ActionTypes.UPDATE_TO_COLLECTION;
  payload: {
    data: Collection[];
  };
}

export interface RemoveFromCollectionAction {
  type: ActionTypes.REMOVE_FROM_COLLECTION;
  payload: {
    id: string;
  };
}

export interface AddCollectionAction {
  type: ActionTypes.ADD_COLLECTION;
  payload: CollectionNames;
}

export interface UpdateCollectionAction {
  type: ActionTypes.UPDATE_COLLECTION;
  payload: CollectionNames;
}

export interface RemoveCollectionAction {
  type: ActionTypes.REMOVE_COLLECTION;
  payload: {
    name: string;
  };
}

export interface SavePageInfoAction {
  type: ActionTypes.SAVE_PAGE_INFO;
  payload: {
    data: PageInfo;
  };
}

export type Action =
  | SaveAnimeListAction
  | AddToCollectionAction
  | UpdateToCollectionAction
  | RemoveFromCollectionAction
  | AddCollectionAction
  | UpdateCollectionAction
  | RemoveCollectionAction
  | SavePageInfoAction;

export const saveAnimeList = (data: Anime[]): SaveAnimeListAction => ({
  type: ActionTypes.SAVE_ANIME_LIST,
  payload: {
    data
  }
});

export const addToCollection = (data: Collection): AddToCollectionAction => ({
  type: ActionTypes.ADD_TO_COLLECTION,
  payload: {
    data
  }
});

export const removeFromCollection = (id: string): RemoveFromCollectionAction => ({
  type: ActionTypes.REMOVE_FROM_COLLECTION,
  payload: {
    id
  }
});

export const updateToCollection = (data: Collection[]): UpdateToCollectionAction => ({
  type: ActionTypes.UPDATE_TO_COLLECTION,
  payload: {
    data
  }
});

export const updateCollection = (data: CollectionNames): UpdateCollectionAction => ({
  type: ActionTypes.UPDATE_COLLECTION,
  payload: data
});

export const addCollection = (data: CollectionNames): AddCollectionAction => ({
  type: ActionTypes.ADD_COLLECTION,
  payload: data
});

export const removeCollection = (name: string): RemoveCollectionAction => ({
  type: ActionTypes.REMOVE_COLLECTION,
  payload: {
    name
  }
});

export const savePageInfo = (data: PageInfo): SavePageInfoAction => ({
  type: ActionTypes.SAVE_PAGE_INFO,
  payload: {
    data
  }
});
export { ActionTypes };

