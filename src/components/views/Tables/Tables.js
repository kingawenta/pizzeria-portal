import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} className='active'>TablesBooking123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className='active'>TablesBookingNew</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} className='active'>TablesEvents123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className='active'>TablesEventsNew</Link>
  </div>
);

export default Tables;