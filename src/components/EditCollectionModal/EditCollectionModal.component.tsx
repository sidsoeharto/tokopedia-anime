/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";

import BaseModal from "../BaseModal/BaseModal.component";
import Context from "../../store/Context";
import { updateCollection } from "../../store/actions";
import { CollectionNames } from "../../store/interfaces";
import {
  popupInput,
  CollectionInput
} from "./EditCollectionModal.style";

interface EditCollectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  data: CollectionNames | undefined;
}

const EditCollectionModal: React.FC<EditCollectionModalProps> = (props) => {
  const {
    isOpen,
    onRequestClose,
    data,
  } = props;
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState(data?.name ?? '');
  const [error, setError] = useState("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      console.log('error');
      setError("Can't use special characters");
    } else {
      console.log('masuk');
      const { collectionNames } = state;
      if (collectionNames?.filter((e) => e.name === collectionName).length > 0) {
        setError("Collection name already exists");
      } else {
        const collectionFind = collectionNames?.find((e) => e.id === data?.id);
        if (collectionFind) {
          collectionFind.name = collectionName;
          dispatch(updateCollection(collectionFind));
          onRequestClose();
        }
      }
    }
  };

  useEffect(() => {
    setCollectionName(data?.name ?? '');
  }, [data]);

  useEffect(() => {
    setError("");
  }, [collectionName]);

  const renderContent = () => (
    <div css={popupInput}>
      <CollectionInput
        value={collectionName}
        label="Collection Name"
        placeholder="Enter collection name"
        onChangeText={(val: any) => setCollectionName(val)}
        errorText={error}
      />
    </div>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSave={onSave}
      title="Edit Collection"
      renderContent={renderContent}
    />
  );
};

export default EditCollectionModal;
