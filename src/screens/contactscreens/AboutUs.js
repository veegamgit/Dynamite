/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';

export default class AboutUs extends Component {
  render() {
    return (
      <SafeAreaView styles={commonstyles.container}>
        <SubHeader
          title={'About Us'}
          isShare={true}
          leftBtnClick={() => this.props.navigation.goBack()}
          isBook={false}
        />
        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text style={ContactStyles.content}>
                डाइनामाइट न्यूज़ भारत के प्रमुख, विश्वसनीय और व्यापक रूप से सराहनीय डिजिटल मीडिया समूहों में से एक है, जिसका मुख्यालय नई दिल्ली में स्थित है। चैनल दस वर्षों से निरंतर राष्ट्र की सेवा में समर्पित है। फिलहाल दो भाषाओं — हिंदी और अंग्रेज़ी — में चैनल कार्यरत है और अनेक डिजिटल प्लेटफॉर्म्स पर उपलब्ध है।              </Text>
              <Text style={ContactStyles.title}>हमारी यात्रा:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ की स्थापना 2015 में देश के जाने-माने पत्रकार मनोज टिबड़ेवाल आकाश ने की थी। आकाश डाइनामाइट न्यूज़ नेटवर्क के संस्थापक और प्रधान संपादक हैं। “ख़बर सच्ची, क्योंकि सोच अच्छी” के मूलमंत्र से प्रेरित यह संस्था सत्य, निष्ठा और विश्वसनीय पत्रकारिता के लिए जानी जाती है।              </Text>
              <Text style={ContactStyles.title}>कार्यक्षेत्र:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ भारत और विदेशों से रियल टाइम अपडेट और ब्रेकिंग न्यूज़ के लिए मान्यता प्राप्त एकमात्र प्लेटफॉर्म है। हालांकि चैनल का विशेष फोकस न्यायपालिका, नौकरशाही और उत्तर प्रदेश से जुड़ी खबरों पर रहता है लेकिन इसके अतिरिक्त हम अनेक श्रेणियों में भी समाचार प्रकाशित करते हैं जिनमें राष्ट्रीय और अंतरराष्ट्रीय राजनीति, खेल, व्यापार, स्वास्थ्य, शिक्षा, यात्रा, जीवनशैली, भोजन, ऑटोमोबाइल, मनोरंजन, तकनीक, व्हील्स, गैजेट्स और अन्य क्षेत्र शामिल हैं।
              </Text>
              <Text style={ContactStyles.title}>समाचार प्रसार:</Text>
              <Text style={ContactStyles.content}>

                हम वर्तमान में पाठ्य (टेक्स्ट), ऑडियो और वीडियो के अनेक फॉर्मेट में समाचारों का प्रकाशन करते हैं, जिससे हमारे दर्शकों को आकर्षक और सहज जानकारी मिलती है।
              </Text>
              <Text style={ContactStyles.title}>वैश्विक पहुंच:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ iOS और एंड्रॉइड मोबाइल ऐप्स पर उपलब्ध है, जिससे उपयोगकर्ता कभी भी, कहीं भी हमारे समाचारों से अपडेट रह सकते हैं। हम Google News, DailyHunt, JioNews, Flipboard, Inkl जैसे प्रमुख राष्ट्रीय और अंतरराष्ट्रीय न्यूज़ एग्रीगेटर्स पर भी मौजूद हैं। चैनल डेस्कटॉप, लैपटॉप, टैबलेट और मोबाइल आदि पर सहजता से साथ उपलब्ध है।
              </Text>
              <Text style={ContactStyles.title}>प्रभावशाली और नीति-निर्धारकों की पसंद:</Text>
              <Text style={ContactStyles.content}>

                हमारे दर्शकों में देश के प्रमुख नीति-निर्धारक और प्रभावशाली लोग शामिल हैं, जिनमें मुख्य रुप से केंद्रीय मंत्री, मुख्यमंत्री, नौकरशाह, उद्योगपति, सार्वजनिक उपक्रमों और बैंकों के प्रमुख, पत्रकार, वकील, प्रतिष्ठित न्यायविद्, फिल्म जगत की हस्तियां, खिलाड़ी और सामाजिक कार्यकर्ता शामिल हैं।
              </Text>
              <Text style={ContactStyles.title}>मान्यता और सूचीबद्धता:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ भारत सरकार के केंद्रीय संचार ब्यूरो (पूर्व में डीएवीपी) और कई राज्य सरकारों के सूचना और जनसंपर्क विभागों के साथ सूचीबद्ध है और मान्यता प्राप्त है।
              </Text>
              <Text style={ContactStyles.title}>सशक्त संपादकीय टीम:</Text>
              <Text style={ContactStyles.content}>
                हमारी ताकत हमारी सशक्त और निडर संपादकीय टीम है, जिसमें देशभर से खोजी पत्रकार शामिल हैं। लगभग 200 संवाददाता, स्ट्रिंगर और फ्रीलांसर हमारे नेटवर्क से जुड़े हैं, जो प्रभावशाली और सार्थक पत्रकारिता के लिए समर्पित हैं।
              </Text>
              <Text style={ContactStyles.title}>उपलब्धियाँ:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ को पत्रकारिता में उत्कृष्टता के लिए कई पुरस्कारों से सम्मानित किया गया है।{'\n'}
                सोशल मीडिया पर प्रभावशाली उपस्थिति:{'\n'}
                हमारे पास X (पूर्व में ट्विटर), फेसबुक, यूट्यूब, टेलीग्राम जैसे प्रमुख प्लेटफॉर्म्स पर लाखों वेरिफाइड फॉलोअर्स हैं, जो हमारी विश्वसनीयता का प्रतीक हैं।
              </Text>
              <Text style={ContactStyles.title}>सलाहकार मंडल:</Text>
              <Text style={ContactStyles.content}>

                डाइनामाइट न्यूज़ को विभिन्न क्षेत्रों के विशेषज्ञों से युक्त एक प्रतिष्ठित सलाहकार मंडल का मार्गदर्शन प्राप्त है, जो रणनीतिक सलाह और समर्थन समय-समय पर प्रदान करता है।
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
