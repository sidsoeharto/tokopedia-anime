import { gql, DocumentNode } from "@apollo/client";

export const ANIME_LIST: DocumentNode = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        duration
      }
    }
  }
`;

export const ANIME_DETAIL: DocumentNode = gql`
  query GetAnimeDetail($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      bannerImage
      coverImage {
        large
      }
      duration
      seasonYear
      averageScore
      genres
      description
    }
  }
`;