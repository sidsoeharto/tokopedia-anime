/** @jsxImportSource @emotion/react */

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  collectionOfStyles,
  labelStyles,
  CollectionItem
} from './CollectionOf.styles'
import { CollectionNames } from "../../store/interfaces";

interface CollectionOfProps {
  collectionOf: (CollectionNames)[] | undefined;
}

const CollectionOf: React.FC<CollectionOfProps> = ({ collectionOf }) => {
  const navigate = useNavigate();

  const navigateToCollections = (id: string, name: string) => (
    navigate(`/collections/${id}`, { 
      state: { 
        title: name 
      } 
    })
  )

  return (
    <div css={collectionOfStyles}>
      <h4 css={labelStyles}>Collection of:</h4>
      {collectionOf?.map((el, idx) => {
        return (
          <CollectionItem
            role="listitem"
            key={idx.toString()}
            onClick={() => navigateToCollections(el.id, el.name)}
          >
            {el?.name}
          </CollectionItem>
        );
      })}
    </div>
  );
};

export default CollectionOf;