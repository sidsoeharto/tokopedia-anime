/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const AppInput = ({ label, value, placeholder, onChangeText, errorText, style }) => {
  return (
    <div css={{margin: '0px 8px', ...style}}>
      <span
        css={styles.inputLabel}
      >
        {label}
      </span>
      <div css={{ display: "flex" }}>
        <input
          value={value}
          onChange={(val) => onChangeText(val.target.value)}
          placeholder={placeholder}
          css={styles.input}
        />
      </div>
        <span css={styles.errorText}>{errorText}</span>
    </div>
  );
};

const styles = {
  inputLabel: {
    display: "block",
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: AppColors.gray200,
    width: "100%",
    borderWidth: 0,
  },
  errorText: {color: AppColors.pink400, fontSize: 12}
}

export default AppInput;