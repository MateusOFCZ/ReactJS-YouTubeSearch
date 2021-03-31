import axios from 'axios';

var key = 'YOR_YOUTUBE_KEY';

const api = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=searchSortUnspecified&key=${key}&q=`
});

export default api;