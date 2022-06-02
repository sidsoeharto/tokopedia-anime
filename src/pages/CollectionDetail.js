/** @jsxImportSource @emotion/react */

import React, { useState, useContext, useEffect } from "react";
import Context from "../store/Context";
import AnimeCard from "../components/AnimeCard";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditCollectionModal } from "../components";
import AppColors from "../styles/AppColors";

const WIDTH = window.innerWidth;

const CollectionDetail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [editData] = useState(state?.collectionNames.find(e => e.id === params.id))

  useEffect(() => {
    navigate(location.pathname, { 
      replace: true, 
      state: { title: state?.collectionNames.find(e => e.id === params.id).name } 
    });
  }, [location.pathname, navigate, state?.collectionNames, params.id]);

  return (
    <div css={styles.mainContainer}>
      <div css={styles.buttonContainer}>
        <button
          css={styles.button}
          onClick={() => setOpen(true)} 
        >
          <FontAwesomeIcon
            icon={solid("edit")}
            css={styles.buttonIcon}
            size="1x"
            color={AppColors.gray100}
          />
          <span 
            css={{marginTop: 3}}
          >
            Edit Collection
          </span>
        </button>
      </div>
      <div
        css={styles.grid}
      >
        {state?.collections
          .filter((el) =>
            el.collectionOf?.find(e => e.id === params.id)
          )
          ?.map((el, idx) => {
            return <AnimeCard key={idx} data={el} showDeleteButton />;
          })}
      </div>
      <EditCollectionModal 
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        data={editData}
      />
    </div>
  );
};

const styles = {
  mainContainer: { padding: 16, minHeight: '85vh' },
  buttonContainer: { justifyContent: "end", display: "flex" },
  button: {
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
  },
  buttonIcon: {  
    marginRight: 8, 
    display: "inline-flex",
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: WIDTH > 1024 ? 'repeat(3, minmax(0, 1fr))' : WIDTH > 480 ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
    columnGap: '0.125rem',
  }
}

export default CollectionDetail;