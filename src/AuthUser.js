import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthUser() {
    const navigate = useNavigate()

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user')
        const userDetail = JSON.parse(userString)
        return userDetail
    }

    const [token, setToken] = useState(getToken())
    const [user, setUser] = useState(getUser())

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token))
        sessionStorage.setItem('user', JSON.stringify(user))

        setToken(token)
        setUser(user)
        navigate('/coridoo/projet')
    }

    const logout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const http = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-type': 'Application/json'
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}

export default AuthUser