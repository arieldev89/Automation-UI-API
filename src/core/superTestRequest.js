var supertest = require('supertest');
var config = require('./envHelper')

console.log(`${config.api_base}`)
const api = supertest(`${config.api_base}`);


const send_post = async (endpoint, body) => {

    console.log(endpoint)
    console.log(body)
    const response = await api
        .post(endpoint)
        .send(body)
    //.set({'content-type': 'application/json'})


    console.log(response.body)
    console.log(response.status)
    return response;
}


const send_get = (endpoint) => {
    console.log("Not implemented yet")
}

const requestHander = {
    sendGet: send_get,
    sendPost: send_post
}

module.exports = requestHander;