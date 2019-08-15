import axios from 'axios';


let url = `https://drumhore.herokuapp.com`


export const getLeaderboard = () => {
    return {
        type: 'GET_SCORES',
        payload: axios.get(`${url}/scores`,
            {
                headers: {
                    "authorization": "x-control-app"
                }
            })
    }
}

export const getScoreId = (userid) => {
    return {
        type: 'GET_SCORES_ID',
        payload: axios.get(`${url}/scores/${Number(userid)}`,
            {
                headers: {
                    "authorization": "x-control-app"
                }
            })
    }
}

export const postScores = (userid, token, data) => {
    console.log(token)
    return {
        type: 'POST_SCORES',
        payload: axios.post(`${url}/scores`, data,
            {
                headers: {
                    "authorization": "x-control-app",
                    "x-access-token": `bearer: ${token}`,
                    "x-control-user": userid
                }
            })
    }
}
export const updateScore = (userid, token, data) => {
    console.log(data)
    return {
        type: 'UPDATE_SCORE',
        payload: axios.patch(`${url}/score`, data,
            {
                headers: {
                    "authorization": "x-control-user",
                    "x-access-token": `bearer: ${token}`,
                    "x-control-user": userid
                }
            })
    }
}