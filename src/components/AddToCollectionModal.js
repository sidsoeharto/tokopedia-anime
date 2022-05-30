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
      if (collectionNames?.includes(collectionName)) {
        setError("Collection name already exist");
      } else {
        dispatch(addCollection(collectionName));
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
        const updatetedData = state.collections.map((el) => {
          if (el.id === data.id) {
            return { ...data, collectionOf };
          } else {
            return el;
          }
        });
        dispatch(updateToCollection(updatetedData));
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
      css={{
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
      }}
      contentLabel="Add To Collection Modal"
    >
      <p css={{ fontWeight: "bolder", fontSize: 18 }}>Add To Collection</p>
      <div css={{ display: "flex", alignItems: "center" }}>
        <AppInput
          value={collectionName}
          placeholder="Enter new collection name"
          onChangeText={(val) => setCollectionName(val)}
          errorText={error}
          style={{ 
            width: "100%",
            margin: "4px 16px 8px 0px",
            // border: `1px solid ${AppColors.pink400}`,
            // borderRadius: '10px',
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
      <div css={{ display: "flex", flexWrap: "wrap", marginTop: 16 }}>
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
                  setCollectionOf((prev) => prev.filter((val) => val !== el));
                } else {
                  setCollectionOf((prev) => [...prev, el]);
                }
              }}
            >
              {el}
            </span>
          );
        })}
      </div>
      <AppButton
        title="SAVE"
        onClick={handleSaveToCollection}
        style={{ width: "100%" }}
      />
    </Modal>
  );
};

export default AddToCollectionModal;