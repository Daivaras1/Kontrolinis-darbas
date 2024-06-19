const mongoose = require('mongoose');

const procedureSchema = new mongoose.Schema({
    procedurename : {
        type: String,
        required: true
    },
    category : {
        type: Number,
        type: String,
        required: true
    },
    date: {
        type: String,
        type: Number,
        required: true
    }
});

const Procedure = mongoose.model('procedure', procedureSchema);
module.exports = Procedure