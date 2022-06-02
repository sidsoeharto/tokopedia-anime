/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { addCollection } from "../store/actions";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

const WIDTH = window.innerWidth;

const AddCollectionModal = ({ isOpen, onRequestClose }) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState("");
  const [error, setError] = useState("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      setError("Cant't use special characters");
    } else {
      const { collectionNames } = state;
      if (collectionNames?.includes(collectionName)) {
        setError("Collection name already exist");
      } else {
        dispatch(addCollection(collectionName));
        setCollectionName("");
        onRequestClose();
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [collectionName]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      css={styles.popup}
      contentLabel="Add Collection Modal"
      style={{overlay: {zIndex:25}}}
    >
      <h2 css={styles.popupTitle}>Add New Collection</h2>
      <div css={styles.popupInput}>
        <AppInput
          value={collectionName}
          label="Collection Name"
          placeholder="Enter collection name"
          onChangeText={(val) => setCollectionName(val)}
          errorText={error}
        />
      </div>
      <AppButton 
        title="SAVE" 
        onClick={onSave} 
        style={{ width: "50%" }} 
      />
    </Modal>
  );
};

const styles = {
  popup: {
    display: "flex",
    flexDirection: "column",
    justifyConent: "center",
    alignItems: "center",
    position: "absolute",
    marginLeft: '-150px',
    marginTop: '-100px',
    top: '40%',
    left: WIDTH > 480 ? '50%': '45%',
    width: '300px',
    minHeight: '200px',
    padding: 16,
    // margin: 16,
    border: "2px solid",
    borderColor: AppColors.lightgrey,
    backgroundColor: "white",
    borderRadius: 16,
    zIndex: 25,
  },
  popupTitle : { 
    fontWeight: "bolder", 
    fontSize: 20,
    marginBottom: 20,
  },
  popupInput : { 
    display: "flex", 
    alignItems: "center",
    marginBottom: 8,
    paddingBottom: 8
  },
  popupContentContainer : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  popupContentTitle: {
    fontWeight: "bold", 
    fontSize: 16
  },
  popupContent: { 
    display: "flex", 
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 8 
  }
}

export default AddCollectionModal;