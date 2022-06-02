/** @jsxImportSource @emotion/react */

import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Anime } from "../models/anime";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate, useParams } from "react-router-dom";
import { removeFromCollection, updateToCollection } from "../store/actions";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";

const WIDTH = window.innerWidth;

const AnimeCard = ({ data, showDeleteButton }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context.AppContext);
  const params = useParams();

  const imageRef = useRef(null);

  const onDelete=()=>{
    if(window.confirm(`Are you sure want to delete ${data.title.english??data.title.native}?`)){
      if(data.collectionOf?.length===1){
        dispatch(removeFromCollection(data.id))
      } else {
        const updatetedData = state.collections.map((v) => {
          if (v.id === data.id) {
            const collectionOf = data?.collectionOf?.filter((v)=> v!==params.name)
            return { ...data, collectionOf };
          } else {
            return v;
          }
        });
        dispatch(updateToCollection(updatetedData));
      }
    }
  }

  return (
    <div
      css={styles.card}
      onClick={() => navigate(`/anime/${data.id}`, {state: {title: 'Detail Anime'}})}
    >
      <div
        css={styles.imageContainer}
      >
        <img
          ref={imageRef}
          alt={data.title.native}
          src={data.coverImage?.large}
          css={styles.image}
        />
      </div>
      <div
        css={styles.contentContainer}
      >
        <div css={{display: "flex", flexGrow: 0, flexDirection: 'column', whiteSpace: 'initial'}}>
          <span css={{ display: "flex", fontWeight: "bold", wordWrap: 'break-word' }}>
            {data.title.english ?? data.title.native}
          </span>
          <span css={{ fontSize: 12, color: "gray" }}>
            {data.duration} minutes
          </span>
        </div>
        {showDeleteButton && (
          <div
            css={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
          >
            <FontAwesomeIcon
              icon={solid('trash')}
              color={AppColors.gray400}
              size="1x"
              onClick={(e) => {
                e.stopPropagation();
                onDelete()
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

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
  image: {
    objectFit: 'cover',
    verticalAlign: 'text-top',
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    maxWidth: 'inherit',
  }
}

export default AnimeCard;