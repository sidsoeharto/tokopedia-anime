/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import {AddCollectionModal, AppButton, CollectionCard, DeleteCollectionModal, EditCollectionModal} from "../components";
import {removeCollection} from "../store/actions";
import Context from "../store/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AppColors from "../styles/AppColors";

const WIDTH = window.innerWidth;

const CollectionList = (props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  const [deleteName, setDeleteName] = useState('');
  const [editData, setEditData] = useState('');

  const confirmDelete = (name) => {
    dispatch(removeCollection(name));

    return setDeleteName('');
  };

  return (
    <div css={styles.mainContainer}>
      <div css={styles.buttonContainer}>
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
        css={styles.grid}
      >
        {state.collectionNames?.map((el, idx) => (
          <CollectionCard 
            key={idx.toString()} 
            data={el} 
            confirmDelete={()=>setDeleteName(el.name)}
            openEdit={()=>setEditData(el)}
          />
        ))}
      </div>
      <AddCollectionModal isOpen={open} onRequestClose={() => setOpen(false)} />
      <DeleteCollectionModal isOpen={!!deleteName} name={deleteName} onRequestClose={() => setDeleteName('')} onDelete={confirmDelete}/>
      <EditCollectionModal 
        isOpen={!!editData}
        onRequestClose={() => setEditData('')}
        data={editData}
      />
    </div>
  );
};

const styles = {
  mainContainer: { padding: 16, minHeight: '85vh' },
  buttonContainer: { justifyContent: "end", display: "flex" },
  grid: {
    display: 'grid',
    gridTemplateColumns: WIDTH > 1024 ? 'repeat(3, minmax(0, 1fr))' : WIDTH > 480 ? 'repeat(2, minmax(0, 1fr))' : 'repeat(1, minmax(0, 1fr))',
    columnGap: '0.125rem',
    zIndex: 2,
  }
}

export default CollectionList;