/** @jsxImportSource @emotion/react */

import React, { ChangeEvent } from "react";
import { inputLabel, input, errorTextStyle } from "./AppInput.styles";

interface AppInputProps {
  label?: string;
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  errorText?: string;
  className?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  errorText,
  className
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChangeText(newValue);
  };

  return (
    <div className={className}>
      {label && <span css={inputLabel}>{label}</span>}
      <div css={{ display: "flex" }}>
        <input
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          css={input}
        />
      </div>
      {errorText && <span css={errorTextStyle}>{errorText}</span>}
    </div>
  );
};

export default AppInput;