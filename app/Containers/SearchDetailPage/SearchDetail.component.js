import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import get from 'lodash/get';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Loading } from '../../Components/Loading/Loading.component';
import { Styles } from './SearchDetail.style';
import { Colors } from '../../Themes/Colors';
import { SliderBox } from 'react-native-image-slider-box';
 
class SearchDetail extends Component {
  static navigationOptions = ({
    navigation: {
      state: {
        params: { dataSearch },
      },
    },
  }) => {
    const name = dataSearch.name;
    return {
      headerTitle: (
        <View>
          <Text style={Styles.headerTitle}>
            {name}
          </Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    this.renderDetailSearch();
  }

  renderDetailSearch = async () => {
    const { getDetailSearch, navigation } = this.props;
    const idSearch = get(navigation, 'state.params.dataSearch.id', '');

    const payload = {
      idSearch
    };
    console.log('id: ' + idSearch)
    await getDetailSearch(payload);
  };

  render() {
    const { dataSearchDetail, isLoading } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
      <View>
        <View>
          <SliderBox images={dataSearchDetail.photos === undefined ? setTimeout(()=>{},6000) : dataSearchDetail.photos} />
        </View>
        <View style={{margin:20, alignItems:'center'}}>
          <View style={{borderWidth:1, minWidth:'100%',minHeight:'18%', alignItems:'center'}}>
            <Text style={{fontSize:30,marginBottom:-5}}>{dataSearchDetail.review_count}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={{borderWidth:1, minWidth:'100%', alignItems:'center',borderTopWidth:0, flexDirection:'row'}}>
            <View style={{minWidth:'50%', alignItems:'center', borderRightWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text>{dataSearchDetail.rating}</Text>
                <Icon name="star" size={16} />
              </View>
            </View>
            <View style={{minWidth:'50%', alignItems:'center'}}>
              <Text>{dataSearchDetail.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchDetail;
