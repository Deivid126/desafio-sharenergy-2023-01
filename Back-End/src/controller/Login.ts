import { Request,response,Response } from "express";
import User from "../models/User";
import { compare } from 'bcrypt';
import {sign} from 'jsonwebtoken';

const Login = {
    async login(res:Response, req:Request) {
        const {nome, senha} = req.body;

        const user = await User.findOne({nome});

        if(!user){
            return res.status(400).json({msg:"Usúario não encontrado"})
        }

        const comparePassword = await compare(senha, user.senha);

        if(!comparePassword){
            return res.status(400).json({msg:"A senha está incorreta"})
        }

        const token = sign({},'afshfiahsoifhaoisfhoa6464',{
            subject: String(user.id),
            expiresIn:"1d"
        });

        return response.json({user,token});

    }
}

export default Login;