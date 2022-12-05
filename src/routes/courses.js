const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update); // khi gặp method put và có param id
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy); // khi gặp method put và có param id
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show); // chung chung, nếu match slug thì vào đây, nên để ở cuối để nó match các thằng trên trước

module.exports = router;
