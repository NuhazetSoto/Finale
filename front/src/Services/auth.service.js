import { api } from "./api";

export const login = async (email, contraseña) => {
  try {       
    console.log('hola')
    const { data } = await api.post('/auth/login', { email, contraseña }) 
    console.log(data)      
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.id)

    return data
  } catch (error) {
    console.error('Cannot log in')
  }
} 