import { connect } from 'react-redux';

import SearchDetail from './SearchDetail.component';
import { getDetailSearch } from '../../Redux/Actions/SearchDetail/SearchDetail';

const mapStateToProps = state => ({
  dataSearchDetail: state.searchdetail.data,
  isLoading: state.searchdetail.loading,
  refreshing: state.searchdetail.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getDetailSearch: payload => dispatch(getDetailSearch(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDetail);
