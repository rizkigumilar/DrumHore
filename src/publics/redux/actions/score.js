import axios from 'axios';

let url = `http://192.168.6.191:3003`


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