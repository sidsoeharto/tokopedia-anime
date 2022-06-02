/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import {
  addCollection,
  addToCollection,
  removeFromCollection,
  updateToCollection,
} from "../store/actions";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

const WIDTH = window.innerWidth;

const AddToCollectionModal = ({ isOpen, onRequestClose, data }) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState("");
  const [collectionOf, setCollectionOf] = useState([]);
  const [error, setError] = useState("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      setError("Cant't use special characters");
    } else {
      const { collectionNames } = state;
      if (collectionNames?.filter(e => e.name === collectionName).length > 0) {
        setError("Collection name already exist");
      } else {
        dispatch(addCollection({id: collectionNames.length+1, name: collectionName}));
        setCollectionName("");
      }
    }
  };

  const handleSaveToCollection = () => {
    if (collectionOf.length === 0) {
      dispatch(removeFromCollection(data.id));
    } else {
      const isCollection = state.collections.find(
        (el) => el.id === data.id
      );
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
    setCollectionOf(data.collectionOf??[])
  }, [data.collectionOf]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      css={styles.popup}
      style={{overlay: {zIndex:25}}}
      contentLabel="Add To Collection Modal"
    >
      <h1 css={styles.popupTitle}>Add To Collection</h1>
      <h2 css={styles.popupContentTitle}>Add New Collection</h2>
      <div css={styles.popupInput}>
        <AppInput
          value={collectionName}
          placeholder="Enter new collection name"
          onChangeText={(val) => setCollectionName(val)}
          errorText={error}
          style={{ 
            width: "100%",
            margin: "4px 16px 8px 0px",
          }}
        />
        <AppButton 
          title="Add" 
          onClick={onSave} 
          style={{
            padding: 14,
          }} 
        />
      </div>
      <div css={styles.popupContentContainer}>
        <h2 css={styles.popupContentTitle}>Add to Saved Collection List</h2>
        <div css={styles.popupContent}>
          {state.collectionNames?.map((el, idx) => {
            const isSelected = collectionOf.includes(el);
            return (
              <span
                key={idx.toString()}
                css={{
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid gray",
                  margin: 4,
                  color: isSelected ? "white" : AppColors.gray600,
                  backgroundColor: isSelected ? AppColors.pink400 : "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (isSelected) {
                    setCollectionOf((prev) => prev.filter((val) => val.name !== el.name));
                  } else {
                    setCollectionOf((prev) => [...prev, el]);
                  }
                }}
              >
                {el.name}
              </span>
            );
          })}
        </div>
      </div>
      <AppButton
        title="SAVE"
        onClick={handleSaveToCollection}
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
    fontSize: 20
  },
  popupInput : { 
    display: "flex", 
    alignItems: "center",
    borderBottom: `1px solid ${AppColors.gray300}`,
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
    fontSize: 16,
    textAlign: 'center',
  },
  popupContent: { 
    display: "flex", 
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 8 
  }
}

export default AddToCollectionModal;