import {
  REQ_SEARCH_DETAIL,
  REQ_SEARCH_DETAIL_SUCCESS,
  REQ_SEARCH_DETAIL_FAILURE,
} from '../Types';
import axios from 'axios';
import { searchDetail } from '../../../Utils/EndPoints';

const token = 'j9x4TFim9t0rIKm9Yzh7QkQuY3f0SB39x5cip1yI1xRJ8dO1qwblZSsPFHiT7bQs4O6BYODSHGUJEZHzedYNXJoSKh7KMV4ely8vzBsnU6sR6_dUporjxMgthoC4XXYx'
const getDetailSearch = payload => async dispatch => {
  const { idSearch } = payload;
  console.log('idSearch: '+idSearch)
  dispatch({ type: REQ_SEARCH_DETAIL });
  try {
    const response = await axios.get(searchDetail(idSearch),{
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    console.log('res searchDetail: ' + JSON.stringify(response.data.id))
    if (response.data.id) {
      dispatch({
        type: REQ_SEARCH_DETAIL_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: REQ_SEARCH_DETAIL_FAILURE,
        error: 'Request Detail Search gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_SEARCH_DETAIL_FAILURE,
      error: 'Request Detail Search proses gagal',
    });
  }
};

export { getDetailSearch };
