import { AuthContext } from "../../contexts/Auth/AuthContext"
import {useContext} from  'react';

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2> Página Privada</h2>

            Olá {auth.user?.nome}, tudo bem ?
        </div>
    )
}