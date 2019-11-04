import { PRIVATE_API_KEY, PUBLIC_API_KEY } from './apikeys';
import crypto from "crypto";


export const getWeeklyComics = async () => {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts.toString() + PRIVATE_API_KEY + PUBLIC_API_KEY).digest('hex');
  let url = 'https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisWeek&limit=10&apikey=e8c94ee2b9df00711e62ec67be2f7325'
  url += "&ts=" + ts + "&hash=" + hash;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data.results)
    return result.data.results
  } catch (error) {
    console.log(error)
  }
}