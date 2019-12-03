import {
  REQ_SEARCH_LIST,
  REQ_SEARCH_LIST_SUCCESS,
  REQ_SEARCH_LIST_FAILURE,
} from '../Types';
import axios from 'axios';
import { searchList } from '../../../Utils/EndPoints';

const token = 'j9x4TFim9t0rIKm9Yzh7QkQuY3f0SB39x5cip1yI1xRJ8dO1qwblZSsPFHiT7bQs4O6BYODSHGUJEZHzedYNXJoSKh7KMV4ely8vzBsnU6sR6_dUporjxMgthoC4XXYx'
const getSearchList = () => async dispatch => {
  dispatch({ type: REQ_SEARCH_LIST });
  try {
    const response = await axios.get(searchList('food'),{
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    if (response.data.businesses) {
      dispatch({
        type: REQ_SEARCH_LIST_SUCCESS,
        payload: response.data.businesses,
      });
    } else {
      dispatch({
        type: REQ_SEARCH_LIST_FAILURE,
        error: 'Request Search gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_SEARCH_LIST_FAILURE,
      error: 'Request proses gagal',
    });
  }
};

export { getSearchList };
