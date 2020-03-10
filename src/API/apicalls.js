import { PRIVATE_API_KEY, PUBLIC_API_KEY } from './apikeys';
import { getWeeklyComicsCleaner, getComicIssueCleaner, getEventsCleaner, getCharactersCleaner } from './cleaner';
import crypto from "crypto";


export const getWeeklyComics = async () => {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts.toString() + PRIVATE_API_KEY + PUBLIC_API_KEY).digest('hex');
  let url = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=title&apikey=e8c94ee2b9df00711e62ec67be2f7325'
  url += "&ts=" + ts + "&hash=" + hash;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return getWeeklyComicsCleaner(result.data.results)
  } catch (error) {
    console.log(error)
  }
}

export const getComicIssue = async (id) => {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts.toString() + PRIVATE_API_KEY + PUBLIC_API_KEY).digest('hex');
  let url = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=e8c94ee2b9df00711e62ec67be2f7325`
  url += "&ts=" + ts + "&hash=" + hash;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return getComicIssueCleaner(result.data.results);
  } catch (error) {
    console.log(error)
  }
}

export const getEvents = async () => {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts.toString() + PRIVATE_API_KEY + PUBLIC_API_KEY).digest('hex');
  let url = `https://gateway.marvel.com:443/v1/public/events?orderBy=-startDate&limit=3&apikey=e8c94ee2b9df00711e62ec67be2f7325`;
  url += "&ts=" + ts + "&hash=" + hash;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return getEventsCleaner(result.data.results);
  } catch (error) {
    console.log(error);
  }
}

export const getCharacters = async (searchValue) => {
  const ts = new Date().getTime();
  const hash = crypto.createHash('md5').update(ts.toString() + PRIVATE_API_KEY + PUBLIC_API_KEY).digest('hex');
  let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&apikey=e8c94ee2b9df00711e62ec67be2f7325`;
  url += "&ts=" + ts + "&hash=" + hash;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return getCharactersCleaner(result.data.results);
  } catch (error) {
    console.log(error);
  }
}