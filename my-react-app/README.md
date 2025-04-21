# Book Explorer App

A  React application that allows users to explore and search books using the Open Library API. The app features a clean, responsive design with dark/light theme support and efficient state management.

## Features

-  Browse books with pagination
-  Search books by title
-  Dark/Light theme toggle
-  Responsive design
-  Fast and efficient binary search
-  Detailed book information
-  Real-time search results
-  Modern UI with smooth animations

## Technical Features

- React with Vite for fast development
- Redux Toolkit for state management
- React Router for navigation
- Context API for theme management
- Axios for API calls
- CSS with modern styling
- Binary Search implementation
- Responsive grid layout

## Install

- Node.js 
- npm 

## Installation

1. Clone the repository:
bash
git clone <repository-url>
cd my-react-app


2. Install dependencies:
bash
npm install


3. Start the development server:
bash
npm run dev


4. Open your browser and navigate to:
http://localhost:5173



## Usage

1. **Browse Books**
   - The home page displays a grid of books
   - Use pagination controls to navigate through pages

2. **Search Books**
   - Use the search bar to find specific books
   - Results update in real-time
   - Binary search implementation for efficient searching

3. **View Book Details**
   - Click on any book card to view detailed information
   - Navigate back using the back button

4. **Theme Toggle**
   - Switch between light and dark themes using the toggle in the navbar

## API Integration

The app uses the Open Library API:
- Search endpoint: https://openlibrary.org/search.json
- Book details endpoint: https://openlibrary.org{book_key}.json


