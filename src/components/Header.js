/** @jsxImportSource @emotion/react */

import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import AppColors from "../styles/AppColors";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newLocation = { ...location };

  const showBackIcon = location.pathname !== "/";

  return (
    <div css={styles.headerContainer}>
      <div
        css={styles.headerSubContainer}
      >
        <div
          css={styles.titleContainer}
        >
          {showBackIcon && (
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              css={styles.backIcon}
              onClick={() => navigate(-1)}
            />
          )}
          <span
            css={styles.title}
          >
            {newLocation.state?.title ?? "AnimeList"}
          </span>
        </div>
        
        {!showBackIcon && (
          <button
            css={styles.collectionContainer}
            onClick={() =>
              navigate("/collections", { state: { title: "Collection List" } })
            }
          >
            <FontAwesomeIcon
              icon={solid("heart")}
              css={styles.collectionIcon}
              size="2x"
              color={AppColors.pink300}
            />
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  headerContainer: { position: "sticky", top: 0, zIndex: 3},
  headerSubContainer: {
    height: "5vh",
    padding: "0.5rem 2rem",
    backgroundColor: AppColors.green600,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
  },
  backIcon: { 
    marginRight: 12 ,
    color: AppColors.gray100,
    display: 'inline-flex',
    cursor: 'pointer',
  },
  titleContainer: {
    background: 'none',
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "bolder",
    display: "inline-flex",
    alignItems: 'center',
    color: AppColors.gray100,
  },
  collectionContainer: {
    background: 'none',
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  collectionIcon: { 
    marginLeft: 12, 
    marginRight: 2, 
    display: "inline-block",
  }
}

export default Header;