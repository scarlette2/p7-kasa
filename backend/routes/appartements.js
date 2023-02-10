const express = require('express');
const router = express.Router();
const appartementsCtrl = require('../controllers/appartements');

router.get('/', appartementsCtrl.getAllProducts);
router.get('/:id', appartementsCtrl.getOneProduct) 
module.exports = router;