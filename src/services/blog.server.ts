import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything?';
const API_KEY = '3fdecd41dedc42d0af1ec58bde83e046';
const q = 'tesla';
const from = new Date().toISOString().split('T')[0];
const sortBy = 'publishedAt';
export const getBlogs = async () => {
  try {
    const data = await axios.get(`${API_URL}q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${API_KEY}`);
    return data.data;
  } catch (error) {
    throw new Error("Get list blogs failed: " + error);
  }
}