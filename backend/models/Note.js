const mongoose = require('mongoose');

const noteSchema = new mongoose.schema({
    titel: String,
    description: String
});

module.exports = mongoose.model('Note', noteSchema);