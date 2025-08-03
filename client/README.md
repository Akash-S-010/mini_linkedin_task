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
