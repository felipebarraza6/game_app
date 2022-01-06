import React from 'react'
import { Row, Col, Typography, Table } from 'antd'
import Municipalities from './Municipalities'
import Records from './Records'

const Resume = () => {
    return(<Row>
        <Col span={24}>
            <Municipalities />
        </Col>
        <Col span={24}>
            <Records />
        </Col>
    </Row>)
}


export default Resume