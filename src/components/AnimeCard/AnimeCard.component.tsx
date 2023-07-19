/** @jsxImportSource @emotion/react */

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

import { Anime } from "../../store/interfaces";
import AppColors from "../../styles/AppColors";
import {
  card,
  imageContainer,
  image,
  contentContainer,
  contentBox,
  title,
  duration,
  deleteContainer,
  DeleteButton
} from "./AnimeCard.styles";

interface AnimeCardProps {
  data: Anime;
  showDeleteButton: boolean;
  showDeletePopup: () => void;
}

const AnimeCard: React.FC<AnimeCardProps> = (props) => {
  const { data, showDeleteButton, showDeletePopup } = props;
  const animeTitle = data.title?.english ?? data.title?.native;
  const navigate = useNavigate();

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div css={card}>
      <div
        css={imageContainer}
        onClick={() => navigate(`/anime/${data.id}`, {
          state: { 
            title: 'Anime Detail' 
          } 
        })}
      >
        <img
          ref={imageRef}
          alt={data.title?.native}
          src={data.coverImage?.large}
          css={image}
        />
      </div>
      <div css={contentContainer}>
        <div css={contentBox}>
          <span css={title}>
            {animeTitle}
          </span>
          <span css={duration}>
            {data.duration} minutes
          </span>
        </div>
        {showDeleteButton && (
          <div css={deleteContainer}>
            <DeleteButton
              title='Delete'
              icon={
                <FontAwesomeIcon
                  icon={solid('trash')}
                  color={AppColors.gray200}
                  size="1x"
                  style={{
                    marginRight: '6px'
                  }}
                />
              }
              onClick={showDeletePopup}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeCard;
