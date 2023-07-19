/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import Context from "../../store/Context";
import { Collection } from "../../store/interfaces";
import AppColors from "../../styles/AppColors";
import {
  ButtonsContainer,
  card,
  cardTitle,
  contentContainer,
  contentBox,
  DeleteButton,
  EditButton,
  image,
  imageContainer
} from "./CollectionCard.styles";

interface CollectionCardProps {
  data: {
    id: string;
    name: string;
  };
  confirmDelete: () => void;
  openEdit: () => void;
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
  const { data, confirmDelete, openEdit } = props;
  const [state] = useContext(Context.AppContext);
  const navigate = useNavigate();

  const navigateToDetail = () => (
    navigate(`/collections/${data.id}`, {
      state: {
        title: data.name
      }
    })
  ) 

  const getCoverImage = () => {
    const collectionOf:Collection[] = state.collections?.filter((el) =>
      el.collectionOf?.find((e) => e.id === data.id)
    );
    if (collectionOf?.length > 0) {
      return (
        <img
          alt={collectionOf[0]?.title?.native}
          src={collectionOf[0]?.coverImage?.large}
          css={image}
        />
      );
    }
    return (
      <FontAwesomeIcon
        icon={solid("image")}
        color="grey"
        css={image}
      />
    );
  };

  return (
    <div css={card}>
      <div
        css={imageContainer}
        onClick={navigateToDetail}
      >
        {getCoverImage()}
      </div>
      <div css={contentContainer}>
        <div css={contentBox}>
          <span css={cardTitle}>
            {data.name}
          </span>
        </div>
        <ButtonsContainer>
          <DeleteButton
            title="Delete"
            icon={
              <FontAwesomeIcon
                icon={solid("trash")}
                color={AppColors.gray400}
                size="1x"
                style={{ marginRight: '4px' }}
              />
            }
            onClick={confirmDelete}
          />
          <EditButton
            title="Edit"
            icon={
              <FontAwesomeIcon
                icon={solid("edit")}
                color={AppColors.green100}
                size="1x"
                style={{ marginRight: '4px' }}
              />
            }
            onClick={openEdit}
          />
        </ButtonsContainer>
      </div>
    </div>
  );
};

export default CollectionCard;
