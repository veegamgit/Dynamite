/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

class DetailsComponentOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    return (
      <View style={{marginRight: 12}}>
        <HandlePressable
          onPress={() => {
            this.props?.navigation.push('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.DetailsCompOneView}>
            <FastImage
              source={imageUrl}
              style={commonstyles.HomeVideosliderImg}
              resizeMode="cover"
            />
            <Text numberOfLines={2} style={commonstyles.homeFoursliderText}>
              {decode(this.props?.item?.title?.rendered)}
            </Text>
          </View>
        </HandlePressable>
      </View>
    );
  }
}
export default DetailsComponentOne;
