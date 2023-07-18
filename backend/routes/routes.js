import express from 'express';
import { getList } from '../controller/list-controller.js';
import { getProblemDetails } from '../controller/problem-controller.js';

const router = express.Router();

router.get('/list', getList);
router.get('/problem/:problemId', getProblemDetails);

export default router;