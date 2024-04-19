import axios from 'axios';

const API_KEY = '43475208-4587723f345d98ae3c65e89fc';

const apiUrl = `https://pixabay.com/api/videos/?key=${API_KEY}`;

const formatUrl = (params) => {
  const url = apiUrl + '&per_page-25&safesearch=true&editors_choice=true';
  if (!params) return url;
  const paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    const value = key == 'q' ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log('final url', url);
};
export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    console.log('Got error', err.message);
    return { success: false, msg: err.message };
  }
};
