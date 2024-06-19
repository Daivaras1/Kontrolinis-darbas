const Procedure = require('../models/procedures');

// show all Procedures
exports.getAllProcedures = async (req, res) => {
    try {
        const procedures = await Procedure.find();
        res.status(200).json(procedures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Show procedures by ID
exports.getProcedureById = async (req, res) => {
    try {
        const { id } = req.params;
        const procedure = await Procedure.findById(id);
        if (!procedure) {
            return res.status(404).json({ message: 'Procedures not found' });
        }
        res.status(200).json(procedure);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Save new procedures

exports.createProcedure = async (req, res) => {
    try {
        const procedure = await Procedure.create(req.body);
        res.status(201).json(procedure);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update procedure
exports.updateProcedure = async (req, res) => {
    try {
        const { id } = req.params;
        const procedure = await Procedure.findByIdAndUpdate(id, req.body, { new: true });
        if (!procedure) {
            return res.status(404).json({ message: 'Procedures not found' });
        }
        res.status(200).json(procedure);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete procedures
exports.deleteProcedure = async (req, res) => {
    try {
        const { id } = req.params;
        const procedure = await Procedure.findByIdAndDelete(id);
        if (!procedure) {
            return res.status(404).json({ message: 'Procedures not found' });
        }
        res.status(200).json({ message: 'Procedures deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};