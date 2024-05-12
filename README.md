# Assistant Management System

This is a backend application for managing assistants. It provides CRUD (Create, Read, Update, Delete) APIs to perform operations on assistant records.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Neel0403/Hirademy.git

2. Install Dependencies

After cloning the repository, navigate to the project directory and install the necessary dependencies using npm (Node Package Manager). This step ensures that all the required packages for the application are available locally.
- cd Hirademy 
- npm install

3. Start the Server

Once the dependencies are installed, you can start the server by executing the following command. This will initiate the application, allowing you to interact with it through the defined API endpoints

- npm start

### Using Postman for CRUD Operations

1. **Create a new assistant**: 
   - **Method**: POST
   - **URL**: `http://localhost:8000/assistant`
   - **Body**: JSON object containing assistant details (e.g., name, mobile, email, salary, city, country, department, role)

2. **Retrieve details of a specific assistant**: 
   - **Method**: GET
   - **URL**: `http://localhost:8000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to retrieve.

3. **Update details of a specific assistant**: 
   - **Method**: PUT
   - **URL**: `http://localhost:8000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to update.
   - **Body**: JSON object containing the updated assistant details.

4. **Delete a specific assistant record**: 
   - **Method**: DELETE
   - **URL**: `http://localhost:8000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to delete.
