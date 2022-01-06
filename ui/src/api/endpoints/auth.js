import { POST_NOT_TOKEN } from '../config'

const login = async(data) =>{
    
    const request = await POST_NOT_TOKEN('users/login/', {
        email: data.email,
        password: data.password
    })

    return request.data
}

const signup = async(data) =>{
    const request = await POST_NOT_TOKEN('users/signup/', {
        email: data.email,
        username: data.username,        
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        password_confirmation: data.password_confirmation        
    })
    return request.data
}




const api = {
    authenticated:{
        login,
        signup
    }
}

export default api