import React from 'react';
import {
  Popup,
  PopupTitle,
  ButtonsContainer,
  CancelButton,
  ConfirmButton
} from './BaseModal.styles';

interface BaseModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
  renderContent: () => React.ReactNode,
  onSave: () => void | undefined,
  title: string
}

const BaseModal: React.FC<BaseModalProps> = (props) => {
  const {
    isOpen,
    onRequestClose,
    onSave,
    title,
    renderContent
  } = props

  const renderButtons = () => (
    <ButtonsContainer>
      <CancelButton 
        title="Cancel" 
        onClick={onRequestClose} 
      />
      <ConfirmButton 
        title="Save" 
        onClick={onSave} 
      />
    </ButtonsContainer>
  )

  return (
    <Popup
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{ overlay: { zIndex: 25 } }}
    >
      <PopupTitle>{title}</PopupTitle>
      {renderContent()}
      {renderButtons()}
    </Popup>
  )
}

export default BaseModal;