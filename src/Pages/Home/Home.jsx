import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Destination from '../../Components/Destination/Destination';
import CheckoutPackeage from '../../Components/CheckoutPackage/CheckoutPackeage';
import EuropeTours from '../../Components/EuropeTour/EuropeTours';
import TrendingPackeages from '../../Components/TrendingPackeages/TrendingPackeages';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <CheckoutPackeage></CheckoutPackeage>
            <EuropeTours></EuropeTours>
            <TrendingPackeages></TrendingPackeages>
        </div>
    );
};

export default Home;