/** @jsxImportSource @emotion/react */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { css, keyframes } from "@emotion/react";
import AppColors from "../styles/AppColors";

const Loading = (props: any) => {
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  `;

  return (
    <div
      css={styles.loadingContainer}
    >
      <div css={{ textAlign: "center" }}>
        <FontAwesomeIcon
          icon={solid("spinner")}
          size="2x"
          css={css`
            animation: ${rotate} 1s ease infinite;
          `}
          color={AppColors.gray400}
        />
        <p css={styles.loadingText}>
          Loading...
        </p>
      </div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    flex: 1,
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: { fontSize: 12, fontWeight: "bold", color: AppColors.gray400 }
}

export default Loading;