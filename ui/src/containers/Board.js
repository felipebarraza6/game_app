import React, {useEffect, useState} from 'react'
import List from '../components/board/List'
import api from '../api/endpoints/boards'
import SingleBoard from '../components/board/SingleBoard'


const Board = () => {

    const [data, setData] = useState([])
    const [board,setBoard] = useState({})
    const [retrieve, setRetrieve] = useState(false)
    const getData = async() => {
        const rq = await api.list()
        setData(rq.results)
    }

    useEffect(()=> {
        getData()
    }, [])

    return(<>
        
        {retrieve ? <SingleBoard setRetrieve={setRetrieve} board={board} /> : <List data={data} setBoard={setBoard} setRetrieve={setRetrieve} />}
    </>)
}


export default Board