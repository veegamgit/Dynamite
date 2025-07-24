/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Image,
} from 'react-native';
import { bluecolor, commonstyles } from '../styles/commonstyles';
import Ripple from 'react-native-material-ripple';
import HomeComponentOne from './HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';
function SliderUI(props) {
    const { navigation, categoryName } = props;


    const renderItemOne = ({ item }) => (
        <HomeComponentOne
            item={item}
            propsdata={props?.data}
            navigation={navigation}
            categoryName={categoryName} />
    );

    const renderItemTwo = ({ item }) => (
        <HomeComponentTwo
            item={item}
            propsdata={props?.data}
            navigation={navigation}
            categoryName={categoryName} />
    );

    const newdata = Array.isArray(props?.data) ? props.data : [];

    return (
        <SafeAreaView styles={commonstyles.container}>

            <View style={{ paddingHorizontal: 12, marginTop: 16 }}>
                <View style={{marginBottom: 8}}>
                    <Text style={commonstyles.Category}>बड़ी खबर</Text>
                </View>
                         

                {newdata.length > 0 ? <View style={commonstyles.homeCategoryflatView}>
                    <FlatList
                        data={newdata?.slice(0, 1)}
                        showsHorizontalScrollIndicator={false}
                        persistentScrollbar={false}
                        numColumns={1}
                        onEndReachedThreshold={50}
                        getItemLayout={(data, index) => ({
                            length: 40,
                            offset: 40 * index,
                            index,
                        })}
                        renderItem={renderItemOne}
                    />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        persistentScrollbar={false}
                        data={newdata?.slice(1, -1)}
                        onEndReachedThreshold={50}
                        getItemLayout={(data, index) => ({
                            length: 40,
                            offset: 40 * index,
                            index,
                        })}
                        renderItem={renderItemTwo}
                    />
                </View> : <ActivityIndicator size={'large'} color={bluecolor}style={{ paddingVertical: 12 }} />}
            </View>
        </SafeAreaView>
    );
}

export default SliderUI;
