const { Router } = require('express');
const router = new Router();
const departmentController = require('../controllers/departmentController');

/*router.get("/", departmentController.getDepartmentList);
router.get("/:id", departmentController.getDepartmentById);*/

module.exports = router;