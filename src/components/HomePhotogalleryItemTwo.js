/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {commonstyles, whitecolor} from '../styles/commonstyles';
import HandlePressable from './HandlePressable';

class HomePhotogalleryItemTwo extends React.PureComponent {
  getPhotoCount = content => {
    const regex = /<dl class='gallery-item'>/g;
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  };

  render() {
    let decode = require('html-entities-decoder');

    const defaultImage = require('../Assets/Images/noimage.png');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;

    const photoCount = this.getPhotoCount(this.props?.item?.content?.rendered);

    return (
      <View style={{marginRight: 12, width: 220}}>
        <HandlePressable
          color="rgba(0,0,0,0.15)"
          onPress={() => {
            this.props.navigation.push('PhotoArticle', {
              item: this.props.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={{marginBottom: 12}}>
            <View style={{position: 'relative'}}>
              <Image
                source={imageUrl}
                style={commonstyles.HomephotosliderImg}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 6,
                  right: 12,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Image
                      source={require('../Assets/Images/gallery.png')}
                      style={{height: 15, width: 15, tintColor: whitecolor}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: whitecolor,
                        fontSize: 14,
                        left: 4,
                      }}>
                      {`${photoCount}`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text numberOfLines={2} style={commonstyles.homephotosliderText}>
              {decode(this.props?.item?.title?.rendered)}
            </Text>
          </View>
        </HandlePressable>
      </View>
    );
  }
}
export default HomePhotogalleryItemTwo;
