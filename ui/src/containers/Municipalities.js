import React, { useState, useEffect, createContext } from 'react'
import { Row, Col, Typography, Table } from 'antd'
import api from '../api/endpoints/municipalities'

const Municipalities = () => {

   
    const [data, setData] = useState([])
    const getData = async() => {
        const rq = await api.list()
        console.log(rq.results)
        setData(rq.results)

    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
            title: 'NOMBRE',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'DESCRIPCION',
          dataIndex: 'description',
          key: 'description',
        },
        {
            title: 'CREADO',
          render: (x)=> x.created.slice(0,10)
        }, {
            title: 'COLEGIO',
            render: (x)=> x.college.name
        }, {
            title: 'CARGOS',
            render: (x)=> x.worklands.map((z)=> <p key={z.id}>{z.name_person} - ({z.name_workland}) </p>)
             
        },
        {
            title: '' 
        }                                         
    ]

    useEffect(()=> {
        getData()

    }, [])

    return(<Row>
        <Col span={24}>
            <Typography.Title level={3}>MUNICIPALIDADES</Typography.Title>
            <Table dataSource={data} rowKey={'id'} columns={columns}  />
        </Col>        
    </Row>)
}


export default Municipalities