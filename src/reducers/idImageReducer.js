import { IMG_ID } from "../actions/imgAction";

const initialState = {
  id: 0,
};

const idImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMG_ID:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
export default idImageReducer;
