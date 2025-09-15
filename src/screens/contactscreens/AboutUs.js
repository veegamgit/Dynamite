/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {commonstyles} from '../../styles/commonstyles';
import {ContactStyles} from '../../styles/contactScreenStyles';
import {useTranslation} from 'react-i18next';

const AboutUs = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView styles={commonstyles.container}>
      <SubHeader
        title={t('aboutus')}
        isShare={true}
        leftBtnClick={() => navigation?.goBack()}
        isBook={false}
      />
      <ScrollView>
        <View style={ContactStyles.mainView}>
          <View style={ContactStyles.subView}>
            <Text style={ContactStyles.content}>{t('aboutpara1')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead1')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara2')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead2')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara3')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead3')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara4')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead4')}</Text>
            <Text style={ContactStyles.content}>
              {t('aboutpara5')}
              {'\n'}
              {t('aboutpara6')}
            </Text>
            <Text style={ContactStyles.title}>{t('abouthead5')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara7')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead6')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara8')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead7')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara9')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead8')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara10')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead9')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara11')}</Text>
            <Text style={ContactStyles.title}>{t('abouthead10')}</Text>
            <Text style={ContactStyles.content}>{t('aboutpara12')}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
