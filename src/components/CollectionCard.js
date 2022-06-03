/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";

const CollectionCard = ({ data, confirmDelete, openEdit }) => {
  const navigate = useNavigate();
  const [state] = useContext(Context.AppContext);

  const getCoverImage = () => {
    const collectionOf = state.collections?.filter((el) =>
      el.collectionOf?.find(e => e.id === data.id)
    );
    if (collectionOf?.length > 0) {
      return (
        <div
          css={styles.imageContainer}
          onClick={() =>
            navigate(`/collections/${data.id}`, { state: { title: data.name } })
          }
        >
          <img
            alt={collectionOf[0].title.native}
            src={collectionOf[0].coverImage?.large}
            css={styles.image}
          />
        </div>
      );
    } else {
      return (
        <div
          css={styles.imagePlaceholderContainer}
          onClick={() =>
            navigate(`/collections/${data.id}`, { state: { title: data.name } })
          }
        >
          <FontAwesomeIcon icon={solid("image")} color="grey" size="4x" css={styles.imagePlaceholder} />
        </div>
      );
    }
  };

  getCoverImage();

  return (
    <div
      css={styles.card}
    >
      {getCoverImage()}
      <div
        css={styles.contentContainer}
      >
        <span
          css={styles.cardTitle}
        >
          {data.name}
        </span>
        <div
          css={styles.iconContainer}
        >
          <FontAwesomeIcon
            icon={solid("trash")}
            color={AppColors.gray400}
            size='1x'
            css={{
              marginBottom: 12,
              cursor: 'pointer',
              fontSize: 20,
            }}
            onClick={(e) => {
              e.stopPropagation();
              confirmDelete();
            }}
          />
          <FontAwesomeIcon
            icon={solid("edit")}
            color={AppColors.green300}
            size='1x'
            css={{
              cursor: 'pointer',
              fontSize: 20,
            }}
            onClick={(e) => {
              e.stopPropagation();
              openEdit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin: '1rem auto',
    borderRadius: 20,
    width: '200px',
    display: "grid",
    gridTemplateRows: "min-content auto",
  },
  cardTitle: {
    display: "block",
    fontSize: 20,
    flex: 1,
    fontWeight: "bold",
    marginTop: 4,
  },
  imageContainer: {
    boxShadow: '0 14px 30px rgba(0, 0, 0,.15),0 4px 4px rgba(0, 0, 0,.05)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    width: "100%",
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 16,
    zIndex: 2,
  },
  imagePlaceholderContainer: {
    boxShadow: '0 14px 30px rgba(0, 0, 0,.15),0 4px 4px rgba(0, 0, 0,.05)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "200px",
    height: '320px',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 16,
    zIndex: 2,
  },
  image: {
    objectFit: 'cover',
    verticalAlign: 'text-top',
  },
  imagePlaceholder: {
    objectFit: 'cover',
    verticalAlign: 'text-top',
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    maxWidth: 'inherit',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default CollectionCard;