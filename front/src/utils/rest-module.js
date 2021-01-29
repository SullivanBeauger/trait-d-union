import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://traitdunion.api.recette.grandest.fr/api/v1'
  //baseURL: process.env.REACT_APP_API_BASE_URL
})

export default axiosInstance
