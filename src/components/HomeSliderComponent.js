/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import HandlePressable from './HandlePressable';
import FastImage from 'react-native-fast-image';

class HomeSliderComponent extends React.PureComponent {
  
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    return (
      <HandlePressable
      onPress={() => {
        this.props.navigation.push('Details', {
          item: this.props.item,
          detailsData: this.props.propsdata,
          index: this.props.index,  // Ensure this index matches the article to be displayed
        });
      }}>
        <View style={{position: 'relative', marginRight: 10}}>
          <FastImage
            source={imageUrl}
            style={commonstyles.slidercard}
            resizeMode="cover"
          />
          <View style={commonstyles.sliderGradient}>
            <Text numberOfLines={2} style={commonstyles.slidertext}>
              {decode(this.props.item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </HandlePressable>
    );
  }
}
export default HomeSliderComponent;
