import {
  REQ_SEARCH_LIST,
  REQ_SEARCH_LIST_SUCCESS,
  REQ_SEARCH_LIST_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: '',
  loading: false,
  refreshing: false,
};

const SearchList = (state = initialState, action) => {
  switch (action.type) {
    case REQ_SEARCH_LIST:
      return {
        ...state,
        actionStatus: REQ_SEARCH_LIST,
        error: '',
        loading: true,
        refreshing: true,
      };
    case REQ_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_SEARCH_LIST_SUCCESS,
        data: action.payload,
        loading: false,
        refreshing: false,
      };
    case REQ_SEARCH_LIST_FAILURE:
      return {
        ...state,
        actionStatus: REQ_SEARCH_LIST_FAILURE,
        error: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return { ...state };
  }
};

export { SearchList };
