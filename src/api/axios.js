import Axios from "axios"

const axios = Axios.create({
    baseURL: 'http://localhost:3500/'
})

export default axios