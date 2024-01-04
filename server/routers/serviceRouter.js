const { Router } = require('express');
const router = new Router();
const serviceController = require('../controllers/serviceController');

router.post("/service/create", serviceController.createService);
router.get("/service", serviceController.getServiceList);
router.get("/service/:Id", serviceController.getServiceById);
router.delete("/service/:Id", serviceController.deleteServiceById);
router.patch("/service/:Id", serviceController.updateServiceById);

module.exports = router;
