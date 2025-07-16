/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Share,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  commonstyles,
  whitecolor,
  gllery_background,
  bluecolor,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {HeaderStyle} from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import getRelatedAction from '../redux/actions/getRelatedAction';
import Ripple from 'react-native-material-ripple';
import HandlePressable from '../components/HandlePressable';

const PhotoArticle = ({navigation, route}) => {
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const [showWebView, setShowWebView] = useState(false);

  const result1 = route?.params?.item?.content?.rendered;
  var result = result1?.replace('lazyload', 'text/javascript');
  result = result.replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');
  useEffect(() => {
    setTimeout(() => setShowWebView(true), 500);
  }, []);
  useEffect(() => {
    dispatch(getRelatedAction());
  }, []);

  const apiDate = route?.params?.item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');
  const authorName = route.params?.item?.author_slug;

  const sharecall = () => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <View style={commonstyles.container}>
      <View style={HeaderStyle.subHeaderviewHeight}>
        <Ripple
          onPress={() => {
            navigation.goBack();
          }}
          style={commonstyles.iconRipple}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={commonstyles.actionIconSize}
          />
        </Ripple>
        <HandlePressable
          onPress={() => {
            sharecall();
          }} style={commonstyles.iconRipple}>
          <Image
            source={require('../Assets/Images/share_black.png')}
            style={commonstyles.actionIconSize}
          />
        </HandlePressable>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={{backgroundColor: gllery_background}}>
        <View style={{paddingHorizontal: 12, paddingTop: 12}}>
          <HTMLView
            value={'<p style>' + route?.params?.item?.title?.rendered + '</p>'}
            stylesheet={headerStyles}
          />
          <View style={commonstyles.DetailTimeMainView}>
          <Ripple
            onPress={() => {
              navigation.push('Author', {
                url: authorName,
                screenName: 'PhotoArticle',
              });
            }}>
            <Text style={commonstyles.detailauthorgallery}>
              BY {route?.params?.item?.author_name}
            </Text>
            </Ripple>
            <Text style={commonstyles.detailTimegallery}>
              Updated on: {formattedDate}
            </Text>
          </View>
        </View>
        {showWebView ? (
          <AutoHeightWebView
            javaScriptEnabled={true}
            scalesPageToFit={false}
            customStyle={`
    @font-face {
        font-family: 'Mandali';
        src: url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');
    }
    p {
        font-family: 'Mandali', sans-serif;
        color:#fff;
      
    }
      
  .wp-caption-text {
        font-family: 'Mandali', sans-serif;
        color:#fff;
        padding:10px 12px 0px 12px;
        text-align:left;
      
    }
   
    .gallery img{
        width:92% !important;
        height:auto !important;
        object-fit: contain;

    }
    `}
            injectedJavaScript={`
        document.querySelectorAll('a').forEach(a => {
            a.onclick = function(event) {
                event.preventDefault();
            };
        });
        true;
    `}
            source={{html: result}}
            scrollEnabled={false}
            viewportContent={'width=device-width, user-scalable=no'}
          />
        ) : (
          <View style={{paddingTop: 20}}>
            <ActivityIndicator size={'large'} color={bluecolor}/>
          </View>
        )}
         {/* Published view */}
                  <View style={{
                    marginLeft: 12,
                    flexDirection: 'row',
                    // marginTop: 10,
                    marginBottom:10
                  }}>
                    <Text style={[commonstyles.detailTimegallery,{ fontFamily: 'Mandali-Bold',
    fontWeight: '800',}]}>Published on: </Text>
        
                    <Text style={commonstyles.detailTimegallery}>{formattedDate}</Text>
                  </View>
      </ScrollView>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  p: {
    color: whitecolor,
    fontSize: 20,
    fontFamily: 'Mandali-Bold',
    lineHeight: 28,
    marginBottom: 0,
    fontWeight: '600',
  },
});

export default PhotoArticle;
