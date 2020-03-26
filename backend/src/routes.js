const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index );

routes.get('/incident', incidentController.index);
routes.post('/incident', incidentController.create);
routes.delete('/incident/:id', incidentController.delete);

module.exports = routes;