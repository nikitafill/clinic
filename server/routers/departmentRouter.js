const { Router } = require('express');
const router = new Router();
const departmentController = require('../controllers/departmentController');

router.get("/department", departmentController.getDepartmentList);
router.get("/department/:Id", departmentController.getDepartmentById);

module.exports = router;