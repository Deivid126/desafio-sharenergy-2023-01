

import { ChangeEvent, useState } from "react"


export const CatsApi = () => {

    const [status, setStatus] = useState('');
 

    const statusInput = (event:ChangeEvent<HTMLInputElement>) => {
            setStatus(event.target.value);
    }

    

    const buscarstatus =  () =>{

        let url = `https://httpcats.com/${status}.jpg`
        return url;
    }

    return(
        <div>
            <input type="text"
            className="sts" 
            value={status}
            onChange={statusInput}
            placeholder="Digite o Status"/>
            <button onClick={buscarstatus}>Login</button>

            <img src={buscarstatus()} width='300px' height='300px' alt="" />
        </div>
    )
}