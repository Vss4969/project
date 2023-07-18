import express from 'express';
import { getList } from '../controller/list-controller.js';

const router = express.Router();

router.get('/list', getList);

export default router;