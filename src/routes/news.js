// trong mỗi router con require express và lấy router của express
const express = require('express');
const router = express.Router();

// require controller tương ứng với router này (mỗi router ứng với 1 danh mục)
const newsController = require('../app/controllers/NewsController');

// router điều hướng path nào match đến HANDLER nào
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
