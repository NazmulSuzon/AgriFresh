import React from 'react';
import Banner from './Banner';
import Hotdeals from './Hotdeals';
// import OurProducts from './OurProducts/OurProducts';
import Products from './OurProducts/Products';
import TodaysDeals from './TodaysDeals/TodaysDeals';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Hotdeals/>
            {/* <OurProducts/> */}
            <Products/>
            <TodaysDeals/>
        </div>
    );
};

export default Homepage;