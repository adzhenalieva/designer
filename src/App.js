import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import MainPage from "./containers/MainPage/MainPage";
import About from "./containers/About/About";

import './App.css';
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainMav/MainNav";


class App extends Component {
    render() {
        return (
            <div className="App">
                <MainNav/>
                <div className="Wrapper Container">
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/about" exact component={About}/>
                    </Switch>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default App;
