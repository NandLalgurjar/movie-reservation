import axios from 'axios';
import defaultJson from '../config/default.json';

export const getGenereApi = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${defaultJson.BASE_URL}/genere/getGenere`,
            headers: {}
        };

        let response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getMoviesApi = async () => {
    try {
       /*  return {
            "success": true,
            "status": 200,
            "message": "movie list",
            "data": {
                "pagination": [
                    {
                        "totalItems": 3,
                        "totalPages": 1,
                        "page": 1,
                        "pageSize": 5
                    }
                ],
                "data": [
                    {
                        "_id": "66e91c4d10251faeeeef7967",
                        "title": "Deadpool & Wolverine",
                        "description": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine",
                        "posterImage": "http://localhost:8000/images/1726553165776-8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
                        "trailerUrl": "https://youtu.be/ea94nqoxnVQ?si=4vJ0ltv2__VG5Mjv",
                        "duration": 128,
                        "releaseDate": "2024-07-24T00:00:00.000Z",
                        "generes": [
                            "Action",
                            "Comedy"
                        ],
                        "language": "hindi",
                        "rating": 8,
                        "isDeleted": false,
                        "createdAt": "2024-09-17T06:06:05.898Z",
                        "updatedAt": "2024-09-17T07:36:03.416Z",
                        "__v": 0,
                        "movieReleaseStatus": "released"
                    },
                    {
                        "_id": "66e91d9e10251faeeeef7973",
                        "title": "Bad Boys: Ride or Die",
                        "description": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
                        "posterImage": "http://localhost:8000/images/1726553502380-oGythE98MYleE6mZlGs5oBGkux1.jpg",
                        "trailerUrl": "https://youtu.be/ea94nqoxnVQ?si=4vJ0ltv2__VG5Mjv",
                        "duration": 115,
                        "releaseDate": "2024-06-05T00:00:00.000Z",
                        "generes": [
                            "Crime",
                            "Thriller"
                        ],
                        "language": "hindi",
                        "rating": 8,
                        "isDeleted": false,
                        "createdAt": "2024-09-17T06:11:42.484Z",
                        "updatedAt": "2024-09-17T07:36:03.416Z",
                        "__v": 0,
                        "movieReleaseStatus": "released"
                    },
                    {
                        "_id": "66e91f0c10251faeeeef7977",
                        "title": "Kalki 2898-AD",
                        "description": "In the year 2898 AD, around 6000 years after Kurukshetra war, Ashwatthama gears up for his final battle of redemption at the sign of hope in a dystopian world and Bhairava, a wisecracking and self-interested bounty hunter, tired of the perilous life becomes the hurdle in the process.",
                        "posterImage": "http://localhost:8000/images/1726553868556-rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",
                        "trailerUrl": "https://youtu.be/aninoDcPWo4?si=NaYS-21ARFyCE0Uk",
                        "duration": 176,
                        "releaseDate": "2024-06-26T00:00:00.000Z",
                        "generes": [
                            "Drama",
                            "Fantasy"
                        ],
                        "language": "hindi",
                        "rating": 8,
                        "isDeleted": false,
                        "createdAt": "2024-09-17T06:17:48.692Z",
                        "updatedAt": "2024-09-17T07:36:03.416Z",
                        "__v": 0,
                        "movieReleaseStatus": "released"
                    }
                ]
            }
        } */
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://192.168.0.29:8000/movie/getMovies',
            headers: {}
        };

        const response = axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}