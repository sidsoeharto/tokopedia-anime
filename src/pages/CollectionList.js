/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import {AddCollectionModal, AppButton, CollectionCard} from "../components";
import {removeCollection} from "../store/actions";
import Context from "../store/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AppColors from "../styles/AppColors";

const CollectionList = (props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);

  const confirmDelete = (name) => {
    if (window.confirm(`Are you sure want to delete ${name}?`)) {
      dispatch(removeCollection(name));
    }
  };
  return (
    <div css={{ padding: 16, minHeight: '85vh' }}>
      <div css={{ justifyContent: "end", display: "flex" }}>
        <AppButton 
          style={{
            padding: '0.5rem 1rem'
          }}
          icon={<FontAwesomeIcon
            icon={solid('plus')}
            color={AppColors.gray100}
            size='1x'
            css={{marginRight: 4}}
          />}
          title="Add a Collection" 
          onClick={() => setOpen(true)} 
        />
      </div>
      <AddCollectionModal isOpen={open} onRequestClose={() => setOpen(false)} />
      {state.collectionNames?.map((el, idx) => (
        <CollectionCard 
          key={idx.toString()} 
          name={el} 
          confirmDelete={()=>confirmDelete(el)} 
        />
      ))}
    </div>
  );
};

export default CollectionList;