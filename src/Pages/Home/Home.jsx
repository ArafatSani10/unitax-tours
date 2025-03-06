import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Destination from '../../Components/Destination/Destination';
import CheckoutPackeage from '../../Components/CheckoutPackage/CheckoutPackeage';
import EuropeTours from '../../Components/EuropeTour/EuropeTours';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <CheckoutPackeage></CheckoutPackeage>
            <EuropeTours></EuropeTours>
          
        </div>
    );
};

export default Home;