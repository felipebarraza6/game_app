import React, { useReducer, useEffect, createContext } from 'react'
import { Table, Button } from 'antd'
import { deleteRecord } from '../../actions/records'

const List = ({data, dispatch}) => {

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Nombre',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Cantidad',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
            title: 'Imagen',
            render: (x) => <img width={'200px'} src={x.image} />
        },        
        
        {
            title: 'Acciones',
            render: (x)=> {
                return(
                    <>                                                                                                                
                        <Button danger type='primary' onClick={()=> deleteRecord(dispatch, x.id)}>ELIMINAR</Button>                                                                                        
                    </>
                )
            }           
        }
        
    ]

    return(<Table 
        dataSource={data}
        rowKey={'id'}
        columns={columns}
        
    />)

}


export default List