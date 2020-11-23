import axios from '../axios'

class CountryService
{

    getAll() {
        return axios.get(`/all`);
    }

    filterByRegion(region) {
        return axios.get(`/region/${region}`);
    }

    searchByName(name) {
        return axios.get(`/name/${name}`);
    }

}

export default new CountryService();