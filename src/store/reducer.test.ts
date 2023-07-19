import reducer, { initialState, State } from "./reducer";
import { ActionTypes, AddCollectionAction, AddToCollectionAction, RemoveCollectionAction, RemoveFromCollectionAction, SaveAnimeListAction, SavePageInfoAction, UpdateCollectionAction, UpdateToCollectionAction } from "./actions";

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle SAVE_ANIME_LIST action", () => {
    const animeList = [{
      id: '',
      coverImage: {
        large: ''
      },
      title: {
        english: '',
        native: ''
      },
      duration: 0,
    }];
    const action = { type: ActionTypes.SAVE_ANIME_LIST, payload: { data: animeList } } as SaveAnimeListAction;

    const nextState = reducer(initialState, action);

    expect(nextState.animeList).toEqual(animeList);
  });

  it("should handle ADD_TO_COLLECTION action", () => {
    const collection = { 
      id: "1", 
      title: {
        english: '',
        native: ''
      }, 
    };
    const action = { type: ActionTypes.ADD_TO_COLLECTION, payload: { data: collection } } as AddToCollectionAction;
    const prevState: State = {
      ...initialState,
      collections: [{ 
        id: "2",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0
      }],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collections).toEqual([...prevState.collections, collection]);
  });

  test("should handle UPDATE_TO_COLLECTION action", () => {
    const updatedCollections = [
      { 
        id: "1",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0
      },
      { 
        id: "2",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0
      },
    ];
    const action = { type: ActionTypes.UPDATE_TO_COLLECTION, payload: { data: updatedCollections } } as UpdateToCollectionAction;
    const prevState: State = {
      ...initialState,
      collections: [{ 
        id: "2",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0
      }],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collections).toEqual(updatedCollections);
  });

  test("should handle REMOVE_FROM_COLLECTION action", () => {
    const idToRemove = "1";
    const action = { type: ActionTypes.REMOVE_FROM_COLLECTION, payload: { id: idToRemove } } as RemoveFromCollectionAction;
    const prevState: State = {
      ...initialState,
      collections: [
        { 
          id: "1",
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0
        },
        { 
          id: "2",
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0
        },
      ],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collections).toEqual([{ 
      id: "2",
      title: {
        english: 'asd',
        native: 'asd'
      },
      duration: 0
    }]);
  });

  test("should handle ADD_COLLECTION action", () => {
    const newCollection = { id: "3", name: "New Collection" };
    const action = { type: ActionTypes.ADD_COLLECTION, payload: newCollection } as AddCollectionAction;
    const prevState: State = {
      ...initialState,
      collectionNames: [{ id: "1", name: "Collection 1" }, { id: "2", name: "Collection 2" }],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collectionNames).toEqual([...prevState.collectionNames, newCollection]);
  });

  test("should handle UPDATE_COLLECTION action", () => {
    const updatedCollection = { id: "2", name: "Updated Collection 2" };
    const action = { type: ActionTypes.UPDATE_COLLECTION, payload: updatedCollection } as UpdateCollectionAction;
    const prevState: State = {
      ...initialState,
      collectionNames: [{ id: "1", name: "Collection 1" }, { id: "2", name: "Collection 2" }],
      collections: [
        { 
          id: "1",
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0,
          collectionOf: [{ id: "1", name: "Collection 1" }]
        },
        {
          id: "2", 
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0,
          collectionOf: [{ id: "2", name: "Collection 2" }]
        },
      ],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collectionNames).toEqual([
      { id: "1", name: "Collection 1" },
      updatedCollection,
    ]);
    expect(nextState.collections).toEqual([
      { 
        id: "1",
        title: {
          english: 'asd',
          native: 'asd'
        }, 
        duration: 0,
        collectionOf: [{ id: "1", name: "Collection 1" }]
      },
      {
        id: "2",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0,
        collectionOf: [updatedCollection]
      },
    ]);
  });

  test("should handle REMOVE_COLLECTION action", () => {
    const collectionToRemove = { name: "Collection 1" };
    const action = { type: ActionTypes.REMOVE_COLLECTION, payload: collectionToRemove } as RemoveCollectionAction;
    const prevState: State = {
      ...initialState,
      collectionNames: [
        { id: "1", name: "Collection 1" },
        { id: "2", name: "Collection 2" },
      ],
      collections: [
        { 
          id: "1",
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0,
          collectionOf: [{ id: "1", name: "Collection 1" }]
        },
        {
          id: "2",
          title: {
            english: 'asd',
            native: 'asd'
          },
          duration: 0,
          collectionOf:[{ id: "2", name: "Collection 2" }]
        },
      ],
    };

    const nextState = reducer(prevState, action);

    expect(nextState.collectionNames).toEqual([
      { id: "2", name: "Collection 2" },
    ]);
    expect(nextState.collections).toEqual([
      { 
        id: "2",
        title: {
          english: 'asd',
          native: 'asd'
        },
        duration: 0, 
        collectionOf: [{ id: "2", name: "Collection 2" }] 
      },
    ]);
  });

  test("should handle SAVE_PAGE_INFO action", () => {
    const pageInfo = { currentPage: 2, total: 10 };
    const action = { type: ActionTypes.SAVE_PAGE_INFO, payload: { data: pageInfo } } as SavePageInfoAction;

    const nextState = reducer(initialState, action);

    expect(nextState.pageInfo).toEqual(pageInfo);
  });

  test("should handle unknown action", () => {
    const action = { type: "UNKNOWN_ACTION" };

    const nextState = reducer(initialState, action as any);

    expect(nextState).toEqual(initialState);
  });
});
