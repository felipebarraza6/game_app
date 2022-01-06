import { GET, DELETE } from '../config'

const getBoards = async() =>{    
    const request = await GET('boards/')
    return request.data
}

const deleteRecord = async(id) => {
    const request = await DELETE(`municipalities/${id}/`)
    return request
}

const retrieveBoard = async(id) => {
    const request = await GET(`boards/${id}/`)
    return request.data

}




const api = {
    list: getBoards,
    delete: deleteRecord,
    retrieve: retrieveBoard
}

export default api