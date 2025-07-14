/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getElectionsAction from '../../redux/actions/getElectionsAction';


const ElectionsScreen = ({
    navigation,
    electionData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getElectionsAction('elections'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {electionData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="elections"
        />
    );
};

type Props = {
    electionData: Function,
};
const mapStateToProps = state => ({
    electionData: state.electionsReducer?.electionData,
});
const mapDispatchToProps = {
    getElectionsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ElectionsScreen);
