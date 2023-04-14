import axios from "axios";
import AuthUser from "./AuthUser";


function api() {
    const { token } = AuthUser()

    const http = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    return { http }
}

export default api