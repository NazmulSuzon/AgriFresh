import React from 'react';
import Banner from './Banner';
import Hotdeals from './Hotdeals';
import OurProducts from './OurProducts/OurProducts';
import Products from './OurProducts/Products';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Hotdeals/>
            <OurProducts/>
            <Products/>
        </div>
    );
};

export default Homepage;