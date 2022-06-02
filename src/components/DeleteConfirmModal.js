/** @jsxImportSource @emotion/react */

import React from "react";
import Modal from "react-modal";
import AppColors from "../styles/AppColors";
import AppButton from "./AppButton";

const WIDTH = window.innerWidth;

const DeleteCollectionModal = ({ isOpen, name, onRequestClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      css={styles.popup}
      contentLabel="Delete Collection Item Modal"
      style={{overlay: {zIndex:25}}}
    >
      <h2 css={styles.popupTitle}>Delete Collection Item</h2>
      <div css={styles.popupInput}>
        <h4 css={styles.popupContentTitle}>Are you sure you want to delete {name}?</h4>
      </div>
      <AppButton 
        title="Cancel" 
        onClick={onRequestClose} 
        style={{ width: "50%", backgroundColor: AppColors.gray400, }} 
      />
      <AppButton 
        title="Yes" 
        onClick={() => onDelete(name)} 
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

export default DeleteCollectionModal;