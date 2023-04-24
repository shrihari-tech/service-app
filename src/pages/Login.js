import React from 'react';
import {Form,Input} from 'antd';
import "../styles/RegisterStyles.css";
import {Link} from 'react-router-dom';
const Login =()=>{
    const onfinishHandler=(values)=>{
        console.log(values)
    }
    return (
        <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
            <h1 className="text-center">Login Form</h1>
            <Form.Item label="Email"name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password"name="password">
                <Input type="password" required/>
            </Form.Item>
            <Link to="/register" className="ms-2">Not a User Register here</Link>
            <button className="btn btn-primary" type="submit">Login</button>
        </Form>
    </div>
    )
}

export default Login