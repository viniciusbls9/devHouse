import express from 'express';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';

import multer from 'multer';
import uploadConfig from './config/upload';

const routes = express.Router();
const upload = multer(uploadConfig);

const sessionController = new SessionController();
const houseController = new HouseController();
const dashboardController = new DashboardController();
const reserveController = new ReserveController();

routes.post('/session', sessionController.store);

routes.post('/houses', upload.single('thumbnail'), houseController.store);
routes.get('/houses', houseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), houseController.update);
routes.delete('/houses', houseController.destroy);

routes.get('/dashboard', dashboardController.show);

routes.post('/houses/:house_id/reserve', reserveController.store);
routes.get('/reserve', reserveController.index);
routes.delete('/reserve/cancel', reserveController.destroy);


export default routes;