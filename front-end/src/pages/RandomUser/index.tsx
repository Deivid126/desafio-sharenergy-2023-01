import { useEffect, useState } from "react"
import dog from "../../hooks/dogapi";



export const RandonUser = () => {

const [img,Setimg] = useState<string>('');

const randon =  async () => {
    const response = await dog.get('');
    return response;
}

useEffect(() => {
    const data = randon().then((res:any) =>{
        Setimg(res.data);
        console.log(res.data);
    })
},[])


const recarregar = () => {
    window.location.reload();
}


return (
    <div>
        <img src={img} width='400px' height='400px' alt="" />
        <video src={img} ></video>
        <button onClick={recarregar}>Refresh</button>
    </div>
)
}