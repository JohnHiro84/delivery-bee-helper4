
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import '../assets/stylesheets/app.css';


import NavBarContainer from './nav/navbar_container';
import Landing from './landing/landing';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import ProfileContainer from './profile/profile_container';

import AvailableOrderIndex from "./order_index/available_order_index_container";
import AcceptedOrderIndex from "./order_index/accepted_order_index_container";
import CompletedOrderIndex from "./order_index/completed_order_index_container";

import OrderDetail from "./order_detail/order_detail_container";

import ToastNotification from "./toast/toast_notification_container";

const App = () => (
  <div className="app-container">

    <NavBarContainer />
    <ToastNotification />

    <Switch>

      <AuthRoute exact path="/" component={Landing} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile" component={ProfileContainer} />

      <ProtectedRoute exact path="/events" component={AvailableOrderIndex} />

      <ProtectedRoute exact path="/orders" component={AvailableOrderIndex} />
      <ProtectedRoute exact path="/accepted" component={AcceptedOrderIndex} />
      <ProtectedRoute exact path="/completed" component={CompletedOrderIndex} />

      <ProtectedRoute path="/api/orders/:orderId" component= {OrderDetail} />

    </Switch>
  </div>
);

export default App;
