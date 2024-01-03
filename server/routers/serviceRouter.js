const { Router } = require('express');
const router = new Router();
const serviceController = require('../controllers/serviceController');

/*router.post("/", serviceController.createService);
router.get("/", serviceController.getServiceList);
router.get("/:id", serviceController.getServiceById);
router.delete("/:id", serviceController.deleteServiceById);
router.patch("/:id", serviceController.updateServiceById);+*/

module.exports = router;
