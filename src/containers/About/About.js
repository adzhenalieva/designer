import React, {Component, Fragment} from 'react';
import Avatar from "../../assets/images/avatar.jpg"

import './About.css';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="About">
                    <h2 className="AboutTitle">Beautiful food pictures</h2>
                    <img className="AboutImage" src={Avatar} alt="avatar"/>
                    <p className="AboutText">Image by <a className="ExternalLink"
                        href="https://pixabay.com/ru/users/lukasbieri-4664461/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2378758">Lukas
                        Bieri</a> from <a className="ExternalLink"
                        href="https://pixabay.com/ru/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2378758">Pixabay</a>.
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default MainPage;