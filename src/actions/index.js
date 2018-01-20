import Axios from 'axios';

const API_KEY = '527106ca99f2da8fd73ace10f19c0b34';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`

	const request = Axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}