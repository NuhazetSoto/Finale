import { api } from "./api";

export const createProyecto = async (body) => {
    const { data } = await api.post('/proyecto', body, {headers: {token: localStorage.getItem('token')}})
    return data
}
export const findProyecto = async (id) => {
    const {data} = await api.get(`/proyecto/${id}`, {}, {headers: {token: localStorage.getItem('token')}})
    return data
}
export const updateContent = async (body, id) =>{
    const { data } = await api.put(`/proyecto/${id}`, body, {headers: {token: localStorage.getItem('token')}})
    return data
}
export const allProyectosUsuario = async (id) => {
    const { data } = await api.get(`/usuario/${id}/proyectos `, {headers: {token: localStorage.getItem('token')}})
    return data
}
export const allProyectos = async () => {
    const { data } = await api.get('/proyectos')
    return data
}