import { useEffect, useState } from "react"
import apiUsuarios from "../../hooks/usuariosApi";


export const UsuariosList = () => {

   
    const [usuarios, setUsuarios] = useState<any>();

      const listagem = async () => {
        const response = await apiUsuarios.get('');
        return response;
        }
      
    useEffect(()=>{
        const dados = listagem().then(res =>{
            setUsuarios(res.data.results[0]);
            console.log(usuarios);
        })
    },[]);
    

    return (
        <div>
            <h1>
                Olá
            </h1>
            <table>
          <thead>
            <tr>
              <th>Genêro</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
          { 
        <tr>
          <td>{usuarios.gender}</td>
        </tr>
          }
        </tbody>
        </table>
        </div>
    )
    }
