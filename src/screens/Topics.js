import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
} from 'react-native';
import {BaseUrl, TagsUrl} from '../utilities/urls';
import {blackcolor, commonstyles} from '../styles/commonstyles';
import {FlatList} from 'react-native-gesture-handler';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import {HeaderStyle} from '../styles/Header.Styles';
import Ripple from 'react-native-material-ripple';

const Topics = ({navigation, route}) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {item, categoryName} = route.params;
  const tagLen = item.link?.split('/').length;
  const tag = item.link?.split('/')[tagLen - 1];

  useEffect(() => {
    if(tag){
      fetchTopics();
    }
  }, [tag]);

  const fetchTopics = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BaseUrl}${TagsUrl}?tag_name=${tag}&limit=10&offset=0`,
      );
      const tagsData = await response.json();
      setTags(tagsData?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={tags}
      navigation={navigation}
      categoryName={categoryName}
    />
  );

  if (loading) {
    return (
      <View style={commonstyles.loadingContainer}>
        <ActivityIndicator size={'large'} color={blackcolor}/>   
    
      </View>
    );
  } else {
    return (
      <View style={commonstyles.container}>
        <View style={HeaderStyle.DetailsHeader}>
          <Ripple onPress={() => navigation.goBack()}
            style={commonstyles.iconRipple}>
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={commonstyles.actionIconSize}
            />
          </Ripple>
        </View>
        <View
          style={[
            commonstyles.homeOnetextView,
            {marginLeft: 12, marginBottom: 4},
          ]}>
          <Text style={commonstyles.galleryArticlecategorytext}>{item.name}</Text>
        </View>
        <FlatList
          style={commonstyles.cateflist}
          data={tags}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItemTwo}
        />
      </View>
    );
  }
};

export default Topics;
