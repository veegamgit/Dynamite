/* eslint-disable prettier/prettier */
import React from 'react';
import { HeaderStyle } from '../styles/Header.Styles';
import { View, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { blackcolor, commonstyles } from '../styles/commonstyles';
import Ripple from 'react-native-material-ripple';
import HandlePressable from './HandlePressable';
export default function SubHeader(props) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
      <Ripple
        onPress={() => {
          props.leftBtnClick();
        }}
        style={commonstyles.iconRipple}
        >
        <Image
          source={require('../Assets/Images/arrow.png')}
          style={commonstyles.actionIconSize}
        />
      </Ripple>
      <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      <View>
        {props.isLive != null && props.isLive === true && (
          <HandlePressable
            onPress={() => {
              props.rightBtnClick();
            }}>
            <Image
              source={require('../Assets/Images/tv_small.png')}
              style={{ height: 25, width: 25 }}
            />
          </HandlePressable>
        )}
        {props.isBook != null && props.isBook === true && (
          <View style={{ flex: 0.3 }}>
            <HandlePressable
              onPress={() => {
                props.BookClick();
              }}
              style={{ zIndex: 999 }}>
              <MaterialIcons
                name="bookmark-outline"
                size={30}
                color={blackcolor}
                style={{ left: 20, top: 2 }}
              />
            </HandlePressable>
          </View>
        )}
      </View>
    </View>
  );
}
