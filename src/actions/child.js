import axios from 'axios';
import nprogress from 'nprogress';

export const GET_CHILDREN_REQUEST = 'GET_CHILDREN_REQUEST';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_CHILDREN_FAILURE = 'GET_CHILDREN_FAILURE';

export const getChildren = () => dispatch => {
  dispatch({ type: GET_CHILDREN_REQUEST });

  nprogress.start();

  return axios
    .get(`/apis/child`)
    .then(res => {
      nprogress.done();

      return dispatch({
        type: GET_CHILDREN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      nprogress.done();
      nprogress.remove();

      return dispatch({
        type: GET_CHILDREN_FAILURE,
        payload: err,
        error: true,
      });
    });
};

export const CREATE_CHILDREN_REQUEST = 'CREATE_CHILDREN_REQUEST';
export const CREATE_CHILDREN_SUCCESS = 'CREATE_CHILDREN_SUCCESS';
export const CREATE_CHILDREN_FAILURE = 'CREATE_CHILDREN_FAILURE';

export const createChildren = children => dispatch => {
  dispatch({ type: CREATE_CHILDREN_REQUEST });

  nprogress.start();

  return axios
    .post(`/apis/child`, { children })
    .then(res => {
      nprogress.done();

      return dispatch({
        type: CREATE_CHILDREN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      nprogress.done();
      nprogress.remove();

      return dispatch({
        type: CREATE_CHILDREN_FAILURE,
        payload: err,
        error: true,
      });
    });
};

export const EDIT_CHILD_REQUEST = 'EDIT_CHILD_REQUEST';
export const EDIT_CHILD_SUCCESS = 'EDIT_CHILD_SUCCESS';
export const EDIT_CHILD_FAILURE = 'EDIT_CHILD_FAILURE';

export const editChild = (childId, editedChild) => dispatch => {
  nprogress.start();

  return axios
    .put(`/apis/child?childId=${childId}`, { editedChild })
    .then(res => {
      nprogress.done();

      return dispatch({
        type: EDIT_CHILD_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      nprogress.done();
      nprogress.remove();

      return dispatch({
        type: EDIT_CHILD_FAILURE,
        payload: err,
        error: true,
      });
    });
};

export const DELETE_CHILD_REQUEST = 'DELETE_CHILD_REQUEST';
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS';
export const DELETE_CHILD_FAILURE = 'DELETE_CHILD_FAILURE';

export const deleteChild = childId => dispatch => {
  nprogress.start();

  return axios
    .delete(`/apis/child?childId=${childId}`)
    .then(res => {
      nprogress.done();

      return dispatch({
        type: DELETE_CHILD_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      nprogress.done();
      nprogress.remove();

      return dispatch({
        type: DELETE_CHILD_FAILURE,
        payload: err,
        error: true,
      });
    });
};
