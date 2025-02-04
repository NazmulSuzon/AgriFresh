import React from 'react';
import styles from './Hotdeals.module.css';

const Hotdeals = () => {
    return (
        <div className='grid grid-rows-1 grid-flow-col gap-8 container mx-auto mt-20'>
            <div className={styles.zoom}><img src="/assets/hotSales/1.webp" alt="" /></div>
            <div className={styles.zoom}><img src="/assets/hotSales/2.webp" alt="" /></div>
            <div className={styles.zoom}><img src="/assets/hotSales/3.webp" alt="" /></div>
        </div>
    );
};

export default Hotdeals;