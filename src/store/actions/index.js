export const API_GET_REQUEST = "[api] GET REQUEST";
export const LOADING_COMPLETED = "[api] Loading Complete";
export const SET_LOADING = "[api] Loading Ongoing";
export const FETCH_COMPLETED = "[api] Fetch Complete";
export const UPDATE_CONTENT = "[content] Update Content";
export const SET_ERROR = "[state] Error";

//apiGetRequest is an action that triggers the axios get request

export const apiGetRequest = (payload) => ({
  type: API_GET_REQUEST,
  meta: { url: payload.url, params: payload.params, onSuccess: FETCH_COMPLETED, onError: LOADING_COMPLETED }
});

export const updateContent = (payload) => ({
  type: UPDATE_CONTENT,
  payload: payload
})

export const updateLanguage = (payload) => ({
  type: 'CHANGE_LANGUAGE',
  payload: payload
})

export const fetchContent = () => { apiGetRequest(); }
