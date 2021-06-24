import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} className='active'>Edit Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} className='active'>New Order</Link>
  </div>
);

export default Waiter;