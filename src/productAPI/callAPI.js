import axios from 'axios';

//export default function callerAPI(endpoint, method = 'GET', body) {
//    return axios({
//        method: method,
//        url: ``,
//        data: body
//    }).catch(err => {
//        console.log(err);
//    });
//};

export default axios.create({
    baseURL: "https://6090eb7c3847340017021f71.mockapi.io/mobile/",
});


