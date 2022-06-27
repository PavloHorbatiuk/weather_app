import axios from "axios";

const instance = axios.create({
	baseURL: `https://api.openweathermap.org`,
});
export const weatherApi = {
	getData() {
		return instance.get(
			`/data/2.5/weather?q=Bilohiria&appid=${process.env.REACT_APP_API_KEY}`
		);
	},
	setDataLocation(location: string) {
		return instance.get(
			`/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
		);
	},
};
