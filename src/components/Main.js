import React , { Component } from 'react';
import Header from './navigation';
import { Switch, Route, Redirect } from 'react-router-dom';

import Solhidrex from './Solhidrex/index';
import Laxium from './Laxium/index';
import Labinpina from './Labinpina/index';
import Diarrea from './Diarrea/index';
import Dimenol from './Dimenol/index';
import ContactUS from './ContactUs/index';
import Home from './Home';
import Footer from './Footer';



export default class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/solhidrex" component={Solhidrex}></Route>
                        <Route path="/labinpina" component={Labinpina}></Route>
                        <Route path="/laxium" component={Laxium}></Route>
                        <Route path="/dimenol" component={Dimenol}></Route>
                        <Route path="/diarrea" component={Diarrea}></Route>
                        <Route path="/contactus" component={ContactUS}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Redirect to="/home" component={Home}></Redirect>
                    </Switch>
                <Footer />
            </div>
        );
    }
}