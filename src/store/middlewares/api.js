import axios from 'axios';
import { FETCH_COMPLETED, API_GET_REQUEST, LOADING_COMPLETED, updateContent, SET_LOADING } from '../actions';

const api = ({ dispatch }) => next => action => {

  if (action.type === API_GET_REQUEST) {

    const { url, onSuccess, onError, params } = action.meta

    dispatch({ type: SET_LOADING });

    axios.get(url, { params: params })
      .then(function (response) {
        dispatch({ type: onSuccess, payload: response.data })
      })
      .catch(function () {

        dispatch({ type: onError, payload: 'Error loading data' })
      });

  }

  if (action.type === FETCH_COMPLETED) {
    dispatch(updateContent(action.payload));
    dispatch({ type: LOADING_COMPLETED });
  }
  return next(action)
};

export default api;
