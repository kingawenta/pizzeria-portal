import React from 'react';
import {Link, Route} from 'react-router-dom';
import styles from './Waiter.scss';
import WaiterOrderId from './WaiterOrderId';
import WaiterOrderNew from './WaiterOrderNew';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/edit`} className='active'>Edit Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} className='active'>New Order</Link>
    <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/edit`} component={WaiterOrderNew}/>
    <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderId}/>
  </div>
);

export default Waiter;