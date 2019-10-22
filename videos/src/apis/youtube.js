import axios from 'axios';

const KEY = 'AIzaSyB7tIB0m6LO2SB4ib-xxZg8tEAQYnKPCpc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});