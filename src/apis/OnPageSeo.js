import axios from 'axios';

const baseURL = 'https://api.dataforseo.com/v3';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: 'Basic bmVoYWNoYXVoYW5idWlsZHNAZ21haWwuY29tOjVmZWE4ZGIyNDA5MmM3Mzc=',
    'Content-Type': 'application/json',
  },
});

export const fetchDataForSEO = async (requestData) => {
  try {
    const response = await api.post('/on_page/instant_pages', requestData);
    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
