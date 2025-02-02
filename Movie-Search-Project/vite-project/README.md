# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Movie Finder App

This is a React-based movie discovery application that fetches and displays popular movies using The Movie Database (TMDb) API.

## Features
- Fetches popular movies from TMDb API.
- Displays movie title, rating, poster, and other details.
- Provides a search functionality to find movies.
- Handles loading states and errors gracefully.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/movie-finder.git
   ```
2. Navigate to the project directory:
   ```sh
   cd movie-finder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.

## API Configuration
This application uses TMDb API. Ensure you have a valid API key:
- Replace `API_KEY` in `App.js` with your actual API key.

## Dependencies
- React
- TMDb API

## License
This project is open-source and available under the [MIT License](LICENSE).



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
