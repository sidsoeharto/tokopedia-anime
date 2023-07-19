/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { addCollection } from "../../store/actions";
import Context from "../../store/Context";
import {
  CollectionInput,
  PopupInputContainer,
} from "./AddCollectionModal.styles";
import BaseModal from "../BaseModal";

interface AddCollectionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

const AddCollectionModal: React.FC<AddCollectionModalProps> = (props) => {
  const { isOpen, onRequestClose } = props;
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState("");
  const [error, setError] = useState("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      setError("Can't use special characters");
    } else {
      const { collectionNames } = state;
      if (collectionNames?.filter(e => e.name === collectionName).length > 0) {
        setError("Collection name already exists");
      } else {
        const obj = {
          id: uuidv4(), 
          name: collectionName,
        };
        dispatch(addCollection(obj));
        setCollectionName("");
        onRequestClose();
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [collectionName]);

  const renderContent = () => (
    <PopupInputContainer>
      <CollectionInput
        value={collectionName}
        label="Collection Name"
        placeholder="Enter collection name"
        onChangeText={(val) => setCollectionName(val)}
        errorText={error}
      />
    </PopupInputContainer>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSave={onSave}
      title="Add Collection Modal"
      renderContent={renderContent}
    />
  );
};

export default AddCollectionModal;
