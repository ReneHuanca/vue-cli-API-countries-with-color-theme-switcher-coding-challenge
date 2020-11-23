import axios from 'axios'
const apiURL = 'https://restcountries.eu/rest/v2'

export default axios.create({
    baseURL: apiURL
})