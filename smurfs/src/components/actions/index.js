import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
  
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};