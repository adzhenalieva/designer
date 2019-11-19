import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchListings} from "../../store/action";
import Spinner from "../../components/UI/Spinner/Spinner";

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        let images = null;
        if (this.props.listings) {
            images = this.props.listings.map((image, id) => (
                <div className="CampCard" key={id}>
                    <img className="CampImage" src={image.url} alt="FoodPic"/>
                    <p className="CampTitle">{image.title}</p>
                </div>
            ))
        }
        return (
            <Fragment>
                {this.props.loading ?
                    <Spinner/> :
                    <div className="Camps">
                        {images}
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
        fetchListings: () => dispatch(fetchListings()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
