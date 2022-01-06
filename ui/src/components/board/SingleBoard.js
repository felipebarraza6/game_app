import React, { useState} from "react"
import { Row, Col, Typography, Button, Descriptions,Modal, Card } from "antd"
import { BarcodeOutlined } from "@ant-design/icons"
import api from '../../api/endpoints/boards' 
import Draggable from "react-draggable";

const ModalMap = ({listImg, nameMuni}) => {
    const [visible, setVisible] = useState(false)
    return(<>
        <Modal visible={visible} title={nameMuni} style={{top:'0px'}} width={1700} footer={[<Button onClick={()=>setVisible(false)}>Voler</Button>]} onCancel={()=>setVisible(false)}>  
            {listImg.map((x)=> <Draggable><img style={{width:'200px',  }} src={x.image} alt='image'  /></Draggable>)}
            <div style={{border:'2px solid', height:'400px'}}></div>
        </Modal>
        <Button style={{margin:'40px'}} type='primary' onClick={()=>setVisible(true)}> ver mapa {nameMuni} </Button>
    </>)
}

const SingleBoard = ({board, setRetrieve}) => {

    const [data, setData] = useState({board})
    console.log(data)
    const updateBoard = async(id) => {
        const rq = await api.retrieve(id)
        setData(rq)
    }

    

    return(<Row>
        <Col span={12}>
            <Typography.Title level={4}> ID unica tablero: {board.uuid} </Typography.Title>        
        </Col>
        <Col span={6} align='end'>
            <Button type='primary' onClick={()=> setRetrieve(false)}>VOLVER</Button>            
        </Col>
        <Col span={6} align='start' style={{paddingLeft:'10px'}}>
            <Button type='primary' onClick={()=> updateBoard(board.uuid)}>ACTUALIZAR</Button>
        </Col>
        <Col span={24} style={{marginTop:'50px'}}>
            <Descriptions title="Participantes e informacion general">
                <Descriptions.Item label="TITULO"> {board.title} </Descriptions.Item>
                <Descriptions.Item label="Municipalidad 1"> {board.muni1.name} </Descriptions.Item>
                <Descriptions.Item label="Municipalidad 2"> {board.muni2.name} </Descriptions.Item>
                <Descriptions.Item label="ZOOM link"> {board.zoom_link} </Descriptions.Item>                
                <Descriptions.Item label="Fecha creacion">
                    {board.created.slice(0,10)} - {board.created.slice(11,19)}
                </Descriptions.Item>
                <Descriptions.Item label="Fecha modificacion">
                    {board.modified.slice(0,10)} - {board.modified.slice(11,19)}
                </Descriptions.Item>
            </Descriptions>
        </Col>
        <Col span={8} style={{marginTop:'20px'}}>
            <ModalMap listImg={board.recordsm1} nameMuni={board.muni1.name} />
            <Typography.Title level={5}>FICHAS {board.muni1.name} </Typography.Title>
            {board.recordsm1.map((x,index)=> <Row>
                <img src={x.image} style={{width: '200px'}} />
                <Typography.Text key={index} mark> 
                    {x.name} 
                </Typography.Text>
                
                </Row>)}
        </Col>
        <Col span={8} style={{marginTop:'20px'}}>
            <ModalMap listImg={board.recordsm2} nameMuni={board.muni2.name} />
            <Typography.Title level={5}>FICHAS {board.muni2.name} </Typography.Title>
            {board.recordsm2.map((x,index)=> <Row><img src={x.image} style={{width: '200px'}} /><Typography.Text key={index} mark> {x.name} </Typography.Text></Row>)}
        </Col>
        <Col span={8} style={{marginTop:'20px'}}>
            <Typography.Title level={5}>INTERCAMBIOS </Typography.Title>
            {board.exchanges.map((x,index)=> <>
                <Typography.Text key={index} mark> 
                    {x.record1.name} 
                </Typography.Text> por <Typography.Text key={index} mark>{x.record2.name}</Typography.Text></>)}
        </Col>
    </Row>)

}

export default SingleBoard