/** @jsxImportSource @emotion/react */

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import AppColors from "../../styles/AppColors";
import {
  headerContainer,
  headerSubContainer,
  backIcon,
  titleContainer,
  title,
  collectionContainer,
  collectionIcon,
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newLocation = { ...location };

  const showBackIcon = location.pathname !== "/";

  return (
    <div css={headerContainer}>
      <div css={headerSubContainer}>
        <div css={titleContainer}>
          {showBackIcon && (
            <button
              style={{ all: 'unset' }}
              onClick={() => navigate(-1)}
              data-testid="back-icon"
            >
              <FontAwesomeIcon
                icon={solid("arrow-left")}
                css={backIcon}
              />
            </button>
          )}
          <span css={title}>{newLocation.state?.title ?? "AnimeList"}</span>
        </div>

        {!showBackIcon && (
          <button
            css={collectionContainer}
            onClick={() =>
              navigate("/collections", { state: { title: "Collection List" } })
            }
            data-testid="back-icon"
          >
            <FontAwesomeIcon
              icon={solid("heart")}
              css={collectionIcon}
              size="lg"
              color={AppColors.pink200}
            />
            Collections
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
