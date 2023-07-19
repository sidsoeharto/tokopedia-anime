/** @jsxImportSource @emotion/react */

import React from "react";

import BaseModal from "../BaseModal";
import {
  popupInput,
  popupContentTitle,
} from "./DeleteCollectionModal.styles";

interface DeleteCollectionModalProps {
  isOpen: boolean;
  name: string;
  onRequestClose: () => void;
  onDelete: (name: string) => void;
}

const DeleteCollectionModal: React.FC<DeleteCollectionModalProps> = (props) => {
  const { isOpen, name, onRequestClose, onDelete } = props;

  const renderContent = () => (
    <>
      <div css={popupInput}>
        <h4 css={popupContentTitle}>Are you sure you want to delete {name}?</h4>
      </div>
    </>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSave={() => onDelete(name)}
      title="Delete Collection"
      renderContent={renderContent}
    />
  );
};

export default DeleteCollectionModal;
