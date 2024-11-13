const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Loan = require('./model/Loan.cjs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// POST
app.post('/loan', async (req, res) => {
    const { studentId, studentName, bookTitle, loanDate, returnDate } = req.body;

    try {
        const loan = new Loan({
            studentId,
            studentName,
            bookTitle,
            loanDate: loanDate || new Date(),
            returnDate
        });

        await loan.save();
        res.status(201).json({ message: 'Loan recorded successfully', loan });
    } catch (error) {
        res.status(400).json({ message: 'Error recording loan', error });
    }
});

// GET 
app.get('/loan', async (req, res) => {
    try {
        const loans = await Loan.find(); 
        res.json(loans); // ส่งผลลัพธ์กลับไปยัง frontend
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving loans', error });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});