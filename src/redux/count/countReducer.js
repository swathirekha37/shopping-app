import { COUNT_NUMBER } from "./countType";

const INTIAL_STATE = {
    number : 0
}
const countReducer =  (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case COUNT_NUMBER:
            return {
                ...state,
                number : state.number + 1
            }
        default:
            return state;
    }
};

export default countReducer