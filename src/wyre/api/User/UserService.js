const requestHandler = require("../../../core/superTestRequest")


const accountEndpoint = "/accounts";

const createUser = async (body) => {


    const response = await requestHandler.sendPost(accountEndpoint, body)
    console.log("********Create User Response**********")
    console.log(response.body)
    return response;
}


const userService = {
    createUser: createUser
}


module.exports = userService;