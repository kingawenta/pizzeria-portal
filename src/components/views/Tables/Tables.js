import React from 'react';
import {Link, Route} from 'react-router-dom';
import styles from './Tables.scss';
import TablesBookingId from './TablesBookingId';
import TablesBookingNew from './TablesBookingNew';
import TablesEventsId from './TablesEventsId';
import TablesEventsNew from './TablesEventsNew';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/ordering`} className='active'>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className='active'>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/ordering`} className='active'>Events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className='active'>New Events</Link>
    <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew}/>
    <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/ordering`} component={TablesBookingId}/>
    <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew}/>
    <Route exact path={`${process.env.PUBLIC_URL}/tables/events/ordering`} component={TablesEventsId}/>
  </div>
);

export default Tables;