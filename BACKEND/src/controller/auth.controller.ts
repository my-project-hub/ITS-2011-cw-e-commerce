import { Router } from "express";
import { getNewAccessToken, validateAdmin, validateUser } from "../service/auth.service";

const auth = Router()

auth.post('/signin',validateUser);
auth.post('/admin/signin',validateAdmin);
auth.post('/refreshToken',getNewAccessToken);

export default auth;