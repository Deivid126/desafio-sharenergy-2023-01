import axios from "axios";

const dog = axios.create({
    baseURL:'https://random.dog/woof'
})

export default dog;

