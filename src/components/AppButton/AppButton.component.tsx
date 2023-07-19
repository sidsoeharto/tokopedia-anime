/** @jsxImportSource @emotion/react */

import React, { ReactNode } from "react";
import { appButton, buttonText } from "./AppButton.styles";

interface AppButtonProps {
  title?: string;
  onClick: () => void;
  className?: string;
  icon?: ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      data-testid="app-button"
      onClick={onClick}
      css={appButton}
      className={className}
    >
      {icon}
      <span css={buttonText}>{title}</span>
    </button>
  );
};

export default AppButton;