/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import Context from "../store/Context";
import AnimeCard from "../components/AnimeCard";
import { useParams } from "react-router-dom";

const CollectionDetail = (props) => {
  const [state] = useContext(Context.AppContext);
  const params = useParams();
  return (
    <div>
      {state?.collections
        .filter((el) =>
          el.collectionOf?.includes(params?.name)
        )
        ?.map((el, idx) => {
          return <AnimeCard key={idx} data={el} showDeleteButton />;
        })}
    </div>
  );
};

export default CollectionDetail;