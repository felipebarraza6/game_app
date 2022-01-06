import React, { useReducer, useEffect, createContext } from 'react'
import List from '../components/records/List'
import { Row, Col, Typography } from 'antd'
import { reducer } from '../reducers/records'
import { getRecords } from '../actions/records' 

export const RecordsContext = createContext()

const Records = () => {

    const initialState = {
        listRecords: [],
        editRecord: null,        
      }
    
      const [state, dispatch] = useReducer(reducer, initialState)

      useEffect(() => {

        getRecords(dispatch)
        
    
      }, [])
    
      console.log(state)

    return(
        <RecordsContext.Provider value={{ state, dispatch}}>
        <Row>
            <Col align={'center'} span={24} style={styles.marginCol}>
                <Typography.Title level={3}>LISTADO</Typography.Title>
                <List data={state.listRecords} dispatch={dispatch} />
            </Col>            
        </Row>
        </RecordsContext.Provider>)
}

const styles = {
    marginCol: {
        paddingLeft: '10px',
        paddingRight: '10px'
    }
}


export default Records