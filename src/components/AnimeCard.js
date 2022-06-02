/** @jsxImportSource @emotion/react */

import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate, useParams } from "react-router-dom";
import { removeFromCollection, updateToCollection } from "../store/actions";
import Context from "../store/Context";
import AppColors from "../styles/AppColors";

const AnimeCard = ({ data, showDeleteButton }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context.AppContext);
  const [deleteName, setDeleteName] = useState('');
  const params = useParams();

  const imageRef = useRef(null);

  const onDelete=()=>{
    // if(window.confirm(`Are you sure want to delete ${data.title.english??data.title.native}?`)){
      if(data.collectionOf?.length===1){
        dispatch(removeFromCollection(data.id))
      } else {
        const updatedData = state.collections.map((el) => {
          if (el.id === data.id) {
            const collectionOf = data?.collectionOf?.filter((el)=> el.name!==params.name)
            return { ...data, collectionOf };
          } else {
            return el;
          }
        });
        dispatch(updateToCollection(updatedData));
      }
    // }
  }

  return (
    <div
      css={styles.card}
    >
      <div
        css={styles.imageContainer}
        onClick={() => navigate(`/anime/${data.id}`, {state: {title: 'Detail Anime'}})}
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
        <div css={styles.contentBox}>
          <span css={styles.title}>
            {data.title.english ?? data.title.native}
          </span>
          <span css={styles.duration}>
            {data.duration} minutes
          </span>
        </div>
        {showDeleteButton && (
          <div
            css={styles.deleteContainer}
          >
            <FontAwesomeIcon
              icon={solid('trash')}
              color={AppColors.gray400}
              size="1x"
              onClick={(e) => {
                e.stopPropagation();
                setDeleteName(data.title.english??data.title.native)
              }}
            />
          </div>
        )}
      </div>
      <DeleteConfirmModal 
        isOpen={!!deleteName} 
        name={deleteName} 
        onRequestClose={() => setDeleteName('')} 
        onDelete={onDelete}
      />
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
  },
  contentBox: {display: "flex", flexGrow: 0, flexDirection: 'column', whiteSpace: 'initial', paddingRight: 12},
  title: { display: "flex", fontWeight: "bold", wordWrap: 'break-word' },
  duration: { fontSize: 12, color: "gray" },
  deleteContainer: {display: "flex", justifyContent: 'center', alignItems: 'center'}
}

export default AnimeCard;