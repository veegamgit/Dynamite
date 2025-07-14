/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getTravelAction from '../../redux/actions/getTravelAction';


const TravelScreen = ({
    navigation,
    travelData,
    
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTravelAction('travel'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {travelData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="travel"
        />
    );
};

type Props = {
    travelData: Function,
};
const mapStateToProps = state => ({
    travelData: state.travelReducer?.travelData,
});
const mapDispatchToProps = {
    getTravelAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(TravelScreen);
