import React, { useEffect, useState } from 'react';
import CategoryUI from '../components/CategoryUI';
import { useRoute, useNavigation } from '@react-navigation/native';

const CategoryScreen = ({ item, isTopNavigation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [parentData, setParentData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    if(route.params.isTagDeepLinkClicked){
      fetchTagData()
    } else {
      fetchParentData();
    }
  }, [route]);

  const fetchParentData = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const category = route.params?.isCategoryClicked ? route.params?.url : item?.url;
      const url = `https://www.navbharatlive.com/wp-json/navbharatlive/v1/category-posts?category=${category}&limit=${limit}&offset=${offset}`;

      const response = await fetch(url);
      const jsonData = await response.json();

      if (jsonData.status === 'success' && jsonData.data?.length > 0) {
        setParentData((prevData) => [...prevData, ...jsonData.data]);
        setOffset((prevOffset) => prevOffset + limit);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  const fetchTagData = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const url = `https://navbharatlive.com/wp-json/navbharatlive/v1/tag-api?tag_name=${route.params?.url}&paged=${page}`;

      const response = await fetch(url);
      const jsonData = await response.json();

      if (jsonData.status === 'success' && jsonData.data?.length > 0) {
        setParentData((prevData) => [...prevData, ...jsonData.data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  
  return (
    <CategoryUI
      data={parentData}
      navigation={navigation}
      title={item?.title || route.params.url}
      categoryName={item?.title}
      isTopNavigation={isTopNavigation}
      loadMore={route.params.isTagDeepLinkClicked ? fetchTagData : fetchParentData}
      loadingMore={loadingMore}
      hasMore={hasMore}
    />
  )
};

export default CategoryScreen;
