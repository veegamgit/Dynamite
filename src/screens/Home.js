/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef, useCallback, memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

import {commonstyles, whitecolor} from '../styles/commonstyles';
import HomeUI from '../components/HomeUI';
import SliderUI from '../components/SliderUI';
import HomeUINew from '../components/HomeUINew';
import getSliderAction from '../redux/actions/getSliderAction';
import HomeVideosgalleryItemOne from '../components/HomeVideosgalleryItemOne';
import HomeVideosgalleryItemTwo from '../components/HomeVideosgalleryItemTwo';

import {
  BaseUrl,
  Business,
  CategoryUrl,
  Elections,
  Entertainment,
  Lifestyle,
  Uttarpradesh,
  Special,
  Sports,
  Technology,
  National,
  Uttrakhand,
  International,
  Bureaucracy,
  Politics,
  Jobs,
  Crime,
} from '../utilities/urls';
import getVideoAction from '../redux/actions/getVideoAction';
import Ripple from 'react-native-material-ripple';
import Trending from '../components/Trending';
import {NewWebStories} from '../components/NewWebStories';
import {GotoTop} from '../components/GotoTop';
import {useTranslation} from 'react-i18next';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';

const Home = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [uttrakhandData, setUttrakhandData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [uttarpradeshData, setUttarpradeshData] = useState(null);
  const [internationalData, setInternationalData] = useState(null);
  const [sportsData, setSportsData] = useState(null);
  const [moviesData, setMoviesData] = useState(null);
  const [nationalData, setNationalData] = useState(null);
  const [businessData, setBusinessData] = useState(null);
  const [bureaucracyData, setBureaucracyData] = useState(null);
  const [technologyData, setTechnologyData] = useState(null);
  const [politicsData, setPoliticsData] = useState(null);
  const [jobsData, setJobsData] = useState(null);
  const [crimeData, setCrimeData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const {t} = useTranslation();

  const dispatch = useDispatch();
  const sliderData = useSelector(state => state.sliderReducer.sliderData);
  const videosData = useSelector(state => state.videoReducer.videosData);
  const language = useSelector(state => state.languageReducer.selectedLanguage);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowGoToTop(offsetY > 300);
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  const getNationalAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + National);
      const responseJson = await response.json();
      setNationalData(responseJson);
    } catch (error) {
      console.error('Error fetching getNationalNationalAction data:', error);
    }
  }, []);

  const getUttarpradeshAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Uttarpradesh);
      const responseJson = await response.json();
      setUttarpradeshData(responseJson);
    } catch (error) {
      console.error('Error fetching Uttarpradesh data in home:', error);
    }
  }, []);

  const getBureaucracyAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Bureaucracy);
      const responseJson = await response.json();
      setBureaucracyData(responseJson);
    } catch (error) {
      console.error('Error fetching bureaucracy data:', error);
    }
  }, []);

  const getInternationalAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + International);
      const responseJson = await response.json();
      setInternationalData(responseJson);
    } catch (error) {
      console.error('Error fetching international data:', error);
    }
  }, []);

  const getPoliticsAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Politics);
      const responseJson = await response.json();
      setPoliticsData(responseJson);
    } catch (error) {
      console.error('Error fetching politics data:', error);
    }
  }, []);

  const getUttrakhandAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Uttrakhand);
      const responseJson = await response.json();
      setUttrakhandData(responseJson);
    } catch (error) {
      console.error('Error fetching Uttrakhand data:', error);
    }
  }, []);

  const getJobsAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Jobs);
      const responseJson = await response.json();
      setJobsData(responseJson);
    } catch (error) {
      console.error('Error fetching jobs data:', error);
    }
  }, []);

  const getCrimeAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Crime);
      const responseJson = await response.json();
      setCrimeData(responseJson);
    } catch (error) {
      console.error('Error fetching crime data:', error);
    }
  }, []);

  const getMoviesAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Entertainment);
      const responseJson = await response.json();
      setMoviesData(responseJson);
    } catch (error) {
      console.error('Error fetching getMoviesAction data:', error);
    }
  }, []);

  const getBusinessAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Business);
      const responseJson = await response.json();
      setBusinessData(responseJson);
    } catch (error) {
      console.error('Error fetching getBusinessAction data:', error);
    }
  }, []);

  const getSportsAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Sports);
      const responseJson = await response.json();
      setSportsData(responseJson);
    } catch (error) {
      console.error('Error fetching Sports data:', error);
    }
  }, []);

  const getTechnologyAction = useCallback(async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Technology);
      const responseJson = await response.json();
      setTechnologyData(responseJson);
    } catch (error) {
      console.error('Error fetching getTechnologyAction data:', error);
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSliderAction());
    dispatch(getVideoAction());
    getNationalAction();
    getUttarpradeshAction();
    getUttrakhandAction();
    getInternationalAction();
    getBureaucracyAction();
    getPoliticsAction();
    getJobsAction();
    getCrimeAction();
    getMoviesAction();
    getBusinessAction();
    getSportsAction();
    getTechnologyAction();
    dispatch(getTopMenuDataAction());
    setTimeout(() => setRefreshing(false), 3000);
  };

  useEffect(() => {
    getNationalAction();
    getUttarpradeshAction();
    getUttrakhandAction();
    getInternationalAction();
    getBureaucracyAction();
    getPoliticsAction();
    getJobsAction();
    getCrimeAction();
    getMoviesAction();
    getBusinessAction();
    getSportsAction();
    getTechnologyAction();
    dispatch(getTopMenuDataAction());
  }, [language]);

  const videoGalleryitemOne = ({item, index}) => (
    <HomeVideosgalleryItemOne
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const videoGalleryitemTwo = ({item, index}) => (
    <HomeVideosgalleryItemTwo
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );

  const newsliderdata = Array.isArray(sliderData?.data) ? sliderData?.data : [];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={[commonstyles.scroll, {flex: 1, position: 'relative'}]}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* Spinner */}
        <Spinner visible={loading} />
        {/* Trending */}
        <Trending />

        {/* Breaking News */}
        {/* <TopNews navigation={navigation} /> */}

        {/* Slider */}
        {/* <View style={{ paddingLeft: 12, paddingTop: 12 }}> */}
        <SliderUI
          data={newsliderdata}
          navigation={navigation}
          categoryName={t('topNews')}
          navigationScreen="Latest"
        />
        {/* </View> */}

        {/* <WebStories /> */}
        <View style={{paddingLeft: 12, paddingTop: 12}}>
          <NewWebStories />
        </View>

        {/* National */}
        <HomeUINew
          categoryName={t('national')}
          data={nationalData?.data}
          navigationScreen="National"
          navigation={navigation}
        />
        {/* uttar-pradesh */}
        <HomeUINew
          categoryName={t('uttarpradesh')}
          data={uttarpradeshData?.data}
          navigationScreen="uttar-pradesh"
          navigation={navigation}
        />

        {/* Uttrakhand */}
        {uttrakhandData?.data.length > 0 && (
          <HomeUI
            categoryName={t('uttrakhand')}
            data={uttrakhandData?.data}
            navigationScreen="uttrakhand"
            navigation={navigation}
          />
        )}
        {/* international */}
        <HomeUINew
          categoryName={t('international')}
          data={internationalData?.data}
          navigationScreen="international"
          navigation={navigation}
        />

        {/* bureaucracy */}
        <HomeUINew
          categoryName={t('bureaucracy')}
          data={bureaucracyData?.data}
          navigationScreen="bureaucracy"
          navigation={navigation}
        />
        {/* politics */}
        <HomeUI
          categoryName={t('politics')}
          data={politicsData?.data}
          navigationScreen="politics"
          navigation={navigation}
        />
        {/* jobs */}
        {jobsData?.data.length > 0 && (
          <HomeUINew
            categoryName={t('jobs')}
            data={jobsData?.data}
            navigationScreen="jobs"
            navigation={navigation}
          />
        )}
        {/* crime */}
        <HomeUINew
          categoryName={t('crime')}
          data={crimeData?.data}
          navigationScreen="crime"
          navigation={navigation}
        />

        {/* Movies */}
        <HomeUI
          categoryName={t('entertainment')}
          data={moviesData?.data}
          navigationScreen="entertainment"
          navigation={navigation}
        />
        {/* Business */}
        <HomeUINew
          categoryName={t('business')}
          data={businessData?.data}
          navigationScreen="Business"
          navigation={navigation}
        />
        {/* Sports */}
        <HomeUINew
          categoryName={t('sports')}
          data={sportsData?.data}
          navigationScreen="Sports"
          navigation={navigation}
        />

        {/* Technology */}
        <HomeUI
          categoryName={t('technology')}
          data={technologyData?.data}
          navigationScreen="Technology"
          navigation={navigation}
        />
        {/* videos Gallery */}
        {/* videos gallery  text */}
        <View style={commonstyles.homeVideoview}>
          <View style={commonstyles.homegallerycategoryView}>
            <View style={{}}>
              <Text style={commonstyles.homevideocategorytext}>
                {t('videos')}
              </Text>
            </View>
            <View style={{marginRight: 5}}>
              <Ripple
                onPress={() => {
                  navigation.navigate('Videos');
                }}>
                {/* <Image style={commonstyles.actionIconSize} source={require('../Assets/Images/next_white.png')} /> */}
                <Text
                  style={{color: whitecolor, fontWeight: '500', fontSize: 16}}>
                  {t('seeall')}
                </Text>
              </Ripple>
            </View>
          </View>

          {/* videos gallery  Cards*/}
          {videosData?.data?.length ? (
            <>
              <FlatList
                data={videosData?.data?.slice(0, 1)}
                showsHorizontalScrollIndicator={false}
                renderItem={videoGalleryitemOne}
                style={{paddingHorizontal: 12, marginTop: 4}}
              />
              <View style={{paddingLeft: 12}}>
                <FlatList
                  persistentScrollbar
                  data={videosData?.data?.slice(1, 10)}
                  showsHorizontalScrollIndicator={true}
                  horizontal={true}
                  renderItem={videoGalleryitemTwo}
                />
              </View>
            </>
          ) : (
            <ActivityIndicator size={'large'} style={{paddingVertical: 12}} />
          )}
        </View>
      </ScrollView>
      {showGoToTop && <GotoTop handleClick={scrollToTop} />}
    </SafeAreaView>
  );
};

export default memo(Home);
