import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Destination from '../../Components/Destination/Destination';
import CheckoutPackeage from '../../Components/CheckoutPackage/CheckoutPackeage';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <CheckoutPackeage></CheckoutPackeage>
          
        </div>
    );
};

export default Home;