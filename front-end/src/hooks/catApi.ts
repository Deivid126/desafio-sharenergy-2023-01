import axios from "axios";

const cat = axios.create({
    baseURL:'https://httpcats.com/',
    headers:{
        get:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Methods':'*',
            'Access-Control-Allow-Headers':'*'
        }
    }
    
});

export default cat;