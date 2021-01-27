const router = require('express').Router();
const authorize = require('../middlewares/authorize')

const adminController = require('../controllers/admin.controller');

router.post('/admin', authorize(), adminController.getRole);
router.post('/admin/addProduct', authorize(), adminController.createProduct)
router.post('/admin/deleteProduct', authorize(), adminController.deleteProduct)
router.post('/admin/updateProduct', authorize(), adminController.updateProduct)
module.exports = router;