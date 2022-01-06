import React from 'react'
import api from '../api/endpoints/records'
import { notification } from 'antd'

export const getRecords = async(dispatch) => {    
    try {
        const rq = await api.list()
        dispatch({
            type: 'ADD_LIST',
            payload: rq
        })
    } catch(err) {
        console.log(err)
    }
}

export const deleteRecord = async(dispatch, id_record) => {
    try {
        const rq = await api.delete(id_record)
        getRecords(dispatch)
        return rq
    } catch(err) {
        console.log(err)
    }
}