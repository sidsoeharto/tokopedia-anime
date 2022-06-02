/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";

const CollectionCard = ({ name, confirmDelete }) => {
  const navigate = useNavigate();
  const [state] = useContext(Context.AppContext);

  const getCoverImage = () => {
    const collectionOf = state.collections.filter((el) =>
      el.collectionOf?.includes(name)
    );
    if (collectionOf?.length > 0) {
      return (
        <div
          css={styles.imageContainer}
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
      onClick={() =>
        navigate(`/collections/${name}`, { state: { title: name } })
      }
    >
      {getCoverImage()}
      <div
        css={styles.contentContainer}
      >
        <span
          css={{
            display: "block",
            fontSize: 20,
            flex: 1,
            fontWeight: "bold",
            marginTop: 4,
          }}
        >
          {name}
        </span>
        <FontAwesomeIcon
          icon={solid("trash")}
          color="grey"
          size='1x'
          css={{
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.stopPropagation();
            confirmDelete();
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin: '1rem auto',
    borderRadius: 20,
    cursor: "pointer",
    width: '200px',
    display: "grid",
    gridTemplateRows: "min-content auto",
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
  }
}

export default CollectionCard;