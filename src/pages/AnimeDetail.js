/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ANIME_DETAIL } from "../queries/anime-query";
import {
  // AddToCollectionModal, 
  AnimeInfo, 
  AppButton, 
  CollectionOf, 
  Genres, 
  Loading
} from "../components";
import Context from "../store/Context";

const WIDTH = window.innerWidth;

const AnimeDetail = (props) => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [state] = useContext(Context.AppContext);
  const { loading, data } = useQuery(ANIME_DETAIL, {
    variables: { id: params.id },
  });
  const media= data?.Media;
  const isCollection = state.collections?.find((el) => el?.id === media?.id);

  if (loading) return <Loading />;

  return (
    <div>
      <div css={{ 
        display: 'flex',
        flexDirection: WIDTH > 480 ? 'row' : 'column', 
        padding: 16 
      }}>
        <img
          alt={media.title.native}
          src={media.coverImage?.large}
          css={{ width: "100%", borderRadius: 16, margin: 32 }}
        />
        <div
          css ={{
            display: 'flex',
            flexDirection: 'column',
            padding: 16,
          }}
        >
          <div css={{ display: "flex" }}>
            <div css={{ flex: 1 }}>
              <p css={{ fontWeight: "bold" }}>
                {media.title.english ?? media.title.native}
              </p>
              <Genres genres={media.genres} />
            </div>
          </div>
          {Boolean(isCollection?.collectionOf) && (
            <CollectionOf collectionOf={isCollection.collectionOf} />
          )}
          <AnimeInfo data={media} />
          <div dangerouslySetInnerHTML={{ __html: media.description }} />
          <div css={{ marginTop: 16 }}>
            <AppButton
              title="Add to collection"
              style={{ width: "100%" }}
              onClick={() => setOpen(true)}
            />
            <AppButton
              title="Remove from collection"
              style={{ width: "100%", backgroundColor: "gray" }}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        
      </div>
      {/* <AddToCollectionModal
        data={{ ...media, collectionOf: isCollection?.collectionOf }}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
      /> */}
    </div>
  );
};

export default AnimeDetail;