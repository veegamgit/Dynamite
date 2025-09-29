import {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  blackcolor,
  bluecolor,
  graycolor,
  whitecolor,
} from '../styles/commonstyles';
import LangTranslate from '../Assets/Images/lang_translate.png';
import companyLogo from '../Assets/Images/logo_hn.png';
import RadioGroup from 'react-native-radio-buttons-group';
import Ripple from 'react-native-material-ripple';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setLanguage} from '../redux/actions/languageActions';
import {ToastAndroid} from 'react-native';

const LanguageComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'हिंदी',
        value: 'हिंदी',
        color: bluecolor,
      },
      {
        id: '2',
        label: 'English',
        value: 'English',
        color: bluecolor,
      },
    ],
    [],
  );

  const handleSelect = async id => {
    setSelectedId(id);
    const lang = radioButtons.find(rb => rb.id === id)?.value;
    setSelectedLang(lang);
    await dispatch(setLanguage(lang));
    await AsyncStorage.setItem('selectedLang', JSON.stringify(lang));
  };

  const handleGoHome = () => {
    if (selectedId) {
      return navigation.navigate('homeScreen');
    } else {
      return ToastAndroid.show(
        'Please Choose Your Preferred Language',
        ToastAndroid.CENTER,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={companyLogo}
        style={styles.companyLogo}
        resizeMode="contain"
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={LangTranslate} style={styles.langIcon} />
        <Text style={styles.pageTitle}>
          Please Choose Your Preferred Language
        </Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={handleSelect}
          selectedId={selectedId}
          labelStyle={{fontSize: 20, fontWeight: '700', color: blackcolor}}
          containerStyle={{
            alignItems: 'flex-start',
            marginBottom: 24,
          }}
        />
      </View>
      <View style={styles.bottomButtonRow}>
        <Ripple
          onPress={() => navigation.navigate('homeScreen')}
          style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip</Text>
        </Ripple>
        <Ripple onPress={handleGoHome} style={styles.circleBtn}>
          <Image source={require('../Assets/Images/next_white.png')} />
        </Ripple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: whitecolor,
    flex: 1,
  },
  companyLogo: {
    width: 150,
    height: 50,
  },
  pageTitle: {
    fontSize: 32,
    color: blackcolor,
    fontWeight: '400',
    marginBottom: 30,
  },
  langIcon: {width: 120, height: 120, marginBottom: 20},
  circleBtn: {
    width: 60,
    height: 60,
    backgroundColor: bluecolor,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  skipBtn: {
    borderWidth: 1,
    borderColor: graycolor,
    borderRadius: 10,
    padding: 8,
    width: 75,
    alignItems: 'center',
    overflow: 'hidden',
  },
  skipText: {
    fontSize: 16,
    color: blackcolor,
  },
  bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default LanguageComponent;
