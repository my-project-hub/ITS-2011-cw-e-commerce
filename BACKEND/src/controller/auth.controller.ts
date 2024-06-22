import { Router } from "express";
import { validateUser } from "../service/auth.service";

const auth = Router()

auth.post('/signin',validateUser);

export default auth;