import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Share,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet
} from 'react-native';
import {
  blackcolor,
  commonstyles,
  graycolor,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { HeaderStyle } from '../styles/Header.Styles';
import moment from 'moment';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import { BaseUrl, DetailsUrl, RelatedUrl } from '../utilities/urls';
import FastImage from 'react-native-fast-image';
import { decode } from 'html-entities';
import { ScrollView } from 'react-native-gesture-handler';
import { TopicItems } from '../components/TopicItems';
import Ripple from 'react-native-material-ripple';
import HandlePressable from '../components/HandlePressable';

const VideoArticle = ({ navigation, route }) => {
  const [detailsData, setDetailsData] = useState([]);
  const Scrollref = useRef();
  const [fontSize, setFontSize] = useState(18);
  const [relatedData, setRelatedData] = useState(null);
  const [detailArticleData, setDetailArticleData] = useState(null);
  const [renderWebView, setRenderWebView] = useState(false);
  const [firstArticle, setFirstArticle] = useState(null);
  const [articleId, setArticleId] = useState(route.params?.item?.id);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getDetailArticleAction(articleId);
    getRelatedAction(articleId);
  }, [articleId]);

  useEffect(() => {
    fetchSingleArticleObj();
  }, [route]);

  useEffect(() => {
    if (
      detailArticleData &&
      detailArticleData.data &&
      detailArticleData.data.length > 0
    ) {
      const firstArticleData = detailArticleData.data[0];
      setFirstArticle(firstArticleData);
      setTags(firstArticleData?.tags);
    }
  }, [detailArticleData]);

  function fetchSingleArticleObj() {
    const articleObj = route.params?.detailsData?.filter(
      item => item.id === route.params?.item?.id,
    )[0];
    setFirstArticle(articleObj);
    setTags(articleObj?.tags);
  }

  // Function to fetch the details of the article
  const getDetailArticleAction = async artId => {
    try {
      const response = await fetch(BaseUrl + DetailsUrl + '?id=' + artId);
      const responseJson = await response.json();
      setDetailArticleData(responseJson);
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };
  const getRelatedAction = async artId => {
    try {
      const response = await fetch(BaseUrl + RelatedUrl + '?id=' + artId);
      const responseJson = await response.json();
      setRelatedData(responseJson);
    } catch (error) {
      console.error('Error fetching getRelatedAction data:', error);
    }
  };

  const renderItemOne = ({ item }) => (
    <DetailsComponentOne
      item={item}
      propsdata={detailsData}
      navigation={navigation}
    />
  );
  const renderItemTwo = ({ item }) => (
    <DetailsComponentTwo
      item={item}
      propsdata={relatedData?.data}
      navigation={navigation}
    />
  );
  const getIndex = () => {
    var index = detailsData.findIndex(x => x.id === firstArticle?.id);
    return index + 1;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderWebView(true);
    }, 500); // Delay rendering by 0.5 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const goToTop = () => {
    Scrollref.current.scrollTo({ x: 0, y: 0, animated: true });
  };
  useEffect(() => {
    goToTop();
  },);

  useEffect(() => {
    if (route?.params?.detailsData) {
      setDetailsData(route.params.detailsData);
    }
  }, [route?.params?.detailsData]);

  const sharecall = () => {
    const Link_Url = firstArticle?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = firstArticle?.web_featured_image
    ? { uri: firstArticle?.web_featured_image }
    : defaultImage;

  const handleWebViewRequest = request => {
    const url = request?.url;

    if (url.includes('post_id=')) {
      let postId = url.split('post_id=')[1];
      setArticleId(postId);
      return false;
    }

    if (url.includes('topic')) {
      const splitURL = url.split('/');
      let len = splitURL.length;
      let category = splitURL[len - 1];
      navigation.navigate('CategoryScreen', {
        isTagDeepLinkClicked: true,
        url: category,
      });
      return false;
    }

    if (url.includes('navbharatlive.com')) {
      // Extract the category name from the URL
      const match = url.match(/navbharatlive\.com\/([^\/]+)/);
      if (match && match[1]) {
        const categoryName = match[1];
        navigation.navigate('CategoryScreen', {
          isCategoryClicked: true,
          url: categoryName,
        });
      }
      return false;
    }
    return true;
  };
  const toggleFontSize = () => {
    if (fontSize === 18) {
      setFontSize(20);
    } else if (fontSize === 20) {
      setFontSize(23);
    } else if (fontSize === 23) {
      setFontSize(25);
    } else {
      setFontSize(18);
    }
  };

  const source = firstArticle?.content?.rendered;
  let source1 = source?.replace('lazyload', 'text/javascript');

  const apiDate = firstArticle?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  const authorName = firstArticle?.author_slug;

  const handleGoBack = () => {
    if (route.params?.screenName === 'Shorts') {
      navigation.navigate('Shorts');
    } else {
      navigation.goBack();
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  return (
    <View style={commonstyles.container}>
      <View style={HeaderStyle.DetailsHeader}>
        <Ripple
          onPress={handleGoBack}
          style={commonstyles.iconRipple}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={commonstyles.actionIconSize}
          />
        </Ripple>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ripple onPress={toggleFontSize} style={commonstyles.iconRipple}>
            <Image
              style={commonstyles.actionIconSize}
              source={require('../Assets/Images/font.png')}
            />
          </Ripple>
          <HandlePressable onPress={sharecall} style={commonstyles.iconRipple}>
            <Image
              style={commonstyles.actionIconSize}
              source={require('../Assets/Images/share_black.png')}
            />
          </HandlePressable>
        </View>
      </View>
      <ScrollView ref={Scrollref}>
        <View
          style={{
            borderBottomColor: graycolor,
            borderBottomWidth: 2,
            paddingBottom: 12,
          }}>
          <View style={{ paddingHorizontal: 12, paddingTop: 10 }}>
            <Text
              style={commonstyles.categoryText}>
              {decode(firstArticle?.title?.rendered)}
            </Text>
            <View
              style={commonstyles.DetailTimeMainView}>
              <Ripple onPress={() => {
                navigation.push('Author', {
                  url: authorName,
                  screenName: 'latest',
                })
              }}>
                <Text style={commonstyles.detailauthor}>
                  BY {firstArticle?.author_name}
                </Text>
              </Ripple>
              <Text style={commonstyles.detailTime}>Updated on: {formattedDate}</Text>
            </View>
          </View>

          <FastImage
            source={imageUrl}
            style={commonstyles.Detailslargecard}
            resizeMode={FastImage.resizeMode.contain}
          />

          <View>
            {renderWebView &&
              <AutoHeightWebView
                javaScriptEnabled={true}
                scalesPageToFit={false}
                allowsFullscreenVideo={true}
                overScrollMode="never"
                onTouchStart={handleTouchStart}
                style={{ marginHorizontal: 12, width: Dimensions.get('window').width - 24, opacity: 0.99 }}
                customStyle={`
    iframe[title]{
      font-size: 16px;
    }
    * {
      font-family: 'Mandali-Bold';
      line-height: 1.8;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      user-select: none; 
    }
    iframe[src^="https://www.youtube.com/embed/"] {
        width:100% !important;
        height:225px;
    }
    h4 {
      margin:5px 0px;
    }
    p strong {
      font-size: 18px;
    }
    p, h4 a {
      text-align:left;
      margin:5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.8
    }
    h2 a {
      font-size: 18px;
      text-align:left;
      margin:5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.6
    }
    h1{
      font-size: 18px;
      text-align:left;
      margin: 5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.6
    }
    p img{
      width:100%;
      height:inherit
    }
    p iframe{
      width:100%;
      height:inherit
    }
    img{
      width:100%;
      height:inherit
    }
    div[id*=attachment]{
      max-width:100%!important;
      height:inherit
    }
      p a{
      width:100%;
      height:inherit
      }
  `}
                source={{
                  html: `
    ${source1}
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Faustina&display=swap');
      p strong, span, p span { font-family: 'Faustina', sans-serif; }
      p, li { font-family: 'Faustina', sans-serif; line-height: 1.4; padding: 0px; color: #000; font-weight: 500; font-size: ${fontSize}px; }
    </style>
  `,
                  baseUrl: Platform.OS === 'android' ? 'https://twitter.com' : '',
                }}
                scrollEnabled={false}
                onShouldStartLoadWithRequest={handleWebViewRequest}
                injectedJavaScript={`
                  document.querySelectorAll('a').forEach(a => {
                      a.onclick = function(event) {
                          event.preventDefault();
                      };
                  });
                  true;
              `}
                viewportContent={'width=device-width, user-scalable=no'}
              />
            }

          </View>
          {/* Published view */}
          <View style={{
            marginLeft: 12,
            flexDirection: 'row',
            marginTop: 10
          }}>
            <Text style={commonstyles.publishedtext}>Published on: </Text>

            <Text style={commonstyles.detailTime}>{formattedDate}</Text>
          </View>
        </View>

        {/* Topics */}
        <TopicItems navigation={navigation} tags={tags} categoryName={firstArticle?.category_name} />

        {/* Next Article */}
        <View
          style={{
            borderBottomColor: graycolor,
            borderBottomWidth: 2,
          }}>
          <View style={[commonstyles.homeOnetextView, commonstyles.sectionTitle]}>
            <Text style={commonstyles.Category}>Next Articles</Text>
          </View>
          {detailsData.length > 0 ? (
            <View style={commonstyles.articleContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                horizontal={true}
                data={detailsData?.slice(getIndex(), getIndex() + 5)}
                renderItem={renderItemOne}
                keyExtractor={(item) => item.id?.toString()}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
              />
            </View>
          ) : (
            <Text
              style={commonstyles.noNextArticles}>
              No Next Articles
            </Text>
          )}
        </View>

        {/* Related News */}
        <View>
          <View style={[commonstyles.homeOnetextView, commonstyles.sectionTitle]}>
            <Text style={commonstyles.Category}>सम्बंधित ख़बरें</Text>
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <FlatList
              data={relatedData?.data}
              renderItem={renderItemTwo}
              keyExtractor={item => item.id.toString()}
              initialNumToRender={5}
              maxToRenderPerBatch={10}
              windowSize={10}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoArticle;
