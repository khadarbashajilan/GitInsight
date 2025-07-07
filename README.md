# GithubInsight

GithubInsight fetches and displays GitHub profile details—including profile picture, username, followers/following counts, repository stats, recent activity, and a full repository list. Built with React and the GitHub API, it provides a clean, fast way to view key user data at a glance.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js – Frontend UI and state management

- GitHub REST API – Fetches user profiles, repos, and activity

- Tailwind CSS – Responsive styling and modern UI

- Vite – Fast build tool for development

- Axios – Handles API requests to GitHub

- React Router – Navigation and dynamic routing

## <a name="features">🔋 Features</a>

👉 Profile Overview

Display user's profile picture, username, bio

Show followers & following counts

Total public repositories count

👉 Repository Insights

Complete list of user's repositories

👉 Activity Feed

Recent GitHub activity timeline

Track pushes, commits, PRs, and issues

👉 Quick Search

Instant username lookup

Error handling for invalid profiles

👉 Responsive Design

Mobile-friendly interface


👉 Performance Optimized

Cached API responses

Skeleton loading states

Efficient pagination

...with clean code architecture and reusable components

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/khadarbashajilan/Gitinsight.git
cd Gitinsight
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_GITHUB_TOKEN=your_personal_access_token_here

```

Get tokens from GitHub Settings > Developer Settings

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
