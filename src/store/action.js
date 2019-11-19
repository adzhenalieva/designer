import axios from '../axios';


export const LISTING_REQUEST = 'LISTING_REQUEST';
export const LISTING_SUCCESS = 'LISTING_SUCCESS';
export const LISTING_FAILURE = 'LISTING_FAILURE';

export const listingRequest = () => ({type: LISTING_REQUEST});
export const listingSuccess = response => ({type: LISTING_SUCCESS, response});
export const listingFailure = error => ({type: LISTING_FAILURE, error});


export const fetchListings = () => {
    return async dispatch => {
            dispatch(listingRequest());
            try {
                const response = await axios.get('/images.json');
                dispatch(listingSuccess(response.data));
                console.log(response.data);
            } catch (e) {
                dispatch(listingFailure(e));
            }

    }
};
