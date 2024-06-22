import { Router } from "express";
import { validateAdmin, validateUser } from "../service/auth.service";

const auth = Router()

auth.post('/signin',validateUser);
auth.post('/admin/signin',validateAdmin);

export default auth;