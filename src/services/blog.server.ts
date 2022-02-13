import axios from 'axios';

const API_URL = 'https://taro-blogs.herokuapp.com';
export const getBlogs = async () => {
  try {
    const data = await axios.get(`${API_URL}/blogs`);
    return data.data;
  } catch (error) {
    throw new Error("Get list blogs failed: " + error);
  }
}