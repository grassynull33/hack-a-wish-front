import update from 'immutability-helper';

import {
  GET_CHILDREN_SUCCESS,
  // CREATE_CHILDREN_SUCCESS,
  EDIT_CHILD_SUCCESS,
  DELETE_CHILD_SUCCESS,
} from '../actions/child';

const initialState = {
  child: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHILDREN_SUCCESS: {
      const { payload } = action;

      return update(state, {
        child: { $set: payload },
      });
    }

    // case CREATE_CHILDREN_SUCCESS: {
    //   const { payload } = action;

    //   return update(state, {
    //     child: { $push: [payload] },
    //   });
    // }

    case EDIT_CHILD_SUCCESS: {
      const { payload } = action;

      const { _id: childIdToEdit } = payload;

      const toEditIndex = state.child.findIndex(w => w._id === childIdToEdit);

      if (toEditIndex === -1) {
        return state;
      }

      return update(state, {
        child: {
          [toEditIndex]: { $set: payload },
        },
      });
    }

    case DELETE_CHILD_SUCCESS: {
      const { payload } = action;

      const { _id: childIdToDelete } = payload;

      const toDeleteIndex = state.child.findIndex(
        w => w._id === childIdToDelete,
      );

      if (toDeleteIndex === -1) {
        return state;
      }

      return update(state, {
        child: {
          $splice: [[toDeleteIndex, 1]],
        },
      });
    }

    default:
      return state;
  }
};
