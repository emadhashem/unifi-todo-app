import { Weather } from "../componets/weather-comps/types"

const API_KEY = "061d7afc8f7aa2e69a09b8d1cc4f5a5f"

const CURRENT_WATHER_API = (lon : number, lat : number) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
export const getCurrentWheather = async () : Promise <any> => {
    const countryData = await getCountryData()
    const resJson = await fetch(CURRENT_WATHER_API(countryData.lat , countryData.lon))
    const res = await resJson.json()
    return res
}

const COUNTRY_API = `http://api.openweathermap.org/geo/1.0/direct?q=Cairo,EG&limit=1&appid=${API_KEY}`
const getCountryData = async () : Promise <ICountry> => {
    const resJson = await fetch(COUNTRY_API)
    const res = await resJson.json()
    
    return {
        countryCode : res[0].country,
        lat : res[0].lat,
        lon : res[0].lon
    }
}
interface ICountry {
    countryCode : string
    lat : number
    lon : number
}

const WEATHER_5_DAYS_API = (lon : number, lat : number) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
export const get5DaysWeather = async () : Promise <any> => {
    const countryData = await getCountryData()
    const resJson = await fetch(WEATHER_5_DAYS_API(countryData.lat , countryData.lon))
    const res = await resJson.json()
    return res
}