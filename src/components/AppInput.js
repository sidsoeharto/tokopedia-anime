/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const AppInput = ({ label, value, placeholder, onChangeText, errorText, style }) => {
  return (
    <div css={{margin: '0px 8px', ...style}}>
      <span
        css={{
          display: "block",
          fontSize: 14,
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        {label}
      </span>
      <div css={{ display: "flex" }}>
        <input
          value={value}
          onChange={(val) => onChangeText(val.target.value)}
          placeholder={placeholder}
          css={{
            borderRadius: 8,
            padding: 16,
            backgroundColor: AppColors.gray200,
            width: "100%",
            borderWidth: 0,
          }}
        />
      </div>
        <span css={{color: AppColors.pink400, fontSize: 12}}>{errorText}</span>
    </div>
  );
};

export default AppInput;