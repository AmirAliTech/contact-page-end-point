# Contact Dance Application

This is a simple Node.js application that allows users to submit contact information, which is then stored in a MongoDB database. The application uses Express.js for creating the API endpoints and Mongoose for connecting to the database.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Requirements

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- MongoDB installed and running on `mongodb://127.0.0.1:27017`.

## Installation

1. Clone this repository to your local machine:<br/>
git clone https://github.com/lazybluff/contact-page-end-point


2. Change directory to the project folder:<br/>cd contact-dance-app
   
3. Install the required dependencies:<br/>npm install

4. Start the application:<br/>
node index.js


The application will be accessible at `http://localhost:8000`.

## Usage

You can use this application to store contact information. To submit data to the database, send a POST request to the `/contact` endpoint with the required fields in the request body. The data will be saved to the MongoDB database.

## API Endpoints

- **POST /contact**: Add contact information to the database.

   - Request Body:
     - `name` (string): The name of the contact.
     - `phone` (number): The phone number of the contact.
     - `address` (string): The address of the contact.
     - `email` (string): The email address of the contact.
     - `message` (string): Additional message or notes.

   - Example Request:

   ```http
   POST http://localhost:8000/contact
   Content-Type: application/x-www-form-urlencoded

   name=John+Doe&phone=1234567890&address=123+Main+St&email=johndoe@example.com&message=Hello+world

Example Response:{
  "message": "Data was saved to the database"
}

## Contributing
Contributions are welcome. If you'd like to contribute to this project, please follow these steps:
Fork the repository.
- Create a new branch with a descriptive name: git checkout -b feature/your-feature-name.
- Make your changes and commit them: git commit -m "Add your feature".
- Push your branch to your fork: git push origin feature/your-feature-name.
- Create a pull request to the main repository.
