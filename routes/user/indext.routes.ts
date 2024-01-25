import express from 'express';
import userRoute from './user.routes';
import productRoute from './product.routes';
import cartRoute from './cart.routes';
import orderRoute from './order.routes';
import favouriteRoute from './favourite.routes';
import reviewRoute from './review.routes';
const user = express.Router();

user.use('/user', userRoute);
user.use('/product', productRoute);
user.use('/cart', cartRoute);
user.use('/order', orderRoute);
user.use('/fav', favouriteRoute);
user.use('/review', reviewRoute);

export default user;