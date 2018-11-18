const express = require('express')
const router = express.Router()
const boardsController = require('../controllers/boards-controller')
const sectionsController = require('../controllers/sections-controller')
const tasksController = require('../controllers/tasks-controller')
const notFoundController = require('../controllers/not-found-controller')

router
  .route('/boards')
  .get((req, res) => boardsController.all(req, res))
  .post((req, res) => boardsController.create(req, res))
router
  .route('/board/:id')
  .get((req, res) => boardsController.get(req, res))
  .put((req, res) => boardsController.update(req, res))
  .delete((req, res) => boardsController.destroy(req, res))

router
  .route('/sections')
  .get((req, res) => sectionsController.all(req, res))
  .post((req, res) => sectionsController.create(req, res))
router
  .route('/section/:id')
  .get((req, res) => sectionsController.get(req, res))
  .put((req, res) => sectionsController.update(req, res))
  .delete((req, res) => sectionsController.destroy(req, res))
router
  .route('/tasks')
  .get((req, res) => tasksController.all(req, res))
  .post((req, res) => tasksController.create(req, res))
router
  .route('/task/:id')
  .get((req, res) => tasksController.get(req, res))
  .put((req, res) => tasksController.update(req, res))
  .delete((req, res) => tasksController.destroy(req, res))

router.get('*', notFoundController.show)

module.exports = router
