import { Router, response } from "express";
// import { registerUser } from "../service/user.service";
import { registerUser } from "../service/user.service";

const user = Router();

user.post('/', registerUser)


user.get('/',(req,res) => {
    res.send("dilshan");;
})

user.put('/',(req,res) => {
    res.send("dilshan");;
})

user.delete('/',(req,res) => {
    res.send("dilshan");;
})

export default user;