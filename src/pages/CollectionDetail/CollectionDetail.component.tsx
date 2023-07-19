/** @jsxImportSource @emotion/react */

import { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Context from "../../store/Context";
import { Collection, CollectionNames } from "../../store/interfaces";
import { EditCollectionModal, AnimeCard, DeleteConfirmModal } from "../../components";
import AppColors from "../../styles/AppColors";
import { mainContainer, buttonContainer, EditButton, buttonIcon, grid } from "./CollectionDetail.styles";
import { removeFromCollection, updateToCollection } from "../../store/actions";

const CollectionDetail = (): JSX.Element => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [editData] = useState<CollectionNames | undefined>(
    state?.collectionNames.find((e) => e.id === params.id)
  );
  const [deleteData, setDeleteData] = useState<Collection | undefined>(undefined);

  useEffect(() => {
    navigate(location.pathname, {
      replace: true,
      state: { title: state?.collectionNames.find((e) => e.id === params.id)?.name },
    });
  }, [
    location.pathname,
    navigate,
    state?.collectionNames,
    params.id
  ]);

  const handleOpen = () => setOpen(!open);
  const handleShowDelete = (collection:Collection | undefined) => deleteData ? setDeleteData(undefined) : setDeleteData(collection);

  const onDelete = (data:any) => {
    if (data.collectionOf?.length === 1) {
      dispatch(removeFromCollection(data.id));
    } else {
      const updatedData = state.collections.map((el) => {
        if (el.id === data.id) {
          const collectionOf = data?.collectionOf?.filter((el:CollectionNames) => el.id !== params.id);
          const title = { 
            ...data.title,
            english: data.title?.english ?? '',
            native: data.title?.native ?? '' 
          };
          console.log({ ...data, collectionOf, title }, 'collectionOf else');
          return { ...data, collectionOf, title };
        } else {
          return el;
        }
      });
      dispatch(updateToCollection(updatedData));
    }
    handleShowDelete(deleteData);
  };

  return (
    <div css={mainContainer}>
      <div css={buttonContainer}>
        <EditButton
          title={'Edit Collection'}
          icon={
            <FontAwesomeIcon
              icon={solid("edit")}
              css={buttonIcon}
              size="1x"
              color={AppColors.gray100}
            />
          }
          onClick={handleOpen}
        />
      </div>
      <div css={grid}>
        {
          state.collections
            .filter((collection) => collection.collectionOf?.find((e) => e.id === params.id))
            .map((collection, idx) => {
              return (
                <AnimeCard
                  key={idx}
                  data={collection}
                  showDeleteButton
                  showDeletePopup={() => handleShowDelete(collection)}
                />
              );
            })
        }
      </div>
      <EditCollectionModal
        isOpen={open}
        onRequestClose={handleOpen} 
        data={editData}
      />
      <DeleteConfirmModal
        isOpen={!!deleteData}
        name={deleteData?.title?.english}
        onRequestClose={() => handleShowDelete(deleteData)}
        onDelete={() => onDelete(deleteData)}
      />
    </div>
  );
};

export default CollectionDetail;
