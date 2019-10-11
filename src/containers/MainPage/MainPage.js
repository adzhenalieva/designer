import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchListings} from "../../store/action";
import Spinner from "../../components/UI/Spinner/Spinner";
import MainBlock from "../../components/MainBlock/MainBlock";

import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
                <Fragment>
                    <MainBlock>
Welcome!
                    </MainBlock>
                    {this.props.loading ?
                    <Spinner/> :
                    <div className="Camps">

                    </div>}
                </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchListings: number => dispatch(fetchListings(number)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
