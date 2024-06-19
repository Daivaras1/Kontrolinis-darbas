const express = require('express');
const router = express.Router();
const procedureController = require('../controllers/proceduresController');

// Define your routes
router.get('/', procedureController.getAllProcedures);
router.get('/:id', procedureController.getProcedureById);
router.post('/', procedureController.createProcedure);
router.put('/:id', procedureController.updateProcedure);
router.delete('/:id', procedureController.deleteProcedure);

module.exports = router;