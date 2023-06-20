import axios from 'axios'

export const axiosGet = async (endpoint: string) => {
  const { data } = await axios.get(`http://localhost:5000/api/v1/${endpoint}`)
  return data
}

export const axiosPost = async (endpoint: string, data: any) => {
  return await axios.post(`http://localhost:5000/api/v1/${endpoint}`, data)
}

export const axiosDelete = async (endpoint: string, id: string) => {
  return await axios.delete(`http://localhost:5000/api/v1/${endpoint}/${id}`)
}