import { AuthContext } from "../../contexts/Auth/AuthContext"
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useContext, useState} from "react";
export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate(); 

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const nomeInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setNome(event.target.value);
    }

    const senhaInput = (event:ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    }
    let remenber:boolean = false;

    const check = async () => {
        const valor = document.getElementById('check');
        if(valor){
            return remenber = true;
        }
        else {
            return remenber;
        }
    }
    const login = async () => {
        check();
        if(nome && senha){
            const isLogged = await auth.signin(nome,senha,remenber);
            if(isLogged){
                navigate('/');
            } else {
                alert("Login errado");
            }
        }
    }

    return (
        <div>
            <h2> Página de Login</h2>
            <input type="text"
            value={nome}
            onChange={nomeInput}
            placeholder="Digite seu nome"/>
            <input type="password"
            value={senha}
            onChange={senhaInput}
            placeholder="Digite sua senha" />
            <input type="checkbox"
            id="check"
            />
            <button onClick={login}>Login</button>
        </div>
    )
}