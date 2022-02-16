const axios = require('axios')

const send_post = async (endpoint, body) => {

    var headers = {
        'Content-Type': 'application/json'
    }
    post_response = await axios.post(`https://api.qawyre.com/v2${endpoint}`, body, { headers: headers })
    .then(function (response) {
        console.log(response.response.data)
        return response;
    }).catch(function (response) {
        console.log(response)
        return response;
    });


    /*
    var config = {
        method: 'post',
        url: `https://api.qawyre.com/v2${endpoint}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: body
    };

    console.log(config)

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        .catch(function (error) {
            console.log("request failed")
        }); */
    console.log("request made")
    return post_response;

}


const send_get = (endpoint) => {
    console.log("Not implemented yet")
}

const axiosHandler = {
    sendGet: send_get,
    sendPost: send_post
}

module.exports = axiosHandler;