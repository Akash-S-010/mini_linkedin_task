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

```bash
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
```


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


# Mini LinkedIn - Frontend

A professional networking platform built with React, featuring user authentication, post creation, and profile management.

## Features

- 🔐 **User Authentication**: Secure login/signup with JWT
- 📝 **Post Creation**: Create and share professional posts
- 👤 **Profile Management**: View and edit your profile
- 🏠 **Home Feed**: View all posts from the community
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Built with Tailwind CSS

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Zustand** - State management
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the client directory:
   ```bash
   cd client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CreatePost.jsx   # Post creation form
│   ├── Loading.jsx      # Loading spinner
│   ├── Navbar.jsx       # Navigation bar
│   └── Post.jsx         # Individual post component
├── pages/               # Page components
│   ├── About.jsx        # About page
│   ├── Home.jsx         # Home feed page
│   ├── Login.jsx        # Login page
│   ├── Profile.jsx      # User profile page
│   └── Signup.jsx       # Signup page
├── services/            # API services
│   └── axios.js         # Axios configuration
├── store/               # State management
│   ├── useAuthStore.js  # Authentication state
│   └── usePostStore.js  # Posts state
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000
```

## Features in Detail

### Authentication
- Secure JWT-based authentication
- Protected routes
- Automatic token refresh
- Logout functionality

### Posts
- Create new posts with character limit
- View all posts in chronological order
- Real-time updates
- Responsive post cards

### Profile
- View user profile information
- Edit profile details (name, bio)
- View user's posts
- Profile picture placeholder

### UI/UX
- Modern, clean design
- Responsive layout
- Loading states
- Error handling
- Toast notifications
- Smooth animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
