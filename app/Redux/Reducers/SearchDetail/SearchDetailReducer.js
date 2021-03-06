import {
  REQ_SEARCH_DETAIL,
  REQ_SEARCH_DETAIL_SUCCESS,
  REQ_SEARCH_DETAIL_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: '',
  loading: false,
  refreshing: false,
};

const SearchDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQ_SEARCH_DETAIL:
      return {
        ...state,
        actionStatus: REQ_SEARCH_DETAIL,
        error: '',
        loading: true,
        refreshing: true,
      };
    case REQ_SEARCH_DETAIL_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_SEARCH_DETAIL_SUCCESS,
        data: action.payload,
        loading: false,
        refreshing: false,
      };
    case REQ_SEARCH_DETAIL_FAILURE:
      return {
        ...state,
        actionStatus: REQ_SEARCH_DETAIL_FAILURE,
        error: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return { ...state };
  }
};

export { SearchDetail };
