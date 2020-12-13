import axios from "axios";

export class MoviesService {
  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _withBaseUrl(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${
      MoviesService.API_KEY
    }`;
  }

  static _withBaseUrlYoutube(hash) {
    return `https://www.youtube.com/watch?v=${hash}`;
  }  

  static getPopularMovies() {
    return axios(MoviesService._withBaseUrl("movie/popular"));
  }

  static getDetailMovies(id) {
    return axios(MoviesService._withBaseUrl(`movie/${id}`));
  }  

  static getVideosMovies(id) {
    return axios(MoviesService._withBaseUrl(`movie/${id}/videos`));
  }   

  static getRecommendationMovies(id) {
    return axios(MoviesService._withBaseUrl(`movie/${id}/recommendations`));
  } 

  static getURlImg() {
    return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  }

  
}
