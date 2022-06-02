/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import {AddCollectionModal, AppButton, CollectionCard, DeleteCollectionModal} from "../components";
import {removeCollection} from "../store/actions";
import Context from "../store/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AppColors from "../styles/AppColors";

const WIDTH = window.innerWidth;

const CollectionList = (props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  // const [openDelete, setOpenDelete] = useState(false);
  const [deleteName, setDeleteName] = useState('');

  const confirmDelete = (name) => {
    dispatch(removeCollection(name));

    return setDeleteName('');
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
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: WIDTH > 1024 ? 'repeat(3, minmax(0, 1fr))' : WIDTH > 480 ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
          columnGap: '0.125rem',
          zIndex: 2,
        }}
      >
        {state.collectionNames?.map((el, idx) => (
          <CollectionCard 
            key={idx.toString()} 
            name={el} 
            confirmDelete={()=>setDeleteName(el)} 
          />
        ))}
      </div>
      <AddCollectionModal isOpen={open} onRequestClose={() => setOpen(false)} />
      <DeleteCollectionModal isOpen={!!deleteName} name={deleteName} onRequestClose={() => setDeleteName('')} onDelete={confirmDelete}/>
    </div>
  );
};

export default CollectionList;