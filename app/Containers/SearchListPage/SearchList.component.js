import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Loading } from '../../Components/Loading/Loading.component';
import { CardSearchList } from '../../Components/CardSearchList/CardSearchList.component';
import { Routes } from '../../Navigation/Routes';
import { keyExtractor } from '../../Utils/Helper';

class SearchList extends Component {
  componentDidMount() {
    this.getDataSearch();
  }

  getDataSearch = async () => {
    const { getSearchList } = this.props;
    await getSearchList();
  };

  goToDetailpage = dataSearch => {
    const { navigation } = this.props;
    navigation.navigate(Routes.SearchDetail, { dataSearch });
  };

  renderCardContent = ({ item }) => {
    return (
      <CardSearchList
        id={item?.id}
        imageUrl={item?.image_url}
        name={item?.name}
        reviewCount={item?.review_count}
        rating={item?.rating}
        photos={item?.photos}
        price={item?.price}
        onPress={() => this.goToDetailpage(item)}
      />
    );
  };

  render() {
    const { dataSearch, isLoading, refreshing } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
        <ScrollView>
          <FlatList
          data={dataSearch}
          numColumns={2}
          horizontal={false}
          keyExtractor={keyExtractor}
          renderItem={this.renderCardContent}
          refreshing={refreshing}
          onRefresh={this.getDataQuran}
          showsVerticalScrollIndicator={false}
          />
        </ScrollView>
    );
  }
}

export default SearchList;
