import axios from "axios";
import { APIURL } from "../constants";

export async function getApiData(url: string, signal: AbortSignal) {
  try {
    const res = await axios(`${APIURL}${url}`, { signal });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function postApiData(url: string, data: any, signal: AbortSignal) {
  try {

    const res = await axios.post(`${APIURL}${url}`, data, { signal });
    return res.data;
  } catch (error) {
    throw error;
  }
}
