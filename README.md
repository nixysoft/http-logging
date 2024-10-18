# Node.js Express Logger

A simple Express.js application that logs incoming HTTP requests to both the console and a log file. It captures details such as request method, URL, headers, query parameters, route parameters, and body content.

## Features

- Logs HTTP requests in the 'combined' format to the console.
- Writes detailed request information to `requests.log`.
- Parses incoming JSON request bodies.
- Middleware for logging additional request details.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:

   git clone https://github.com/nixysoft/http-logging.git

2. Navigate to the project directory:

   cd http-logging

3. Install the required dependencies:

   npm install express morgan

## Usage

1. Start the server:

   node index.js

   Replace `index.js` with the filename if different.

2. The server will run on port `3000`. You can access it at:

   http://localhost:3000

3. All incoming requests will be logged in the console and in the `requests.log` file.

## Sample Request

You can test the server using a tool like [Postman](https://www.postman.com/) or cURL:

curl -X GET http://localhost:3000

## Logs

- Logs will be written to `requests.log` in the project directory.
- You can check the console output for real-time logging of requests.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
