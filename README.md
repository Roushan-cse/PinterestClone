# 📌 Pinterest Clone

A modern, full-stack Pinterest clone built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **Spring Boot**. This project aims to recreate Pinterest's clean, responsive, and visually appealing user experience while following production-level architecture and best development practices.

> 🚧 **Status:** Currently under active development.

---

# 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Frontend](#-frontend)
- [Backend](#-backend)
- [Database](#-database)
- [Authentication](#-authentication)
- [Getting Started](#-getting-started)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Learning Goals](#-learning-goals)
- [Contributing](#-contributing)
- [License](#-license)

---

# 🚀 Overview

Pinterest is one of the most popular image-sharing platforms in the world. This project recreates its core functionality while focusing on writing clean, maintainable, and scalable code.

Rather than simply copying the UI, the objective is to understand how a production-level application is designed—from frontend architecture to backend APIs, authentication, image storage, and database relationships.

This project serves as a comprehensive full-stack learning experience and portfolio project.

---

# ✨ Features

## Frontend

- Responsive Pinterest-inspired UI
- Beautiful masonry grid layout
- Sidebar navigation
- Sticky navbar
- Search functionality
- Pin detail page
- User profile
- Create Pin page
- Board management
- Dark mode
- Loading skeletons
- Infinite scrolling
- Image lazy loading
- Responsive design
- Smooth animations

---

## Backend

- RESTful APIs
- JWT Authentication
- User Registration
- Login
- Logout
- Profile Management
- Pin CRUD
- Board CRUD
- Search APIs
- File Upload
- Image Storage
- Exception Handling
- Validation
- Pagination

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- React Hook Form
- Framer Motion
- React Icons

---

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- Maven

---

## Database

- PostgreSQL

---

## Image Storage

Planned:

- Cloudinary

---

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
PinterestClone/
│
├── client/
│   ├── public/
│   ├── src/
│   │
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── features/
│   │
│   ├── pages/
│   ├── routes/
│   ├── redux/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── docs/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# 🏗 Architecture

This project follows a modular architecture to keep the codebase maintainable as it grows.

Frontend responsibilities include:

- UI Components
- State Management
- API Communication
- Routing
- Form Validation

Backend responsibilities include:

- Authentication
- Business Logic
- Database Access
- File Management
- Security
- API Documentation

---

# 🎨 Frontend

The frontend is built using React and follows a reusable component architecture.

Main sections include:

- Home Feed
- Explore
- Search
- Create Pin
- User Profile
- Boards
- Notifications
- Settings

State management is handled with Redux Toolkit.

Routing is managed using React Router.

---

# ⚙ Backend

Spring Boot exposes REST APIs for:

- Authentication
- Users
- Pins
- Boards
- Comments
- Likes
- Search

The backend follows layered architecture:

```
Controller
      ↓
Service
      ↓
Repository
      ↓
Database
```

---

# 🗄 Database

Main entities:

- User
- Pin
- Board
- Comment
- Like
- Follow

Relationships will be implemented using Spring Data JPA.

---

# 🔐 Authentication

Authentication will use JWT.

Features include:

- Register
- Login
- Logout
- Refresh Token
- Protected Routes
- Role-Based Authorization

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PinterestClone.git
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

## Backend

```bash
cd server

./mvnw spring-boot:run
```

---

# 📷 Screenshots

Screenshots will be added as the project progresses.

Example:

```
docs/

home.png

profile.png

create-pin.png

login.png
```

---

# 🛣 Roadmap

## Phase 1

- Project Setup
- React Configuration
- Routing
- Sidebar
- Navbar
- Responsive Layout

---

## Phase 2

- Home Feed
- Masonry Grid
- Search
- Pin Card
- Profile

---

## Phase 3

- Spring Boot Backend
- PostgreSQL
- REST APIs
- Authentication

---

## Phase 4

- Image Upload
- Boards
- Comments
- Likes
- Follow System

---

## Phase 5

- Notifications
- Real-time Updates
- Performance Optimization

---

## Phase 6

- Deployment
- Docker
- CI/CD
- Production Build

---

# 📚 Learning Goals

This project focuses on learning:

- React
- Redux Toolkit
- Tailwind CSS
- Responsive Design
- Spring Boot
- Spring Security
- PostgreSQL
- REST APIs
- JWT Authentication
- Clean Architecture
- Git Workflow
- Production-Level Folder Structure

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Add New Feature"
```

4. Push the branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It helps motivate future development and improvements.

---

# 📄 License

This project is licensed under the MIT License.
