import {
    SKILLS_FETCH_START,
    SKILLS_FETCH_SUCCESS,
    SKILLS_FETCH_FAILURE
} from '../actionTypes'



const initialState = {
    data:{},
    loading:true
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SKILLS_FETCH_START:
            return state;
        case SKILLS_FETCH_SUCCESS:
            return {
                data: payload,
                loading: false
            };
        case SKILLS_FETCH_FAILURE:
            return state;
        default:
            return state
    }
}