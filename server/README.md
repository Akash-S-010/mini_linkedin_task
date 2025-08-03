# 🌐 Mini LinkedIn - Backend

A robust backend server for a professional networking platform, built with **Node.js** and **Express**, providing secure APIs for user authentication, post management, and profile handling.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure login, signup, and logout using JWT
- 📝 **Post Management**: Create and retrieve professional posts
- 👤 **Profile Management**: View and update user profiles
- 🛡️ **Security**: Password hashing, JWT auth, CORS handling
- 📡 **RESTful API**: Seamless integration with frontend

---

## 🛠️ Tech Stack

- **Node.js 18** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **jsonwebtoken** - JWT-based authentication
- **bcryptjs** - Secure password hashing
- **cors** - Cross-Origin Resource Sharing
- **cookie-parser** - Handle cookies
- **dotenv** - Manage environment variables

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### 📥 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mini-linkedin-backend.git

   ```

2. **Navigate to the server directory**

   ```bash
   cd server

   ```

3. **Install dependencies**

   ```bash
    npm install

   ```

4. **Add environment variables**

   ```bash
   Add env for
   MONGO_URI
   JWT_SECRET
   PORT

   ```

5. **Start the server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

server/
├── src/
│ ├── config/ # Database configuration
│ │ └── db.js
│ ├── controllers/ # Business logic (user, posts)
│ ├── middleware/ # Middleware (auth, error handling)
│ │ └── auth.js
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ │ ├── userRoutes.js
│ │ └── postRoutes.js
│ └── index.js # Entry point of the app
├── .env # Environment variables
├── package.json
└── README.md


| Method | Endpoint            | Description                        |
| ------ | ------------------- | ---------------------------------- |
| POST   | `/api/user/signup`  | Register a new user                |
| POST   | `/api/user/login`   | Login with email and password      |
| POST   | `/api/user/logout`  | Logout user                        |
| GET    | `/api/user/me`      | Get authenticated user info (auth) |
| GET    | `/api/user/profile` | Get user profile (auth)            |
| PUT    | `/api/user/profile` | Update user profile (auth)         |

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| POST   | `/api/posts`    | Create a new post (auth required)  |
| GET    | `/api/posts`    | Get all posts                      |
| GET    | `/api/posts/me` | Get current user's posts & profile |

🚀 Deployment
🔧 Deploy to Render
1. Push your code to a GitHub repository.

2. Go to Render and create a Web Service.

3. Connect your GitHub repo.

4. Add the following environment variables in the Render dashboard:
MONGO_URI, 
JWT_SECRET, 
PORT

Deploy and note the provided public URL.