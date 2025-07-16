/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <SafeAreaView styles={commonstyles.container}>
                <SubHeader title={'Privacy Policy '} isMenu={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    isBook={false}
                />
                <ScrollView>
                    <View style={ContactStyles.mainView}>
                        <View style={ContactStyles.subView}>
                            <Text style={ContactStyles.title}>DYNAMITE NEWS NETWORK PRIVATE LIMITED (“DNNPL”)</Text>

                            <Text style={ContactStyles.content}> respects the privacy of its users and is committed to protect it in all respects. With a view to offer enriching internet experience to its users DNNPL offers a vast repository of channels and a variety of services. You may read ‘About Us’ to know more about DNNPL.
                                {"\n"} The information about the user as collected by DNNPL is:</Text>

                            <Text style={ContactStyles.title}>(A) Information supplied by users and Registration data:</Text>
                            <Text style={ContactStyles.content}>When you register on the Site/Website, Application and for the Service, we ask that you provide basic contact Information such as your name, sex, age, address, pin code, contact number, occupation, interests and email address etc. When you register using your other accounts like on Facebook, Twitter, Gmail etc. we shall retrieve Information from such account to continue to interact with you and to continue providing the Services.
                                {"\n"}Subscription or paid service data:
                                {"\n"}When you chose any subscription or paid service, we or our payment gateway provider may collect your purchase, address or billing information, including your credit card number and expiration date etc. However, when you order using an in-app purchase option, same are handled by such platform providers. The subscriptions or paid Services may be on auto renewal mode unless cancelled. If at any point, you do not wish to auto-renew your subscription, you may cancel your subscription before the end of the subscription term.
                                {"\n"}Voluntary information:
                                {"\n"}We may collect additional information at other times, including but not limited to, when you provide feedback, change your content or email preferences, respond to a survey, or communicate with us.
                            </Text>
                            <Text style={ContactStyles.title}>(B) Information automatically tracked while navigation (Information):</Text>

                            <Text style={ContactStyles.content}>To improve the responsiveness of the sites for our users, we may use “cookies”, or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user’s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Newsletter). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.
                                {"\n"}Our web servers automatically collect limited information about your computer’s connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data – such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come.
                            </Text>
                            <Text style={ContactStyles.title}>LINKS TO THIRD PARTY SITES:</Text>
                            <Text style={ContactStyles.content}>DNNPL may include links to other websites. Such sites are governed by their respective privacy policies, which are beyond our control. Once you leave our servers (you can tell where you are by checking the URL in the location bar on your browser), use of any information you provide is governed by the privacy policy of the operator of the site you are visiting. That policy may differ from ours. If you can’t find the privacy policy of any of these sites via a link from the site’s homepage, you should contact the site directly for more information.</Text>
                            <Text style={ContactStyles.title}>INFORMATION FOR AD-SERVERS</Text>
                            <Text style={ContactStyles.content}>When we present information to our advertisers to help them understand our audience and confirm the value of advertising on our websites or Applications — it is usually in the form of aggregated statistics on traffic to various pages / content within our websites or Applications. We use third-party advertising companies to serve ads when you visit our websites or Applications. These companies may use information (not including your name, address, email address or telephone number or other personally identifiable information) about your visits to this and other websites or application, in order to provide advertisements about goods and services of interest to you.
                               {"\n"}We do not provide any personally identifiable information to third party websites / advertisers / ad-servers without your consent. 
                            </Text>
                            <Text style={ContactStyles.title}>INFORMATION USE BY THE COMPANY</Text>
                           
                            <Text style={ContactStyles.content}>The Information as supplied by the users enables us to improve the Services and provide you the most user-friendly experience. In some cases/provision of certain service(s) or uDNNPLity(ies), we may require your contact address as well. All required information is service dependent and the Company may use the above said user Information to, maintain, protect, and improve the Services (including advertising on the “Application”) and for developing new services. We may also use your email address or other personally identifiable information to send commercial or marketing messages without your consent [with an option to subscribe / unsubscribe (where feasible)]. We may, however, use your email address without further consent for non-marketing or administrative purposes (such as notifying you of major changes, for customer service purposes, billing, etc.).
                                {"\n"}Any personally identifiable information provided by you will not be considered as sensitive if it is freely available and / or accessible in the public domain like any comments, messages, blogs, scribbles available on social platforms like facebook, twitter etc.
                                {"\n"}Any posted/uploaded/conveyed/communicated by users on the public sections of the “Application” becomes published content and is not considered personally identifiable information subject to this Privacy Policy.
                                {"\n"}In case you choose to decline to submit personally identifiable information on the Application, we may not be able to provide certain services on the Application to you. We will make reasonable efforts to notify you of the same at the time of opening your account. In any case, we will not be liable and or responsible for the denial of certain services to you for lack of you providing the necessary personal information.
                                {"\n"}When you register with the Application or Services, we contact you from time to time about updation of your personal information to provide the users such features that we believe may benefit / interest you.</Text>
                            <Text style={ContactStyles.title}>ACCESSING AND UPDATING PERSONAL INFORMATION</Text>
                            <Text style={ContactStyles.content}>When you use the Services Site (or any of its sub sites), we make good faith efforts to provide you, as and when requested by you, with access to your personal information and shall further ensure that any personal information or sensitive personal data or information found to be inaccurate or deficient shall be corrected or amended as feasible, subject to any requirement for such personal information or sensitive personal data or information to be retained by law or for legitimate business purposes. We ask individual users to identify themselves and the information requested to be accessed, corrected or removed before processing such requests, and we may decline to process requests that are unreasonably repetitive or systematic, require disproportionate technical effort, jeopardize the privacy of others, or would be extremely impractical (for instance, requests concerning information residing on backup tapes), or for which access is not otherwise required. In any case, where we provide information access and correction, we perform this service free of charge, except if doing so would require a disproportionate effort. Because of the way we maintain certain services, after you delete your information, residual copies may take a period of time before they are deleted from our active servers and may remain in our backup systems.</Text>
                            <Text style={ContactStyles.title}>INFORMATION SECURITY</Text>
                            <Text style={ContactStyles.content}>We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data. All information gathered on DNNPL is securely stored within the Company controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access.
                               {"\n"} We use third-party advertising companies to serve ads when you visit or use our website, mobile application or services. These companies may use information (not including your name, address, email address or telephone number) about your visits or use to particular website, mobile application or services, in order to provide advertisements about goods and services of interest to you.
                            </Text>
                            <Text style={ContactStyles.title}>UPDATES/CHANGES</Text>
                            <Text style={ContactStyles.content}>However the Internet is an ever evolving medium. We may change our privacy policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.
                                {"\n"}If at any time, you believe that DNNPL or its users/members have not adhered to these principles, please notify us by e-mail at legal@dynamitenews.com and we will use all commercially reasonable efforts to promptly determine and correct the problem.
                            </Text>
                            <Text style={ContactStyles.title}>ACCEPTANCE OF PRIVACY POLICY</Text>
                            <Text style={ContactStyles.content}>By using DNNPL’s sites and services, you signify your acceptance of this Privacy Policy. If you do not agree or are not comfortable with any policy described in this Privacy statement, your only remedy is to discontinue use of DNNPL sites. We reserve the right, to modify this Privacy Policy at any time.</Text>


                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}