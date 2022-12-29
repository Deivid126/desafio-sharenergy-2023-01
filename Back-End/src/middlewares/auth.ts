
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


export default function authenticaded (req:Request,res:Response, netx:NextFunction){

const authHeader = req.headers.authorization;

if(!authHeader){
    return res.status(401).json({msg:"Acesso não autorizado"})
}

const token = authHeader.split(' ')[1];

try {

    const decodedtoken = verify(token,'afshfiahsoifhaoisfhoa6464')

    return netx();
    
} catch (error) {
    return res.status(401).json({msg:"Acesso não autorizado"})
}

}