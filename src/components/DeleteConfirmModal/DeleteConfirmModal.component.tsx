/** @jsxImportSource @emotion/react */

import React from "react";

import BaseModal from "../BaseModal/BaseModal.component";
import {
  PopupInput,
  PopupContentTitle,
} from "./DeleteConfirmModal.style";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  name: string | undefined;
  onRequestClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = (props) => {
  const {
    isOpen,
    name,
    onRequestClose,
    onDelete,
  } = props;

  const renderContent = () => (
    <PopupInput>
      <PopupContentTitle>Are you sure you want to delete {name}?</PopupContentTitle>
    </PopupInput>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSave={onDelete}
      title="Delete Collection Item"
      renderContent={renderContent}
    />
  );
};

export default DeleteConfirmModal;
