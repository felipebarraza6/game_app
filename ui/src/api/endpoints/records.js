import { GET, DELETE } from '../config'

const getRecords = async() =>{
    
    const request = await GET('records/')
    return request.data
}

const deleteRecord = async(id) => {
    const request = await DELETE(`records/${id}/`)
    return request
}




const api = {
    list: getRecords,
    delete: deleteRecord
}

export default api