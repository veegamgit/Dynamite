/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,Image,Share} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';
import moment from 'moment';

class HomeComponentFour extends React.PureComponent {
  render() {
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    let decode = require('html-entities-decoder');

      const apiDate = this.props?.item?.date;
            const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");
    
              const sharecall = () => {
                const Link_Url = this.props?.item?.link;
                Share.share({
                  message: Link_Url,
                })
                  .then((result) => console.log(result))
                  .catch((error) => console.log(error));
              };
    return (
      <View style={{marginRight: 12}}>
        <HandlePressable
          onPress={() => {
            this.props?.navigation.push('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
              categoryName: this.props?.categoryName,
            });
          }}>
          <View style={commonstyles.HomeFourcategoryView}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={imageUrl}
              style={commonstyles.HomeVideosliderImg}
            />
              <Text numberOfLines={2} style={commonstyles.homeFoursliderText}>
                {decode(this.props?.item?.title?.rendered)}{' '}
              </Text>
                <View style={commonstyles.articleTimeStamp}>
                          <Text style={commonstyles.Homecomp3time}>{formattedDate}</Text>
                          <HandlePressable
                            onPress={() => {
                              sharecall();
                            }}
                            style={commonstyles.iconPress}>
                            <Image
                              style={commonstyles.shareIcon}
                              source={require('../Assets/Images/share_black.png')}
                            />
                          </HandlePressable>
                        </View>
          </View>
        </HandlePressable>
        </View>
    );
  }
}
export default HomeComponentFour;
