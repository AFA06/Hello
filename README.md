# Medicine Tracker

Project Overview

The Medicine Tracker project provides a streamlined solution for pharmacy inventory management. This application enables users to efficiently track, add, update, and remove medicine records through an intuitive interface, helping healthcare providers maintain accurate inventory records.


## Project Structure

├── assests
├── backend
   ├── data.json
   ├── main.py
   ├── requirements.txt
├── frontend
   ├── dashboard.js
   ├── index.html
   ├── manage.css
   ├── manage.html
   ├── manage.js
   ├── script.js
   ├── styles.css

 

## Prerequisites 
Before starting, ensure you have the following installed on your system:

```sh
python --version
git --version
```
Verify your installations with these commands:

### Verifying Installation
Run the following commands to confirm that your installations succeeded:
```bash
python --version
git -v
```

### Setup Instructions

1. **Clone the Repository:**
 ```sh
git clone https://github.com/AFA06/Hello.git
 ```

2. **Navigate to the Project Directory:**
   ```sh
   cd Hello
   ```

4. **Set Up the Backend:**

Install required dependencies:
```sh
pip install -r requirements.txt
```

 - Make the `start.sh` script executable:
   ```
   chmod +x start.sh
  ```
 - Execute the script to initialize the server:
 ```sh
  ./start.sh
  ```

4. **Test API Endpoints:**
   - Use Postman to test the following endpoints:
     - `GET /medicine` - Retrieve all medicines
     - `GET /medicine/{name}` - Retrieve a specific medicine by name
     - `POST /create` - Add a new medicine
     - `POST /update` -  Modify existing medicine details
     - `DELETE /delete` - Remove a medicine

5. **Access the Frontend:**
   - Open `index.html` in a web browser to access the application interface
## Features
- **Data Management:**
  - Retrieve, add, update, and delete medicine records.
  - Real-time filtering and search functionality.
- **User Interface:**
  - User-friendly interface for seamless data input and management.
  - Dynamic data visualization with real-time insights.
- **Backend Functionality:**
  - API endpoints for CRUD operations.
  - Endpoint for calculating average medicine prices.