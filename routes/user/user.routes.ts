import express from "express";
import { changePassword, deleteProfile, getProfile, login, signUp, updateProfile } from '../../controller/user/user.controller';
import { verifyToken } from "../../helpers/tokenuser";
import upload from "../../helpers/imageUplode";

const userRoute = express.Router();

userRoute.post('/signUp', upload.single('profileImage'), signUp);
userRoute.post('/login', login);
userRoute.get('/get-profile', verifyToken, getProfile);
userRoute.put('/update-profile', upload.single('profileImage'), verifyToken, updateProfile);
userRoute.put('/change-password', verifyToken, changePassword);
userRoute.delete('/delete-profile', verifyToken, deleteProfile);

export default userRoute