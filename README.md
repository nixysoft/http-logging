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

## Logs

- Logs will be written to `requests.log` in the project directory.
- You can check the console output for real-time logging of requests.

## Example Requests and Responses

### 1. GET Request

**Request:**
curl -X GET http://localhost:3000

**Response:**
Hello, world!

**Log:**
```
--- New Request ---
Time: 2024-10-18T12:00:00.000Z
Method: GET
URL: /
Headers: { "Host": "localhost:3000", ... }
Query Params: {}
Route Params: {}
Body: {}
```
### 2. POST Request

**Request:**
curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'

**Response:**
Hello, world!

**Log:**
```
--- New Request ---
Time: 2024-10-18T12:05:00.000Z
Method: POST
URL: /
Headers: { "Host": "localhost:3000", "Content-Type": "application/json", ... }
Query Params: {}
Route Params: {}
Body: { "name": "John", "age": 30 }
```
### 3. PUT Request

**Request:**
curl -X PUT http://localhost:3000 -H "Content-Type: application/json" -d '{"id": 1, "name": "Jane"}'

**Response:**
Hello, world!

**Log:**
```
--- New Request ---
Time: 2024-10-18T12:10:00.000Z
Method: PUT
URL: /
Headers: { "Host": "localhost:3000", "Content-Type": "application/json", ... }
Query Params: {}
Route Params: {}
Body: { "id": 1, "name": "Jane" }
```
### 4. DELETE Request

**Request:**
curl -X DELETE http://localhost:3000

**Response:**
Hello, world!

**Log:**
```
--- New Request ---
Time: 2024-10-18T12:15:00.000Z
Method: DELETE
URL: /
Headers: { "Host": "localhost:3000", ... }
Query Params: {}
Route Params: {}
Body: {}
```
### 5. Query Parameters in GET Request

**Request:**
curl -X GET "http://localhost:3000?search=keyword&page=1"

**Response:**
Hello, world!

**Log:**
```
--- New Request ---
Time: 2024-10-18T12:20:00.000Z
Method: GET
URL: /?search=keyword&page=1
Headers: { "Host": "localhost:3000", ... }
Query Params: { "search": "keyword", "page": "1" }
Route Params: {}
Body: {}
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
