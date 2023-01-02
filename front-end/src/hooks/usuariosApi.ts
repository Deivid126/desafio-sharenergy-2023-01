import axios from 'axios';

const apiUsuarios = axios.create({
    baseURL:"https://randomuser.me/api/",
})




export default apiUsuarios;