import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/'

const getStudent = () => {
  return axios.get(API_URL + 'api/usuarios/estudantes/usuario-secao', { headers: authHeader() })
}

const getTeacher = () => {
  return axios.get(API_URL + 'api/usuarios/professores/usuario-secao', { headers: authHeader() })
}

const getAllContent = () => {
  return axios.get(API_URL + 'api/conteudos', { headers: authHeader() })
}

const getTeacherContent = () => {
  return axios.get(API_URL + 'api/conteudos/usuario-secao', { headers: authHeader() })
}

const registerContent = (data) => {
    return axios.post(API_URL + 'api/conteudos', data, { headers: authHeader() })
}

const updateContent = (id, data) => {
    return axios.put(API_URL + `api/conteudos/${id}`, data,  { headers: authHeader() })
}

const deleteContent = (id) => {
    return axios.delete(API_URL + `api/conteudos/${id}`, { headers: authHeader() })
}

const getHability = () => {
  return axios.get(API_URL + 'api/habilidades',{ headers: authHeader() })
}

const postService = {
  getTeacher,
  getStudent,
  getAllContent,
  getTeacherContent,
  registerContent,
  updateContent,
  deleteContent,
  getHability
}

export default postService
