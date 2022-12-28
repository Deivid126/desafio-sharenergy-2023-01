
import { model, Schema } from "mongoose"



interface IUser{
    nome:string,
    email:string,
    telefone:string,
    endereco: string,
    senha: string,
    cpf:string
}

const userSchema = new Schema<IUser>({
    nome:{type:String, required:true},
    email:{type:String, required:true},
    telefone:{type:String, required:true},
    endereco:{type:String, required:true},
    senha:{type:String, required:true},
    cpf:{type:String, required:true}
},
{
    timestamps:true,
});

const User = model<IUser>("User", userSchema)

export default User;
