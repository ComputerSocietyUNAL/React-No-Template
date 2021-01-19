import React , { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Products extends Component{
    redireccionar(){
        /* alert('funciono!'); */
        <Redirect push to="/home" />
    }

    render(){
        return(
            <React.Fragment>
                <Link to="/home">
                <img src="/assets/img/Solhidrex_01.png" alt="Solhidrex" width="100%" />
                </Link>
            </React.Fragment>
        );
    }
}