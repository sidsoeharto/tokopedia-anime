/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { ANIME_LIST } from "../../queries/anime-query";
import Context from "../../store/Context";
import { saveAnimeList, savePageInfo } from "../../store/actions";
import { usePagination } from "../../hooks/usePagination";
import { AnimeCard, Pagination, Loading } from "../../components";
import { container, grid } from "./AnimeList.styles";

const AnimeList: React.FC = () => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [variables, setVariables] = useState({
    page: 1,
    perPage: 10,
  });
  const { loading, data } = useQuery(ANIME_LIST, { variables });
  const pagination = usePagination({
    currentPage: variables.page,
    totalCount: data?.Page.pageInfo.total,
    siblingCount: 2,
    pageSize: variables.perPage,
  });

  useEffect(() => {
    if (data?.Page) {
      dispatch(saveAnimeList(data.Page.media));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setVariables((prev) => ({ ...prev, page: state.pageInfo?.currentPage }));
  }, [state.pageInfo?.currentPage]);

  const renderPagination = () => (
    <Pagination
      pagination={pagination}
      onClick={(page: number) => {
        dispatch(
          savePageInfo({ 
            currentPage: page,
            total: data?.Page.pageInfo.total
          })
        );
      }}
      currentPage={variables.page}
    />
  );

  if (loading) return <Loading />;
  return (
    <div css={container}>
      {renderPagination()}
      <div css={grid}>
        {state.animeList?.map((el) => {
          return (
            <AnimeCard
              key={el.id}
              data={el}
              showDeleteButton={false}
              showDeletePopup={() => null}
            />
          );
        })}
      </div>
      {renderPagination()}
    </div>
  );
};

export default AnimeList;
