/* eslint-disable prettier/prettier */
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {
  blackcolor,
  bluecolor,
  commonstyles,
  graycolor,
} from '../../styles/commonstyles';
import {ContactStyles} from '../../styles/contactScreenStyles';
import {useTranslation} from 'react-i18next';

const ContactUs = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={commonstyles.container}>
      <SubHeader
        title={t('contactus')}
        leftBtnClick={() => navigation.goBack()}
        isBook={false}
      />
      <View style={ContactStyles.Container}>
        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text
                style={{
                  color: blackcolor,
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 22,
                }}>
                <Text style={{fontWeight: '700', color: bluecolor}}>
                  Name :
                </Text>{' '}
                Mr Manoj Tibrewal Aakash
              </Text>
              <Text
                style={{
                  color: blackcolor,
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 22,
                }}>
                <Text style={{fontWeight: '700', color: bluecolor}}>
                  Contact No :
                </Text>{' '}
                +91 -11- 25766897
              </Text>
              <Text
                style={{
                  color: blackcolor,
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 22,
                }}>
                <Text style={{fontWeight: '700', color: bluecolor}}>
                  Email :
                </Text>{' '}
                info@dynamitenews.com
              </Text>
              <Text
                style={{
                  color: blackcolor,
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 22,
                }}>
                <Text style={{fontWeight: '700', color: bluecolor}}>
                  Head Office Address :
                </Text>{' '}
                8A/45-G, WEA, Karol Bagh, New Delhi-110005
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContactUs;
