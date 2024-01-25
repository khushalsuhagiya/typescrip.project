import express from 'express';
import { showAllProduct, specificProduct } from '../../controller/user/product.controller';
import { verifyToken } from '../../helpers/tokenuser';
const productRoute = express.Router();

productRoute.get('/showall-product', verifyToken, showAllProduct);
productRoute.get('/show-product', verifyToken, specificProduct)

export default productRoute