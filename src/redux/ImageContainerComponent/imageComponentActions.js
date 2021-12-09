// Action Types
const OPEN_IMAGE = "OPEN_IMAGE";
const DELETE_IMAGE = "DELETE_IMAGE";

// Action Creators
const openImageAction = (readImageFile) => {
  return {
    type: OPEN_IMAGE,
    payload: { readImageFile: readImageFile },
  };
};

const deleteImageAction = () => {
  return {
    type: DELETE_IMAGE,
    payload: "For deleting image.",
  };
};

// Named export of the components
export { OPEN_IMAGE, DELETE_IMAGE, openImageAction, deleteImageAction };
