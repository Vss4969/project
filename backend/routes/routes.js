import express from 'express';
import { getList } from '../controller/list.controller.js';
import { getProblemDetails } from '../controller/problem.controller.js';
import { getVerdict } from '../controller/submit.controller.js';
import { getOutput } from '../controller/run.controller.js';


const router = express.Router();

router.get('/list', getList);
router.get('/problem/:problemId', getProblemDetails);
router.post('/submit', getVerdict);
router.post('/run', getOutput);

export default router;