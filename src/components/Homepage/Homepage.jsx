import React from 'react';
import Banner from './Banner';
import Hotdeals from './Hotdeals';
import Products from './OurProducts/Products';
import TodaysDeals from './TodaysDeals/TodaysDeals';
// import FeatureProducts from './FeatureProducts/FeatureProducts';
import FeaturedProducts from './FeaturedProducts';
import Portfolio from './Portfolio/Portfolio';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Hotdeals/>
            <Products/>
            <TodaysDeals/>
            {/* <FeatureProducts/> */}
            <FeaturedProducts/>
            <Portfolio/>
        </div>
    );
};

export default Homepage;