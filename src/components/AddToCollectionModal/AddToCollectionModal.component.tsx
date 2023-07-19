/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  addCollection,
  addToCollection,
  removeFromCollection,
  updateToCollection,
} from "../../store/actions";
import Context from "../../store/Context";
import BaseModal from "../BaseModal";
import {
  PopupInputContainer,
  PopupContentContainer,
  PopupContentTitle,
  PopupContent,
  CollectionButton,
  AddToButton,
  CollectionInput,
} from "./AddToCollectionModal.styles";
import { CollectionNames } from "../../store/interfaces";

interface AddToCollectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  data: any;
}

const AddToCollectionModal: React.FC<AddToCollectionModalProps> = (props) => {
  const {
    isOpen,
    onRequestClose,
    data,
  } = props;
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState("");
  const [collectionOf, setCollectionOf] = useState<CollectionNames[]>([] as CollectionNames[]);
  const [error, setError] = useState("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      setError("Can't use special characters");
    } else {
      const { collectionNames } = state;
      if (collectionNames?.filter((e) => e.name === collectionName).length > 0) {
        setError("Collection name already exists");
      } else {
        dispatch(addCollection({ id: uuidv4(), name: collectionName }));
        setCollectionName("");
      }
    }
  };

  const handleSaveToCollection = () => {
    if (collectionOf.length === 0) {
      dispatch(removeFromCollection(data.id));
    } else {
      const isCollection = state.collections?.find((el) => el.id === data.id);
      if (isCollection) {
        const updatedData = state.collections.map((el) => {
          if (el.id === data.id) {
            return { ...data, collectionOf };
          } else {
            return el;
          }
        });
        dispatch(updateToCollection(updatedData));
      } else {
        dispatch(addToCollection({ ...data, collectionOf }));
      }
    }
    setCollectionOf([]);
    onRequestClose();
  };

  useEffect(() => {
    setError("");
  }, [collectionName]);

  useEffect(() => {
    setCollectionOf(data.collectionOf ?? []);
  }, [data.collectionOf]);

  const renderContent = () => (
    <>
      <PopupContentTitle>
        Add New Collection
      </PopupContentTitle>
      <PopupInputContainer>
        <CollectionInput
          value={collectionName}
          placeholder="Enter new collection name"
          onChangeText={(val: any) => setCollectionName(val)}
          errorText={error}
        />
        <AddToButton title="Add" onClick={onSave} />
      </PopupInputContainer>
      <PopupContentContainer>
        <PopupContentTitle>
          Add to Saved Collection List
        </PopupContentTitle>
        <PopupContent>
          {state.collectionNames?.map((el, idx) => {
            const isSelected = collectionOf.filter((e: CollectionNames) => e.id === el.id).length > 0;
            return (
              <CollectionButton
                key={idx.toString()}
                isSelected={isSelected}
                onClick={() => {
                  if (isSelected) {
                    setCollectionOf((prev) => prev.filter((val: CollectionNames) => val.name !== el.name));
                  } else {
                    setCollectionOf((prev) => [...prev, el]);
                  }
                }}
              >
                {el.name}
              </CollectionButton>
            );
          })}
        </PopupContent>
      </PopupContentContainer>
    </>
  )

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSave={handleSaveToCollection}
      title="Add To Collection"
      renderContent={renderContent}
    />
  );
};

export default AddToCollectionModal;
