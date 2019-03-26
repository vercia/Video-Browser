import axios from 'axios' //importujemy axiosa

const KEY = 'AIzaSyC-XRBzlQjU_IOZ2TDiixYVW4BrkNqXoRc' //pobrane z console.developers.google.com

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 25,
        key: KEY
    }
})