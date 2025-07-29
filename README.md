# GitInsight

A modern GitHub profile explorer built with React, Vite, and Tailwind CSS. GitInsight lets you search any GitHub username and instantly view their profile, repositories, and recent activity—all in a clean, responsive UI.

---

## ✨ Features

- **Profile Overview**  
  View profile picture, username, bio, followers, following, and public repo count.

- **Repository Insights**  
  Browse a complete list of public repositories with descriptions, languages, and last update info.

- **Activity Feed**  
  See a timeline of recent GitHub activity (commits, PRs, forks, etc.).

- **Quick Search**  
  Instantly look up any GitHub user by username, with error handling for invalid profiles.

- **Responsive Design**  
  Works seamlessly on desktop and mobile.

- **Modern UI**  
  Built with Tailwind CSS for a sleek, accessible interface.

---

## 🛠️ Technologies Used

### Core Stack

- **React 19** – UI and state management
- **Vite** – Lightning-fast development and build tool
- **Axios** – API requests to GitHub
- **React Router DOM 7** – Navigation and routing

### Styling

- **Tailwind CSS 4** – Utility-first, responsive styling

### Development Tools

- **ESLint** – Code quality and linting

---

## 🗂️ Application Structure

- **src/components/** – Reusable UI components (Navbar, Menubar, Dashboard, Repositories, etc.)
- **src/assets/** – Images and SVGs for UI
- **src/pages/** – Main screens (Landing page, Dashboard, Repositories)
- **src/** – App entry point and global styles

---

## 🔄 Data Flow

- **State Management**  
  Uses React hooks (`useState`, `useEffect`) for local and shared state.

- **API Integration**  
  Fetches user profile, repositories, and activity from the GitHub REST API using Axios.

- **Navigation**  
  React Router DOM manages navigation between the landing page, dashboard, and repositories.

---

## 🚦 How It Works

1. **Landing Page**  
   Enter a GitHub username to search.  
   See a quick intro and popular open-source repositories.

2. **Dashboard**  
   View the selected user's profile, followers, following, and recent activity.

3. **Repositories**  
   Browse all public repositories for the user, with quick links to GitHub.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/khadarbashajilan/Gitinsight.git
   cd Gitinsight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root:
   ```env
   VITE_GITHUB_TOKEN=your_personal_access_token_here
   ```
   > Get a token from GitHub Settings > Developer Settings.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🙌 Contributing

Pull requests welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

**GitInsight** – Instantly explore any GitHub profile.