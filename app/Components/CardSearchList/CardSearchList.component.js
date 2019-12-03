import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Styles } from './CardSearchList.style';

const CardSearchList = props => {
  const {
    onPress,
    imageUrl,
    name,
    rating,
    reviewCount,
  } = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={Styles.CardStyle}>
        <View>
          <Image style={Styles.contentImage} source={{ uri: imageUrl }} />
        </View>
        <View>
          <Text style={{maxWidth:150, fontWeight:'bold'}} numberOfLines={1}>{name} </Text>
          <Text>{reviewCount} Reviews </Text>
          <Text>{rating} Stars </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { CardSearchList };
