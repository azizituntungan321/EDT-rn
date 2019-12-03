import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Themes/Colors';
import { Styles } from './AppNavigator.style';
import { fromRight } from '../Utils/Transition';
import SearchList from '../Containers/SearchListPage/SearchList.container';
import SearchDetail from '../Containers/SearchDetailPage/SearchDetail.container';

const AppStack = createStackNavigator(
  {
    SearchList: {
      screen: SearchList,
      navigationOptions: {
        headerLeft: (
          <View style={Styles.headerTitleText}>
            <TextInput textContentType='name' style={Styles.headerTextInput} placeholder='Search' placeholderTextColor={Colors.primary} placeholderStyle={{marginLeft: 22}} />
            <Icon name="search" size={20} color={Colors.white} style={Styles.headerIcon} />
          </View>
        ),
      },
    },
    SearchDetail: {
      screen: SearchDetail,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primary,
          elevation: 0,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    transitionConfig: () => fromRight(600),
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
