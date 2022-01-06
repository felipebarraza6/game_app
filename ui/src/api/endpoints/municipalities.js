import { GET, DELETE } from '../config'

const getRecords = async() =>{    
    const request = await GET('municipalities/')
    return request.data
}

const deleteRecord = async(id) => {
    const request = await DELETE(`municipalities/${id}/`)
    return request
}




const api = {
    list: getRecords,
    delete: deleteRecord
}

export default api