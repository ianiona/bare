import { combineReducers } from 'redux'
import { LOADING_COMPLETED, UPDATE_CONTENT, SET_ERROR, SET_LOADING } from '../actions'


const initialState = {
  currentLanguage: 'fi',
  loading: false,
  contents: {
    'en': null,
    'fi': null,
  },
  contentType: 'content',
  error: false
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, currentLanguage: action.payload }
    case LOADING_COMPLETED:
      return { ...state, loading: false }
    case SET_LOADING:
      return { ...state, loading: true }
    case SET_ERROR:
      return { ...state, loading: action.payload }
    case UPDATE_CONTENT:
      return {
        ...state,
        contents: { ...state.contents, [state.currentLanguage]: action.payload }
      }
    default:
      return state
  }
}

const rootReducer = () => combineReducers({
  appState: appReducer
})

export default rootReducer
