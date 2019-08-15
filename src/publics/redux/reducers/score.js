const initialState = {
    dataList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_SCORES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_SCORES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                dataList: action.payload.data.result
            };
        case 'GET_SCORE_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_SCORE_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_SCORE_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                listId: action.payload.data.result
            };
        case 'POST_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                dataList: [state.dataList, action.payload]
            };

        default:
            return state;
    }
}

export default data;          