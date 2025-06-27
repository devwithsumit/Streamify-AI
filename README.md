# 🎬 Streamify AI - Your Smart Movie Collection

**Tagline:**
✨ Discover, collect, and search movies smarter with AI-powered features.

## 🚀 Introduction

Streamify AI is a modern movie collection app that lets users browse the latest movies, manage personal collections, and experience advanced AI-powered search. Built with React.js, it integrates with the TMDB API for rich movie data and Google Gemini API for intelligent search, offering a seamless and engaging movie discovery experience. User authentication and collection persistence are managed via a backend (assumed Express.js/MongoDB or Firebase).

## 🌟 Key Features

- 🎥 **Browse Movies:** Explore trending, popular, and top-rated movies from TMDB.
- 📚 **Personal Collections:** Add, remove, and manage your favorite movies in personalized collections.
- 🤖 **AI-Powered Search:** Use Google Gemini AI for smart, context-aware movie searches.
- 🔐 **User Authentication:** Secure sign-in and profile management (via backend/Firebase).
- 📱 **Responsive UI:** Modern, mobile-friendly design.

## 🛠️ Technologies Used

- **Frontend:**
  - ⚛️ React.js
  - 🧭 React Router (for navigation)
  - 🛒 Redux Toolkit (state management)
  - 🧠 React Context API (search context)
  - 🎨 Tailwind CSS (or similar, if used)
- **APIs:**
  - 🎬 TMDB API (movie data)
  - 🤖 Google Gemini API (AI search)
- **Backend (Assumed):**
  - 🗄️ Express.js & MongoDB or 🔥 Firebase (user authentication, collection persistence)

## 🏁 Getting Started (Local Frontend Development)

### 📋 Prerequisites

- Node.js (v16+ recommended)
- npm or Yarn

### ⬇️ Clone the Repository

```bash
git clone <[your-repo-url](https://github.com/devwithsumit/Streamify-AI.git)>
```

### 📂 Move to folder and Install Node Modules

```bash
cd Streamify-AI
npm install
```

### 🔑 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
VITE_API_Read_Access_Token = "<your_tmdb_read_access_token>"
VITE_API_Key = "<your_tmdb_api_key>"
VITE_GEMINI_KEY = "<your_google_gemini_api_key>"
```

### ▶️ Running the App

```bash
npm run dev

```
The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

## 🧑‍💻 Usage

- 🎬 **Browse:** View movies on the home page.
- 🔍 **Search:** Use the AI-powered search bar for smart queries.
- 📁 **Collections:** Add movies to your personal collection (requires sign-in).
- 👤 **Profile:** Manage your account and preferences.

## 🗂️ Project Structure (Frontend `src/`)

- `components/` - 🧩 Reusable UI components (alerts, navbar, movie cards, etc.)
- `pages/` - 📄 Main app pages (Home, About, Contact, MoviePage, etc.)
- `services/` - 🔗 API and business logic (auth, movie search, etc.)
- `redux/` - 🛒 Redux store and slices for state management
- `context/` - 🧠 React Contexts (e.g., SearchContext)
- `config/` - ⚙️ App configuration (API keys, constants)
- `utils/` - 🛠️ Utility functions and custom hooks
- `public/` - 🖼️ Static assets (images, icons)

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [Google Gemini](https://ai.google.dev/gemini-api/docs) for AI-powered search
