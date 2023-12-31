import express from 'express';
import { getList } from '../controller/list.controller.js';
import { getProblemDetails } from '../controller/problem.controller.js';
import { getVerdict } from '../controller/submit.controller.js';
import { getOutput } from '../controller/run.controller.js';
import { userRegister } from '../controller/userRegister.controller.js';
import { userLogin } from '../controller/userLogin.controller.js';
import { userLogout } from '../controller/userLogout.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

router.get('/list', getList);
router.get('/problem/:problemId', getProblemDetails);


// User authentication
router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.post('/checkAuth', (req, res) => {
    if (req.session.user) {
        res.json({success: true, user: req.session.user});
    } else {
        res.json({success: false, user: null});
    }
});


// User authentication required for submission and run
router.use(requireAuth);

router.post('/submit', getVerdict);
router.post('/run', getOutput);

export default router;