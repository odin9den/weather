import { WeatherData } from "./weather-data";
import { WeatherMainInfo } from "./weather-main-info";

export class WeatherLoadResponse {
    public name: string;
    public weather: WeatherData[];
    public main: WeatherMainInfo;
}