import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './MainNav.css';


class Nav extends Component {

    render() {
        return (
            <header className="Header">
                <div className="Container clearfix">
                    <NavLink className="Logo" exact={true} to="/">@FoodPic</NavLink>
                    <nav className="MainNav">
                        <NavLink className="NavLink" activeClassName="Active" exact={true} to="/">Home</NavLink>
                        <NavLink className="NavLink" activeClassName="Active" exact={true} to="/about">About</NavLink>

                    </nav>
                </div>
            </header>
        );
    }
}

export default Nav;