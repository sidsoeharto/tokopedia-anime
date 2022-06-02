/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ANIME_LIST } from "../queries/anime-query";
import Context from "../store/Context";
import { saveAnimeList, savePageInfo } from "../store/actions";
import AnimeCard from "../components/AnimeCard";
import { usePagination } from "../hooks/usePagination";
import {Pagination, Loading} from "../components";

const WIDTH = window.innerWidth;

const AnimeList = (props) => {
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
    setVariables((prev) => ({ ...prev, page: state.pageInfo?.currentPage }))
  }, [state.pageInfo?.currentPage]);

  if (loading) return <Loading />;

  return (
    <div>
      <Pagination
        pagination={pagination}
        onClick={(page) => {
          dispatch(savePageInfo({currentPage: page}))
        }}
        currentPage={variables.page}
        />
        <div
          css={styles.grid}
        >
          {state.animeList?.map((el, idx) => {
            return <AnimeCard key={idx} data={el} />;
          })}
        </div>
      <Pagination
        pagination={pagination}
        onClick={(page) => {
          dispatch(savePageInfo({currentPage: page}))
        }}
        currentPage={variables.page}
      />
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: WIDTH > 1024 ? 'repeat(3, minmax(0, 1fr))' : WIDTH > 480 ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
    columnGap: '0.125rem',
  }
}

export default AnimeList;