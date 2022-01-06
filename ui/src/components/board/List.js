import React from 'react'
import { Table, Button } from 'antd'

const List = ({data, setBoard, setRetrieve}) => {
    const columns = [{
        title: 'UUID',
        dataIndex: 'uuid',
        key: 'uuid',
      },
      {
        title: 'TITULO',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'M1',
        render: (x)=> x.muni1.name
      },      
      {
        title: 'M2',
        render: (x)=> x.muni2.name
        
      }, 
      {
        title: 'ZOOM - link',
        dataIndex: 'zoom_link',
        key: 'zoom_link',
      },     
      {
        title: 'ACCIONES',
        render: (x)=> <Button type='primary' onClick={()=> {
            setRetrieve(true)
            setBoard(x)
        }} >VER</Button>
      }, 
    ]
    return(<Table dataSource={data} columns={columns} rowKey={'uuid'} title={()=>'TABLEROS'} />)

}


export default List