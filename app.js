
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database'); // Import the database configuration
const app = express();

// Enable CORS for all routes or specify allowed origins
app.use(cors());

// Configure middleware
app.use(bodyParser.json());

// Import and use your routes
const teacherRoutes = require('./routes/teacherRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

app.use('/teachers', teacherRoutes);
app.use('/subjects', subjectRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
