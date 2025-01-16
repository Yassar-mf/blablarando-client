import axios from 'axios'

const postLogin = async (routeN) => {
    const monEmail = routeN.params ? routeN.params.monEmail : '' 
    const url = routeN.params ? routeN.params.url : '' 
    const response = await axios.post(url,{email:monEmail})

    return response;
}

export default postLogin;