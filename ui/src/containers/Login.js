//React
import React, { useContext, useState } from 'react'

//Build
import './../assets/css/App.css'
import logo from '../assets/images/logo.png'

//Antd
import { Input, Button, Form, Spin, message, notification } from 'antd'
import { MailOutlined, UserOutlined, 
        ProfileOutlined, KeyOutlined  } from '@ant-design/icons'

//Context
import { AuthContext } from '../App'

//Endpoint
import api from '../api/endpoints/auth'

const Login = () => {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        isSubmitting: false,
        error: null,
        isSignUp: false
    }

    const [objUser, setObjUser] = useState(initialState)
    const [errors, setErrors] = useState(null)

    const handleInputChange = e => {
        setObjUser({
            ...objUser,
            [e.target.name]: e.target.value
        })
    }

    const loginFormSubmit = async e =>{

        setObjUser({
            ...objUser,
            isSubmitting: true,
        })

        try{
            if(!objUser.isSignUp){
                const response = await api.authenticated.login(objUser)
                if(response){
                    window.location.reload() 
                }
                dispatch({
                    type:'LOGIN',
                    payload:response
                })
                message.success(`Acceso correcto: ${response.user.first_name} ${response.user.last_name}`)
            }else {                
                const response = await api.authenticated.signup(objUser)                
                setObjUser({
                    ...objUser,
                    isSignUp: false,
                    isSubmitting: false
                })                
                message.success(`USUARIO CREADO!`)
                return response
            }            

        } catch (error) {
            setErrors(error.response.data)
            if(errors){
              Object.keys(errors).map((key, index)=> {
                    let field = key
                    let message = errors[key]
                    if(key==='non_field_errors'){
                        field='Error'
                    }
                    if(field === 'username'){
                        field = 'nombre de usuario'
                    }else if(field === 'first_name'){
                        field = 'primer nombre'
                    }else if(field === 'last_name'){
                        field = 'last_name'
                    }else if(field === 'password'){
                        field = 'contraseña'
                    }else if(field === 'password_confirmation'){
                        field = 'contraseña de confirmacion'
                    }
                    notification.error({message:`${field}: ${message}`})
              })
            }
            setObjUser({
                ...objUser,
                isSubmitting: false,
                error: error.message
            })
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Challenge
                </p>
                <div>
                    <Form
                        onFinish={loginFormSubmit}

                    >
                        <Form.Item name="email" rules={[{ required: true, message: 'Por favor ingresa tu correo!', type:'email' }]}>
                            <Input name="email" size="large" placeholder="Email" prefix={<MailOutlined />} onChange={handleInputChange} />
                        </Form.Item>
                        {objUser.isSignUp && <>
                            <Form.Item name="username" rules={[{ required: true, message: 'Por favor ingresa tu usuario!', type:'string' }]}>
                                <Input name="username" size="large" placeholder="Usuario" prefix={<UserOutlined />} onChange={handleInputChange} />
                            </Form.Item>
                            <Form.Item name="first_name" rules={[{ required: true, message: 'Por favor ingresa tu nombre!', type:'string' }]}>
                                <Input name="first_name" size="large" placeholder="Nombre" prefix={<ProfileOutlined />} onChange={handleInputChange} />
                            </Form.Item>
                            <Form.Item name="last_name" rules={[{ required: true, message: 'Por favor ingresa tu apellido!', type:'string' }]}>
                                <Input name="last_name" size="large" placeholder="Apellido" prefix={<ProfileOutlined />} onChange={handleInputChange} />
                            </Form.Item>
                           
                        </>}
                        <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}>
                            <Input.Password name="password" size="large" placeholder="Contraseña"  prefix={<KeyOutlined />} onChange={handleInputChange} />
                        </Form.Item>
                        {objUser.isSignUp && <>
                        <Form.Item name="password_confirmation" rules={[{ required: true, message: 'Por favor ingresa tu contraseña de confirmacion!' }]}>
                            <Input.Password name="password_confirmation" size="large" placeholder="Confirmacion de contraseña"  prefix={<KeyOutlined />} onChange={handleInputChange} />
                        </Form.Item> 
                        </>}
                        {objUser.isSubmitting ?
                                <Spin />:
                                <Form.Item>
                                    <Button className="btnLogin"type="primary" htmlType="submit">                                        
                                        {objUser.isSignUp ? 'Crear' : 'Ingresar'}
                                    </Button>
                                    
                                    <Button type="primary" danger={objUser.isSignUp} onClick={()=> {
                                        if(objUser.isSignUp){
                                            setObjUser({...objUser, isSignUp: false})
                                        }else {
                                            setObjUser({...objUser, isSignUp: true}) 
                                        }
                                    }}>
                                        {!objUser.isSignUp ?
                                        'Crear usuario':'Cancelar' }
                                    </Button>
                                </Form.Item>                        
                        }
                    </Form>
                </div>



            </header>
    </div>
    )
}

export default Login