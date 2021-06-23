import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import WaiterOrderId from './components/views/Waiter/WaiterOrderId';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventsId from './components/views/Tables/TablesEventsId';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard}/>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />          
          <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
          <Route path={process.env.PUBLIC_URL + '/waiter'} component={Waiter}/>
          <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
             Learn React
              </a>
            </header>
          </div>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
