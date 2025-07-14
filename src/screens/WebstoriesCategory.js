/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Easing,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { blackcolor, commonstyles, graycolor, whitecolor } from '../styles/commonstyles';
import ShortsComponent from '../components/ShortsComponent';
import { useSelector } from 'react-redux';
import { BaseUrl, LatestUrl } from '../utilities/urls';
import WebStories from './WebStrories';

const WebstoriesCategory = ({}) => {
 
  return (
   <WebStories/>
  );
}


export default WebstoriesCategory;
