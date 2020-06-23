import {Router} from 'express';
import UserController from '../controller/UserController';
import NationaliteController from '../controller/NationaliteController';
import EpreuveController from '../controller/EpreuveController';
import TypeController from '../controller/TypeController';

const jwt = require('jsonwebtoken')
const router = new Router();

/********************* USER ROUTE ******************************/
router.get('/users', authenticateToken, UserController.list);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/user/details', authenticateToken, UserController.details);
router.post('/user/delete', authenticateToken, UserController.delete);
router.put('/user/update', authenticateToken, UserController.update);

/******************* PARTICIPATION ROUTE ***********************/
router.post('/participation', authenticateToken, EpreuveController.getParticipation)
router.post('/participer', authenticateToken, EpreuveController.participer)
router.post('/annuler/participation', authenticateToken, EpreuveController.annulerParticiper)

/******************** EPREUVE ROUTE ***************************/
router.get('/epreuve', authenticateToken,  EpreuveController.list)
router.post('/epreuve/create', authenticateToken, EpreuveController.create)
router.post('/epreuve/delete', authenticateToken, EpreuveController.delete)
router.put('/epreuve/update', authenticateToken, EpreuveController.update)
router.post('/epreuve/details', authenticateToken, EpreuveController.details)

/******************** TYPEUSERS ROUTE **************************/
router.get('/typeusers', authenticateToken, TypeController.list)

/******************* NATIONALITE ROUTE *************************/
router.get('/nationalite', authenticateToken, NationaliteController.list)

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
export default router;
