/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  commonstyles,
} from '../styles/commonstyles';
import HomeUI from '../components/HomeUI';
import SliderUI from '../components/SliderUI';
import HomeUINew from '../components/HomeUINew';
import getSliderAction from '../redux/actions/getSliderAction';
import HomeVideosgalleryItemOne from '../components/HomeVideosgalleryItemOne';
import HomeVideosgalleryItemTwo from '../components/HomeVideosgalleryItemTwo';
import HomePhotogalleryItemTwo from '../components/HomePhotogalleryItemTwo';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import { Automobile, BaseUrl, Business, Carrer, CategoryUrl, Elections, Entertainment, India, Lifestyle, Maharashtra, Religion, Special, Sports, Technology, Travel, Viral, World } from '../utilities/urls';
import getVideoAction from '../redux/actions/getVideoAction';
import TopNews from '../components/TopNews';
import Ripple from 'react-native-material-ripple';
import Trending from '../components/Trending';
import { NewWebStories } from '../components/NewWebStories';
import { GotoTop } from '../components/GotoTop';

const Home = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [indiaData, setIndiaData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [maharashtraData, setMaharashtraData] = useState(null);
  const [electionsData, setElectionsData] = useState(null);
  const [worldData, setWorldData] = useState(null);
  const [sportsData, setSportsData] = useState(null);
  const [lifestyleData, setLifestyleData] = useState(null);
  const [specialData, setSpecialData] = useState(null);
  const [moviesData, setMoviesData] = useState(null);
  const [viralData, setViralData] = useState(null);
  const [businessData, setBusinessData] = useState(null);
  const [automobileData, setAutomobileData] = useState(null);
  const [technologyData, setTechnologyData] = useState(null);
  const [religionData, setReligionData] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [travelData, setTravelData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  const dispatch = useDispatch();
  const sliderData = useSelector(state => state.sliderReducer.sliderData);
  const videosData = useSelector(state => state.videoReducer.videosData);
  const photosData = useSelector(state => state.photosGalleryReducer.photosData);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowGoToTop(offsetY > 300);
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const getIndiaAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + India);
      const responseJson = await response.json();
      setIndiaData(responseJson);
    } catch (error) {
      console.error('Error fetching India data:', error);
    }
  };
  const getMaharashtraAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Maharashtra);
      const responseJson = await response.json();
      setMaharashtraData(responseJson);
    } catch (error) {
      console.error('Error fetching maharashtra data in home:', error);
    }
  };
  const getElectionsAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Elections);
      const responseJson = await response.json();
      setElectionsData(responseJson);
    } catch (error) {
      console.error('Error fetching Elections data:', error);
    }
  };
  const getWorldAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + World);
      const responseJson = await response.json();
      setWorldData(responseJson);
    } catch (error) {
      console.error('Error fetching World data:', error);
    }
  };
  const getSportsAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Sports);
      const responseJson = await response.json();
      setSportsData(responseJson);
    } catch (error) {
      console.error('Error fetching Sports data:', error);
    }
  };
  const getLifestyleAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Lifestyle);
      const responseJson = await response.json();
      setLifestyleData(responseJson);
    } catch (error) {
      console.error('Error fetching Lifestyle data:', error);
    }
  };
  const getSpecialAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Special);
      const responseJson = await response.json();
      setSpecialData(responseJson);
    } catch (error) {
      console.error('Error fetching Special data:', error);
    }
  };
  const getMoviesAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Entertainment);
      const responseJson = await response.json();
      setMoviesData(responseJson);
    } catch (error) {
      console.error('Error fetching getMoviesAction data:', error);
    }
  };
  const getViralAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Viral);
      const responseJson = await response.json();
      setViralData(responseJson);
    } catch (error) {
      console.error('Error fetching getViralAction data:', error);
    }
  };
  const getBusinessAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Business);
      const responseJson = await response.json();
      setBusinessData(responseJson);
    } catch (error) {
      console.error('Error fetching getBusinessAction data:', error);
    }
  };
  const getAutomobileAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Automobile);
      const responseJson = await response.json();
      setAutomobileData(responseJson);
    } catch (error) {
      console.error('Error fetching getAutomobileAction data:', error);
    }
  };
  const getTechnologyAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Technology);
      const responseJson = await response.json();
      setTechnologyData(responseJson);
    } catch (error) {
      console.error('Error fetching getTechnologyAction data:', error);
    }
  };
  const getReligionAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Religion);
      const responseJson = await response.json();
      setReligionData(responseJson);
    } catch (error) {
      console.error('Error fetching getReligionAction data:', error);
    }
  };
  const getCareerAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Carrer);
      const responseJson = await response.json();
      setCareerData(responseJson);
    } catch (error) {
      console.error('Error fetching getCareerAction data:', error);
    }
  };
  const getTravelAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Travel);
      const responseJson = await response.json();
      setTravelData(responseJson);
    } catch (error) {
      console.error('Error fetching getTravelAction data:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSliderAction());
    dispatch(getVideoAction());
    dispatch(getPhotoGalleryAction());
    getIndiaAction();
    getMaharashtraAction();
    getElectionsAction();
    getWorldAction();
    getSportsAction();
    getLifestyleAction();
    getSpecialAction();
    getMoviesAction();
    getViralAction();
    getBusinessAction();
    getAutomobileAction();
    getTechnologyAction();
    getReligionAction();
    getCareerAction();
    getTravelAction();
    setTimeout(() => setRefreshing(false), 3000);
  };

  useEffect(() => {
    getIndiaAction();
    getMaharashtraAction();
    getElectionsAction();
    getWorldAction();
    getSportsAction();
    getLifestyleAction();
    getSpecialAction();
    getMoviesAction();
    getViralAction();
    getBusinessAction();
    getAutomobileAction();
    getTechnologyAction();
    getReligionAction();
    getCareerAction();
    getTravelAction();

  }, []);
  const videoGalleryitemOne = ({ item, index }) => (
    <HomeVideosgalleryItemOne
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const videoGalleryitemTwo = ({ item, index }) => (
    <HomeVideosgalleryItemTwo
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const photoGalleryItemTwo = ({ item, index }) => (
    <HomePhotogalleryItemTwo
      item={item}
      propsdata={photosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const newsliderdata = Array.isArray(sliderData?.data) ? sliderData?.data : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={[commonstyles.scroll, { flex: 1, position: 'relative' }]}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* Spinner */}
        <Spinner
          visible={loading}
        />
        {/* Trending */}
        <Trending />

        {/* Breaking News */}
        <TopNews navigation={navigation} />

        {/* Slider */}
        {/* <View style={{ paddingLeft: 12, paddingTop: 12 }}> */}
        <SliderUI
          data={newsliderdata}
          navigation={navigation}
          categoryName="दिन की खबरें"
          navigationScreen="Latest"

        />
        {/* </View> */}

        {/* <WebStories /> */}
        <View style={{ paddingLeft: 12, paddingTop: 12 }}>
          <NewWebStories />
        </View>


        {/* Viral */}
        <HomeUINew
          categoryName="वायरल"
          data={viralData?.data}
          navigationScreen="Viral"
          navigation={navigation}
        />

        {/* Special */}
        <HomeUI
          categoryName="नवभारत विशेष"
          data={specialData?.data}
          navigationScreen="special-coverage"
          navigation={navigation}
        />

        {/* videos Gallery */}
        {/* videos gallery  text */}
        <View style={commonstyles.homeVideoview}>
          <View style={commonstyles.homegallerycategoryView}>
            <View style={commonstyles.homeOnetextView}>
              <Text style={commonstyles.homevideocategorytext}>वीडियो</Text>
            </View>
            <View style={{ marginRight: 5 }}>
              <Ripple
                onPress={() => {
                  navigation.navigate('Videos');
                }}>
                <Image style={commonstyles.actionIconSize} source={require('../Assets/Images/next_white.png')} />
              </Ripple>
            </View>
          </View>

          {/* videos gallery  Cards*/}
          {videosData?.data?.length ? <>
            <FlatList
              data={videosData?.data?.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              renderItem={videoGalleryitemOne}
              style={{ paddingHorizontal: 12, marginTop: 4 }}
            />
            <View style={{ paddingLeft: 12 }}>
              <FlatList
                persistentScrollbar
                data={videosData?.data?.slice(1, 10)}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={videoGalleryitemTwo}
              />
            </View></> : <ActivityIndicator size={"large"} style={{ paddingVertical: 12 }} />}
        </View>

        {/* Movies */}
        <HomeUI
          categoryName="मनोरंजन"
          data={moviesData?.data}
          navigationScreen="entertainment"
          navigation={navigation}
        />

        {/* Sports */}
        <HomeUI
          categoryName="खेल"
          data={sportsData?.data}
          navigationScreen="Sports"
          navigation={navigation}
        />

        {/* Photo Gallery */}
        {/* photo gallery  Cards*/}
        <View style={commonstyles.homeVideoview}>
          <View style={commonstyles.homegallerycategoryView}>
            <View style={commonstyles.homeOnetextView}>
              <Text style={commonstyles.homevideocategorytext}>फोटो</Text>
            </View>
            <Ripple
              onPress={() => {
                navigation.push('Photos');
              }}>
              <Image style={commonstyles.actionIconSize} source={require('../Assets/Images/next_white.png')} />
            </Ripple>
          </View>
          {/* photo gallery  Cards*/}
          <View style={{ paddingLeft: 12, marginTop: 5 }}>
            {photosData?.data?.length > 0 ? <FlatList
              persistentScrollbar
              data={photosData?.data}
              showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={photoGalleryItemTwo}
            /> : <ActivityIndicator size={'large'} style={{ paddingVertical: 12 }} />}
          </View>
        </View>

        {/* lifestyle */}
        <HomeUINew
          categoryName="लाइफ़स्टाइल"
          data={lifestyleData?.data}
          navigationScreen="Lifestyle"
          navigation={navigation}
        />

        {/* Technology */}
        <HomeUI
          categoryName="टेक्नॉलजी"
          data={technologyData?.data}
          navigationScreen="Technology"
          navigation={navigation}
        />

        {/* India */}
        <HomeUI
          categoryName="देश"
          data={indiaData?.data}
          navigationScreen="india"
          navigation={navigation}
        />

        {/* Maharashtra */}
        <HomeUINew
          categoryName="महाराष्ट्र"
          data={maharashtraData?.data}
          navigationScreen="Maharashtra"
          navigation={navigation}
        />

        {/* world */}
        <HomeUINew
          categoryName="विदेश"
          data={worldData?.data}
          navigationScreen="World"
          navigation={navigation}
        />

        {/* Business */}
        <HomeUI
          categoryName="बिज़नेस"
          data={businessData?.data}
          navigationScreen="Business"
          navigation={navigation}
        />
        {/* Automobile */}
        <HomeUINew
          categoryName="ऑटोमोबाइल"
          data={automobileData?.data}
          navigationScreen="Automobile"
          navigation={navigation}
        />

        {/* Religion */}
        <HomeUINew
          categoryName="धर्म"
          data={religionData?.data}
          navigationScreen="Religion"
          navigation={navigation}
        />
        {/* Career */}
        <HomeUI
          categoryName="करियर"
          data={careerData?.data}
          navigationScreen="Career"
          navigation={navigation}
        />
        {/* Travel */}
        <HomeUINew
          categoryName="टूर एंड ट्रैवल"
          data={travelData?.data}
          navigationScreen="Travel"
          navigation={navigation}
        />
      </ScrollView>
      {showGoToTop && (
        <GotoTop handleClick={scrollToTop} />
      )}
    </SafeAreaView>
  );
};

export default Home;
