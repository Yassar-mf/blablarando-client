import axios from 'axios'
const postVendre = async (url,data) => {
    const response = await axios.post(url,data)
    return response;
}

export default postVendre