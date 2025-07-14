/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import CategoryUI from '../../components/CategoryUI';
import { BaseUrl, CategoryUrl, India } from '../../utilities/urls';
import { useDispatch } from 'react-redux';
import getIndiaAction from '../../redux/actions/getIndiaAction';

const IndiaScreen = ({ navigation, indiaData, route }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndiaAction('india'));

    }, []);

    return (
        <CategoryUI
            data={indiaData}
            navigation={navigation}
            title={route.name}
            categoryName="india"
        />
    );
};

type Props = {
    navigation: Function; // Replace `any` with the correct type
    route: Function;      // Replace `any` with the correct type
};

export default IndiaScreen;
