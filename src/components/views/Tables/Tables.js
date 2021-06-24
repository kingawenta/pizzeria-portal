import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} className='active'>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className='active'>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} className='active'>Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className='active'>New Events</Link>
  </div>
);

export default Tables;