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


### Using Postman for CRUD Operations

1. **Create a new assistant**: 
   - **Method**: POST
   - **URL**: `http://localhost:3000/assistant`
   - **Body**: JSON object containing assistant details (e.g., name, mobile, email, salary, city, country, department, role)

2. **Retrieve details of a specific assistant**: 
   - **Method**: GET
   - **URL**: `http://localhost:3000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to retrieve.

3. **Update details of a specific assistant**: 
   - **Method**: PUT
   - **URL**: `http://localhost:3000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to update.
   - **Body**: JSON object containing the updated assistant details.

4. **Delete a specific assistant record**: 
   - **Method**: DELETE
   - **URL**: `http://localhost:3000/assistant/:assistant_id`
   - **Replace** `:assistant_id` with the ID of the assistant you want to delete.
