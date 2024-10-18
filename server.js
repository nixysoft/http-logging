
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Initialize the app
const app = express();

// Setup logging
// const logStream = fs.createWriteStream(path.join(__dirname, 'requests.log'), { flags: 'a' });

// Log requests to the console and to the 'requests.log' file
app.use(morgan('combined'));

// Middleware to log additional details (body, headers, query, and params)
app.use(express.json()); // Parse incoming request bodies as JSON

// Custom logger to log request details
app.use((req, res, next) => {
    console.log('--- New Request ---');
    console.log('Time:', new Date().toISOString());
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', JSON.stringify(req.headers, null, 2));
    console.log('Query Params:', JSON.stringify(req.query, null, 2));  // Log query parameters
    console.log('Route Params:', JSON.stringify(req.params, null, 2));  // Log route parameters
    console.log('Body:', JSON.stringify(req.body, null, 2));

    // Also log to file
    // logStream.write(`--- New Request ---\n`);
    // logStream.write(`Time: ${new Date().toISOString()}\n`);
    // logStream.write(`Method: ${req.method}\n`);
    // logStream.write(`URL: ${req.url}\n`);
    // logStream.write(`Headers: ${JSON.stringify(req.headers, null, 2)}\n`);
    // logStream.write(`Query Params: ${JSON.stringify(req.query, null, 2)}\n`); // Write query params to log
    // logStream.write(`Route Params: ${JSON.stringify(req.params, null, 2)}\n`); // Write route params to log
    // logStream.write(`Body: ${JSON.stringify(req.body, null, 2)}\n\n`);

    next(); // Move to the next middleware or route handler
});

// Universal route handler to respond to all requests
app.use((req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
