/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  blackcolor,
  graycolor,
  whitecolor,
  Header_text,
  dark_blue,
  bluecolor,
} from '../styles/commonstyles';

export const HeaderStyle = StyleSheet.create({
  viewHeight: {
    height: 60,
    width: '100%',
    backgroundColor: Header_text,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: graycolor,
    borderBottomWidth: 2,
  },
  buttonImg: {
    width: 20,
    height: 20,
  },
  buttonView: {
    flex: 0.4,
    backgroundColor: whitecolor,
    justifyContent: 'center',
    borderRadius: 50,
    height: 30,
    top: 5,
  },
  heading: {
    width: '70%',
    height: 45,
  },
  customheading: {
    width: '70%',
    height: 45,
    fontFamily: 'Mandali-Bold',
    textAlign: 'center',
    fontSize: 33,
    color: Header_text,
  },
  subHeaderviewHeight: {
    width: '100%',
    backgroundColor: whitecolor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DetailsHeader: {
    width: '100%',
    backgroundColor: whitecolor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeadercustom: {
    width: '100%',
    backgroundColor: dark_blue,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subHeaderbuttonImg: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  subHeaderheading: {
    color: bluecolor,
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  HeadTitleImg: {
    height: 50,
    width: 100,
  },
  headerLeftView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  headerLeftImg: {height: 20, width: 20},
  HeadRightView: {
    marginRight: 14,
  },
  HeadRightImg: {height: 20, width: 20},
  HeadRightpaperImg: {height: 15, width: 15},
    HeadRightarrowImg: {height: 13, width: 13},

});
