import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response:T = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}