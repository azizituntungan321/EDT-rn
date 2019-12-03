import { connect } from 'react-redux';

import SearchList from './SearchList.component';
import { getSearchList } from '../../Redux/Actions/SearchList/SearchList';

const mapStateToProps = state => ({
  dataSearch: state.searchList.data,
  isLoading: state.searchList.loading,
  refreshing: state.searchList.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getSearchList: () => dispatch(getSearchList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
