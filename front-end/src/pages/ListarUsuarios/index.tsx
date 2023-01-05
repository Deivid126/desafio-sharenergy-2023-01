import { useEffect, useState } from "react"
import apiUsuarios from "../../hooks/usuariosApi";


export const UsuariosList = () => {

   
    const [usuarios, setUsuarios] = useState<any>();
    const [currentPage, setCurrentPage] = useState(0);
	  const [itensPerPage, setItensPerPage] = useState(5);
	 
      const pages = 11;
      const listagem = async () => {
        const response = await apiUsuarios.get(`?page=${currentPage}&results=10&seed=abc`);
        return response;
        }
      
        async function goToPage(page:number){
          if(page < 10){
            if(page == 1){
              page = 2;
              setCurrentPage(page);
              console.log(page);
            }
            else{
              setCurrentPage(page);
              console.log(page);
            }
           
          }
        }
       
      
    useEffect(()=>{
        const dados = listagem().then((res:any) =>{
            setUsuarios(res.data.results);
            console.log(res.data);
        })
    },[currentPage]);
    

    return (
        <div>
            <h1>
                Lista de Usuários
            </h1>
            <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Username</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
          {usuarios?.map((usuario:any) => (
        <tr>
          <td><img src={usuario.picture.thumbnail} alt="" /></td>
          <td>{`${usuario.name.first} ${usuario.name.last}` }</td>
          <td>{usuario.email}</td>
          <td>{usuario.login.username}</td>
          <td>{usuario.dob.age}</td>
        </tr>
          ))}
        </tbody>
        </table>
        <div>
        <span>{(currentPage * 10) + 1}-{(currentPage + 1) * (10)} de {100}</span>
			<button
				onClick={(e) => goToPage(0)}
				disabled={currentPage == 0}
			>&#171;</button>
			<button
				onClick={(e) => goToPage(currentPage - 1)}
				disabled={currentPage == 0}
			>&lt;</button>
			<button
				onClick={(e) => goToPage(currentPage + 1)}
				disabled={currentPage == (pages - 1)}
			>&gt;</button>
			<button
				onClick={(e) => goToPage(pages - 1)}
				disabled={currentPage == (pages - 1)}
			>&#187;</button>
        </div>
        </div>
    )
    }
