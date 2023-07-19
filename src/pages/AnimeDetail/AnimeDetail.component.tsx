/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { ANIME_DETAIL } from "../../queries/anime-query";
import Context from "../../store/Context";
import { Collection } from "../../store/interfaces";
import AppColors from "../../styles/AppColors";
import {
  AddToCollectionModal,
  AnimeInfo,
  Genres,
  Loading,
  CollectionOf
} from "../../components";
import { 
  mainContainer,
  container,
  imageContainer,
  image,
  addButtonIcon,
  AddToButton,
  addToContainer,
  AnimeDescription,
  ContentContainer,
  BannerContainer,
  ShadowBanner,
  SectionContainer,
  AnimeTitle,
  imageContainerInner
} from "./AnimeDetail.styles";

const AnimeDetail: React.FC = () => {
  const [state] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const { loading, data } = useQuery(ANIME_DETAIL, {
    variables: { id: params.id },
  });
  const media = data?.Media;
  const isCollection: Collection | undefined = state.collections?.find(
    (el: Collection) => el?.id === media?.id
  ) as Collection | undefined;

  if (loading) return <Loading />;
  if (!media) return null;

  return (
    <div css={mainContainer}>
      <div css={container}>
        <BannerContainer backgroundImage={(media?.bannerImage)} >
          <ShadowBanner />
        </BannerContainer>
        <SectionContainer>
          <div css={imageContainer}>
            <div css={imageContainerInner}>
              <img
                alt={media?.title?.native}
                src={media?.coverImage?.large}
                css={image}
              />
              <div css={addToContainer}>
                <AddToButton
                  icon={
                    <FontAwesomeIcon
                      icon={solid("plus")}
                      color={AppColors.gray100}
                      size="1x"
                      css={addButtonIcon}
                    />
                  }
                  title="Add to Collection"
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>

          <ContentContainer>
            <div css={{  }}>
              <AnimeTitle css={{ fontWeight: "bold" }}>
                {media.title.english ?? media.title.native}
              </AnimeTitle>
              <Genres genres={media.genres} />
            </div>
            {Boolean(isCollection?.collectionOf) && (
              <CollectionOf collectionOf={isCollection?.collectionOf} />
            )}
            <AnimeInfo data={media} />
            <AnimeDescription dangerouslySetInnerHTML={{ __html: media.description }} />
          </ContentContainer>
        </SectionContainer>
      </div>
      <AddToCollectionModal
        data={{ ...media, collectionOf: isCollection?.collectionOf }}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
      />
    </div>
  );
};

export default AnimeDetail;