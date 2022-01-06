import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import { CreditCardOutlined, UserOutlined, LogoutOutlined, 
        DashboardOutlined, BuildOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu, Row, Col, Tooltip, Button, Drawer } from 'antd'
import { AuthContext } from '../App'
import {Link} from 'react-router-dom'
const user = JSON.parse(localStorage.getItem('user') || null)


const HeaderMenu = () => {

    const { dispatch } = useContext(AuthContext)
    const [drawerVisible, setVisibleDrawer] = useState(false)

    return(<div>
        <Drawer visible={drawerVisible} onClose={()=> setVisibleDrawer(false)}>
            <p>Email: {user.email}</p>
            <p>Usuario: @{user.username} </p>
            <p>Nombre: {user.first_name} </p>
            <p>Apellido: {user.last_name}</p>
        </Drawer>
        <div>
            <img src={logo} alt="logo" style={styles.logo} />
        </div>
        <Row >
        <Col span={16} offset={8}>
        <Menu mode="horizontal" theme='dark' style={{marginTop:'30px'}}>
        <Menu.Item  key='0'>        
                <Link to='/'>
                <HomeOutlined /> INICIO
                </Link>
            </Menu.Item>
            <Menu.Item  key='1'>        
                <Link to='/board'>
                <DashboardOutlined /> TABLERO
                </Link>
            </Menu.Item>
            <Menu.Item  key='2'>        
                <Link to='/records'>
                <CreditCardOutlined /> FICHAS
                </Link>
            </Menu.Item>                          
            <Menu.Item  key='3'>        
                <Link to='/municipalities'>
                <BuildOutlined /> MUNICIPALIDADES
                </Link>
            </Menu.Item>                          
            <Menu.Item key='4' onClick={()=> setVisibleDrawer(true)}>        
                <Button style={styles.btn} type='link' >
                    <UserOutlined /> {user.username}       
                </Button>
            </Menu.Item>
            <Menu.Item key='5'>      
                <Tooltip title='CERRAR SESION'>
                    <Button style={styles.btn} type='link' onClick={()=> dispatch({type:'LOGOUT'})}>
                        <LogoutOutlined />
                    </Button>
                </Tooltip>  
            </Menu.Item>
        </Menu>
        </Col>
        </Row>
    </div>)
}

const styles = {
    logo: {
        width: '9%',
        marginTop: '0px',        
        float: 'left'
    },
    btn: {
        color: 'white'
    } 

}


export default HeaderMenu