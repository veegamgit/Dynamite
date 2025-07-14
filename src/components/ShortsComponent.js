/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Image,
    Share,
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import moment from 'moment';
import { blackcolor, commonstyles, whitecolor, bluecolor } from '../styles/commonstyles';
import Ripple from 'react-native-material-ripple';
import HandlePressable from './HandlePressable';
import FastImage from 'react-native-fast-image';

class ShortsComponent extends React.PureComponent {
    render() {
        const { item, index, propsdata, navigation } = this.props;

        const sharecall = () => {
            const Link_Url = item?.link;
            Share.share({
                message: Link_Url,
            })
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        };

        let decode = require('html-entities-decoder');

        const defaultImage = require('../Assets/Images/home.png');
        
        const imageUrl = item?.web_featured_image
            ? { uri: item?.web_featured_image }
            : defaultImage;
        const source = item?.excerpt?.rendered || '';
        const source1 = source.replace('lazyload', 'text/javascript');

        const apiDate = item?.date;
        const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");
        console.log(imageUrl, 'imageUrl');

        return (
            <View style={styles.wrapper}>
                <View>
                    <Ripple
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            zIndex: 1, // Ensure button is on top
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            borderRadius: 30,
                            width: 30,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('../Assets/Images/cancel.png')} // Your close button image
                            style={{ width: 18, height: 18 }}
                            resizeMode="contain"
                        />
                    </Ripple>
                    <FastImage
                        source={imageUrl}
                        style={{
                            width: '100%',
                            minHeight: 200,
                            maxHeight: 250,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            objectFit: 'fill'
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        onError={(e) => {
                            console.log('❌ FastImage failed to load:', imageUrl.uri, e.nativeEvent);
                        }}
                    />
                    {/* Title */}
                    <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
                        <Text style={{
                            color: blackcolor,
                            fontSize: 20,
                            fontFamily: 'Faustina-Bold',
                            lineHeight: 26,
                            fontWeight: 'bold'
                        }}>
                            {decode(item?.title?.rendered)}
                        </Text>
                    </View>
                    {/* Time and Share View */}
                    <View style={{
                        paddingTop: 6, flexDirection: 'row',
                        justifyContent: 'space-between', paddingHorizontal: 12, alignItems: 'center'
                    }}>
                        <Text style={commonstyles.shortsTime}>{formattedDate}</Text>
                        <HandlePressable onPress={sharecall}
                            style={commonstyles.iconPress}>
                            <Image
                                style={commonstyles.shareIcon}
                                source={require('../Assets/Images/share_black.png')}
                            />
                        </HandlePressable>
                    </View>
                    {/* Description */}
                    <View style={{ padding: 12 }}>
                        <Text numberOfLines={6}
                            ellipsizeMode="tail" style={{ color: blackcolor, fontSize: 16, lineHeight: 26, fontFamily: 'Mukta-Regular' }}>
                            {source1}
                        </Text>
                        <Ripple
                            onPress={() => {
                                navigation.navigate('Details', {
                                    item: item,
                                    detailsData: propsdata,
                                    screenName: "Shorts"
                                });
                            }} style={styles.readFullArticleBtn}>
                            <Text style={styles.readFullArticleBtnText}>
                                Read Full Article
                            </Text>
                        </Ripple>
                    </View>
                </View>

                {(index < 3) && <View style={styles.swipeupWrapper}>
                    <Image
                        style={styles.swipeUpImg}
                        resizeMode='contain'
                        source={require('../Assets/Images/swipeup.png')}
                    />
                    <Text style={styles.swipeUpText}>Swipe up for next shorts</Text>
                </View>}
                {index + 1 === propsdata.length && <Text style={styles.noMoreSwipes}>No More Shorts to Swipe</Text>}
            </View>
        );
    }
}

ShortsComponent.defaultProps = {
    items: [], // Ensure items is at least an empty array
    index: 0,  // Default index to 0
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: whitecolor, borderRadius: 10, position: 'relative',
        height: Dimensions.get('screen').height - 220,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    swipeupWrapper: {
        position: 'absolute', bottom: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'
    },
    swipeUpText: {
        fontSize: 10, fontStyle: 'italic', color: blackcolor
    },
    swipeUpImg: {
        width: 16, height: 16, marginRight: 4
    },
    noMoreSwipes: {
        position: 'absolute', bottom: 10, fontSize: 10, fontStyle: 'italic', alignSelf: 'center', color: blackcolor
    },
    readFullArticleBtn: {
        paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20, backgroundColor: bluecolor,
        width: 150, marginTop: 12,
        alignSelf: 'flex-start',
    },
    readFullArticleBtnText: { fontSize: 16, color: whitecolor, alignSelf: 'center', fontFamily: 'Mukta-Bold', fontWeight: '700' }
})

export default ShortsComponent;
