export interface weatherType {
	id: number;
	main: string;
	description: string;
}
export interface WindType {
	speed: number;
	deg: number;
	gust: number;
}

export interface MainType {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	humidity: 48;
}
export interface DataType {
	main: MainType;
	name: string;
	weather: Array<weatherType>;
	wind: WindType;
}
