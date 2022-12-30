import {useEffect, useState} from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({children}:{children:JSX.Element}) => {

    const [user, serUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    serUser(data.user);
                }
            }
        }
        validateToken();
    },[api]);

    const signin = async (nome:string, senha:string) => {
        const data = await api.signin(nome,senha);
        if(data.user && data.token){
            serUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => 
    {
        serUser(null);
        setToken('');
        await api.logout;
    }

    const setToken = (token:string) => {
        localStorage.setItem('authToken',token);
    }

    return(
        <AuthContext.Provider value={{user, signin, signout}}>
        {children}
        </AuthContext.Provider>
    )
}