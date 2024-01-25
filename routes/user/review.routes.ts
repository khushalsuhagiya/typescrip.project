import express from 'express'
import { verifyToken } from '../../helpers/tokenuser';
import upload from '../../helpers/imageUplode'
import { addReivew, deleteReview, getAllReview, specificReivew, updateReview } from '../../controller/user/review.controller';
const reviewRoute = express.Router();

reviewRoute.post('/add-review', upload.single('productImage'), verifyToken, addReivew);
reviewRoute.get('/getall-review', verifyToken, getAllReview);
reviewRoute.get('/get-review', verifyToken, specificReivew);
reviewRoute.put('/update-review', verifyToken, updateReview);
reviewRoute.delete('/delete-review', verifyToken, deleteReview);

export default reviewRoute