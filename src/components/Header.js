/** @jsxImportSource @emotion/react */

import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import AppColors from "../styles/AppColors";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newLocation = { ...location };

  const showBackIcon = location.pathname !== "/";
  const showEditButton = !!matchPath({
    path: "/collections/:name",
    exact: true,
    strict: false
  }, location.pathname);

  return (
    <div css={{ position: "sticky", top: 0, zIndex: 3}}>
      <div
        css={{
          height: "5vh",
          padding: "0.5rem 2rem",
          backgroundColor: AppColors.green600,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
        }}
      >
        <div
          css={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {showBackIcon && (
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              css={{ 
                marginRight: 12 ,
                color: AppColors.gray100,
                display: 'inline-flex',
                cursor: 'pointer',
              }}
              onClick={() => navigate(-1)}
            />
          )}
          <span
            css={{
              marginTop: 2,
              fontSize: 18,
              fontWeight: "bolder",
              display: "inline-flex",
              alignItems: 'center',
              color: AppColors.gray100,
            }}
          >
            {newLocation.state?.title ?? "AnimeList"}
          </span>
        </div>
        
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
        {
          showEditButton && (
            <button
              css={{
                background: AppColors.pink400,
                color: AppColors.gray100,
                borderRadius: 6,
                padding: '0.625rem 1.25rem',
                border: 'none',
                display: 'flex',
                flexDirection: 'row',
                cursor: 'pointer',
                fontSize: 16,
                alignItems: 'center',
                fontFamily: 'Overpass',
              }}
            >
              <FontAwesomeIcon
                icon={solid("edit")}
                css={{  
                  marginRight: 8, 
                  display: "inline-flex",
                }}
                size="1x"
                color={AppColors.gray100}
              />
              <span 
                css={{marginTop: 3}}
              >
                Edit Collection
              </span>
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Header;