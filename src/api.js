
import {GEO_API_KEY, WEATHER_API_KEY} from './keys';

/* To Make It Work: */
/* 1. Generate a API KEY from openweathermap and put it in WEATHER_API_KEY*/
/* 2. Generate a API KEY from GeoDB and put it in WEATHER_API_KEY*/

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";


export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_KEY_API = WEATHER_API_KEY;