const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String,
        required: true
    },
    loanDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Loan', loanSchema);