import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} className='active'>WaiterOrder123abc</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} className='active'>WaiterOrderNew</Link>
  </div>
);

export default Waiter;