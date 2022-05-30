/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const AppButton = ({ title, onClick, style }) => {
  return (
      <button
        onClick={onClick}
        css={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: AppColors.pink400,
          borderWidth: 0,
          alignItems: 'center',
          margin: '8px 0px',
          ...style
        }}
      >
        <span css={{color: AppColors.gray100, fontWeight: 'bold'}}>{title}</span>
      </button>
  );
};

export default AppButton;