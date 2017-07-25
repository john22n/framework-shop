import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing'
import Shop from './components/Shop/Shop';
import Detail from './components/Details/Details'
import Cart from './components/Cart/Cart'
import ThankYou from './components/ThankYou/ThankYou';


export default (
    <Switch>
        <Route component={ Landing } exact path="/" />
        <Route component={ Shop }  path="/shop/" />
        <Route component={ Detail } path="/Details/:name" />
        <Route component={ Cart } path="/Cart" />
        <Route component={ ThankYou } path="/thank-you" />
    </Switch>

)


