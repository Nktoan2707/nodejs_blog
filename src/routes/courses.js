const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); 
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update); // khi gặp method put và có param id
router.get('/:slug', courseController.show);// chung chung, nếu match slug thì vào đây, nên để ở cuối để nó match các thằng trên trước

module.exports = router;