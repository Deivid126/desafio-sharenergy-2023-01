import axios from "axios";

const api = axios.create({
    baseURL:'http//localhost:4000'
});

export const useApi = () => ({
    validateToken: async(token:string) => {
        const response = await api.post('/login',{token});
        return response.data;
    },
    signin: async(nome:string, senha:string) => {

        const response = await api.post('',{nome,senha});
        return response.data;
    },
    logout: async () => {
        return { status: true};
    }
})