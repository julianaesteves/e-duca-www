import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://educa-application-web.eastus.cloudapp.azure.com/'

const getUser = () => {
  return axios.get(API_URL + 'auth/usuario-secao', {
    headers: authHeader()
  })
}

const getAllContent = () => {
  return axios.get(API_URL + 'api/conteudos', { headers: authHeader() })
}

const getUserContent = () => {
  return axios.get(API_URL + 'api/conteudos/usuario-secao', {
    headers: authHeader()
  })
}

const registerContent = (data) => {
  return axios.post(API_URL + 'api/conteudos', data, { headers: authHeader() })
}

const registerTopic = (data) => {
  return axios.post(API_URL + 'api/topicos', data, { headers: authHeader() })
}

const registerRating = (data) => {
  return axios.post(API_URL + 'api/conteudos/avaliacoes', data, { headers: authHeader() })
}

const updateContent = (id, data) => {
  return axios.put(API_URL + `api/conteudos/${id}`, data, {
    headers: authHeader()
  })
}

const updateTopic = (id, data) => {
  return axios.put(API_URL + `api/topicos/${id}`, data, {
    headers: authHeader()
  })
}

const deleteContent = (id) => {
  return axios.delete(API_URL + `api/conteudos/${id}`, {
    headers: authHeader()
  })
}

const getHability = () => {
  return axios.get(API_URL + 'api/habilidades', { headers: authHeader() })
}

const getTopic = () => {
  return axios.get(API_URL + 'api/topicos/usuario-secao', { headers: authHeader() })
}

const getAllTopics = () => {
  return axios.get(API_URL + 'api/topicos', { headers: authHeader() })
}

const deleteTopic = (id) => {
  return axios.delete(API_URL + `api/topicos/${id}`, {
    headers: authHeader()
  })
}

const postService = {
  getUser,
  getAllContent,
  getUserContent,
  registerContent,
  updateContent,
  deleteContent,
  getHability,
  getTopic,
  registerTopic,
  updateTopic,
  deleteTopic,
  registerRating,
  getAllTopics
}

export default postService
