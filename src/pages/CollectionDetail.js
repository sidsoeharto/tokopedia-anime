/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import Context from "../store/Context";
import AnimeCard from "../components/AnimeCard";
import { useParams } from "react-router-dom";

const WIDTH = window.innerWidth;

const CollectionDetail = (props) => {
  const [state] = useContext(Context.AppContext);
  const params = useParams();
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: WIDTH > 1024 ? 'repeat(3, minmax(0, 1fr))' : WIDTH > 480 ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
        columnGap: '0.125rem',
      }}
    >
      {state?.collections
        .filter((el) =>
          el.collectionOf?.filter(e => e.name === params.name)
        )
        ?.map((el, idx) => {
          return <AnimeCard key={idx} data={el} showDeleteButton />;
        })}
    </div>
  );
};

export default CollectionDetail;