const mongoose = require('mongoose');

const Students = mongoose.model('Student', {
    fullname: String,
    email: String,
    rut: String,
    phone: String,
})

module.exports = Students;