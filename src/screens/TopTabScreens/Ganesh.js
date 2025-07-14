/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getElectionsAction from '../../redux/actions/getElectionsAction';
import getGaneshAction from '../../redux/actions/getGaneshAction';


const GaneshScreen = ({
    navigation,
    ganeshData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGaneshAction('ganesh-chaturthi'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {ganeshData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="ganesh-chaturthi"
        />
    );
};

type Props = {
    ganeshData: Function,
};
const mapStateToProps = state => ({
    ganeshData: state.ganeshReducer?.ganeshData,
});
const mapDispatchToProps = {
    getGaneshAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(GaneshScreen);
