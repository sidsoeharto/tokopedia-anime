/** @jsxImportSource @emotion/react */

import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Context from "../../store/Context";
import { removeCollection } from "../../store/actions";
import AppColors from "../../styles/AppColors";
import { 
  AddCollectionModal,
  CollectionCard,
  DeleteCollectionModal,
  EditCollectionModal
} from "../../components";
import {
  mainContainer,
  buttonContainer,
  AddButton,
  addButtonIcon,
  grid
} from "./CollectionList.styles";

const CollectionList = () => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  const [deleteName, setDeleteName] = useState("");
  const [editData, setEditData] = useState<any>(null);

  const confirmDelete = (name: string) => {
    dispatch(removeCollection(name));
    setDeleteName("");
  };

  const handleCloseDelete = () => setDeleteName("");
  const handleCloseEdit = () => setEditData(null);

  return (
    <div css={mainContainer}>
      <div css={buttonContainer}>
        <AddButton
          icon={
            <FontAwesomeIcon
              icon={solid("plus")}
              color={AppColors.gray100}
              size="1x"
              css={addButtonIcon}
            />
          }
          title="Add a Collection"
          onClick={() => setOpen(true)}
        />
      </div>
      <div css={grid}>
        {state.collectionNames?.map((collectionName: any, idx: number) => (
          <CollectionCard
            key={idx}
            data={collectionName}
            confirmDelete={() => setDeleteName(collectionName.name)}
            openEdit={() => setEditData(collectionName)}
          />
        ))}
      </div>
      <AddCollectionModal isOpen={open} onRequestClose={() => setOpen(false)} />
      <DeleteCollectionModal
        isOpen={!!deleteName}
        name={deleteName}
        onRequestClose={handleCloseDelete}
        onDelete={confirmDelete}
      />
      <EditCollectionModal
        isOpen={!!editData}
        onRequestClose={handleCloseEdit}
        data={editData}
      />
    </div>
  );
};

export default CollectionList;
