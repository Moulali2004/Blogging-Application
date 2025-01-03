# Blogging Application

This is a Node.js-based blogging application that allows users to manage blogs and user authentication. Below, you'll find instructions for setting up and running the project, along with details about the available routes.

---

## **Features**

- User authentication and authorization.
- CRUD operations for blogs.
- EJS templating engine for dynamic web pages.
- MongoDB for data persistence.

---

## **Technologies Used**

- Node.js
- Express.js
- MongoDB
- EJS
- dotenv
- cookie-parser

---

## **Prerequisites**

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

## **Getting Started**

### 1. **Clone the Repository**

```bash
git clone <repository_url>
cd <repository_directory>
```

### 2. **Install Dependencies**

Install the required npm packages:

```bash
npm install
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root directory and configure the following:

```
PORT=8000
MONGO_URL=<your_mongo_db_connection_string>
SECRET=<your_secret_key>
```

### 4. **Run the Application**

Start the server:

```bash
npm start
```

By default, the server runs on `http://localhost:8000`.

---

## **Project Structure**

```
|-- models/
|   |-- blog.js
|
|-- routes/
|   |-- user.js
|   |-- blog.js
|
|-- middlewares/
|   |-- authentication.js
|
|-- views/
|   |-- home.ejs
|
|-- public/
|
|-- .env
|-- app.js
|-- package.json
```

---

## **Available Routes**

### **Home**

- **GET /**
  - Description: Renders the homepage with all blogs.
  - Response: EJS template with user details and blogs.

### **User Routes**

- **POST /user/register**

  - Description: Registers a new user.
  - Payload: `{ username, password }`
  - Response: Redirects to the login page.

- **POST /user/login**

  - Description: Logs in a user.
  - Payload: `{ username, password }`
  - Response: Sets authentication cookie and redirects to `/`.

- **GET /user/logout**

  - Description: Logs out the user by clearing the authentication cookie.

### **Blog Routes**

- **GET /blog/new**

  - Description: Renders the form for creating a new blog.

- **POST /blog/create**

  - Description: Creates a new blog post.
  - Payload: `{ title, content }`
  - Response: Redirects to `/`.

- **GET /blog/****:id**

  - Description: Displays a single blog post by ID.

- **POST /blog/****:id****/update**

  - Description: Updates an existing blog post.
  - Payload: `{ title, content }`
  - Response: Redirects to `/blog/:id`.

- **POST /blog/****:id****/delete**

  - Description: Deletes a blog post by ID.
  - Response: Redirects to `/`.

---

## **Public Folder**

The `public` folder contains static assets like CSS, JavaScript, and images for the application.

---

## **License**

This project is licensed under the MIT License.

Moulali @2004
