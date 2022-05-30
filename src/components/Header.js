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
    <div css={{ position: "sticky", top: 0, zIndex: 3}}>
      <div
        css={{
          height: "5vh",
          padding: "0.5rem 2rem",
          backgroundColor: AppColors.green600,
          display: "flex",
          alignItems: "center",
          filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
        }}
      >
        {showBackIcon && (
          <FontAwesomeIcon
            icon={solid("arrow-left")}
            css={{ 
              marginRight: 12 ,
              color: AppColors.gray100,
              cursor: 'pointer',
            }}
            onClick={() => navigate(-1)}
          />
        )}
        <p
          css={{
            fontSize: 18,
            fontWeight: "bolder",
            color: AppColors.gray100,
            flex: 1,
          }}
        >
          {newLocation.state?.title ?? "AnimeList"}
        </p>
        {!showBackIcon && (
          <button
            css={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'row',
              cursor: 'pointer',
            }}
            onClick={() =>
              navigate("/collections", { state: { title: "Collection List" } })
            }
          >
            <FontAwesomeIcon
              icon={solid("heart")}
              css={{ 
                marginLeft: 12, 
                marginRight: 2, 
                display: "inline-block",
              }}
              size="2x"
              color={AppColors.pink300}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;