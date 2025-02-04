import React from 'react';
import Banner from './Banner';
import Hotdeals from './Hotdeals';
import OurProducts from './OurProducts/OurProducts';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Hotdeals/>
            <OurProducts/>
        </div>
    );
};

export default Homepage;