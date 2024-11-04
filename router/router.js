/**
 * 
 * MAIN ROUTER
 * 
 */

// Imports..
import express from 'express';
import cartRouter from './cart/router.js';
import ordersRouter from './orders/router.js';
import productsRouter from './products/router.js';
import usersRouter from './users/router.js';
import controller from '../controllers/controller.js';

// Initialize vars..
const { Router } = express;
const router = Router();

router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);

router.get('/', controller.homepage);

// Export..
export default router;