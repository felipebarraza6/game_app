import { notification } from 'antd'

import axios from 'axios'

export const BASE_URL = 'http://familiateatro.cl:8000/api'

const token = JSON.parse(localStorage.getItem('access_token') || null)

const options = {
    headers: {
        Authorization: `Token ${token}`
    }
}

export const INSTANCE = axios.create({
    baseURL: BASE_URL,
})

export const POST_IMG = async(endpoints, field, file) => {    
    const token = JSON.parse(localStorage.getItem('access_token'))
    let data = new FormData()

    data.append(field, file)

    const options = {
      headers: {
          Authorization: `Token ${token}`,
          'content-type': 'multipart/form-data'
      }
    }

    const request = await INSTANCE.patch(endpoints, data, options)
    return request

}

export const POST_NOT_TOKEN = async (endpoint, data) =>{
    const request = await INSTANCE.post(endpoint, data)
    return request
}

export const GET = async(endpoint) =>{
    const request = await INSTANCE.get(endpoint, options)
    return request
}

export const POST = async(endpoint, data) =>{
    const request = await INSTANCE.post(endpoint, data, options)
    return request
}

export const PATCH = async(endpoint, data) =>{
    const request = await INSTANCE.patch(endpoint, data, options)
    return request
}

export const DELETE = async(endpoint) =>{
    const request = await INSTANCE.delete(endpoint, options)
    return request
}