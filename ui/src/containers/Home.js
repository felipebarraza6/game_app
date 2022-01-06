//React
import React from 'react'

//Antd
import { Layout } from 'antd'

//CSS
import '../assets/css/Layout.css'
//import './../build/css/Layout.css'

//Componenets
import HeaderMenu from '../components/HeaderMenu'

import Records from './Records'
import Municipalities from './Municipalities'
import Board from './Board'
import Resume from './Resume' 
import SingleBoard from '../components/board/SingleBoard'
//React Router
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

const { Header, Content, Footer } = Layout


const Home = () => {

    return (
        <Layout>
            <BrowserRouter >
            <Header style={{ paddingTop:'15px', paddingBottom:'70px' }}>
                <HeaderMenu />                
            </Header>
            <Header>                
                
            </Header>

            <Content style={{ padding: '0 50px', paddingTop:'50px' }}>
                <div className="site-layout-content">
                <Routes>
                <Route exact path="/" element={<Resume />} />
                <Route exact path="/records" element={<Records />} />
                <Route exact path="/board" element={<Board />} />
                <Route exact path="/municipalities" element={<Municipalities />} />

                </Routes>
                </div>                
            </Content>
            </BrowserRouter>
            <Footer style={{ textAlign: 'center' }}>La Familia Teatro - 2022</Footer>            
        </Layout>
    )
}

export default Home