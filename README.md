# Sanity.io + Next.js Blog Tutorial

This repository contains the source code for the YouTube tutorial series on building a modern blog with [Next.js](https://nextjs.org) and [Sanity.io](https://www.sanity.io).

## 📺 Tutorials

Follow along with the video series:

- **Episode 1**: [Watch on YouTube](https://www.youtube.com/watch?v=Mgc4-L8eUhA)
- **Episode 2**: [Watch on YouTube](https://www.youtube.com/watch?v=Mgc4-L8eUhA)

## 🛠️ Tech Stack

This project is built using the following technologies:

- **Framework**: [Next.js 16](https://nextjs.org/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### 1. Clone the repository

```sh
gh repo clone namecoder1/sanity-yt-course
cd sanity-yt-course
```

### 2. Install dependencies

```sh
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory. You will need to add your Sanity project configuration variables here.

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_VIEWER_TOKEN=your_viewer_token
```

### 4. Run the development server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License

This project is for educational purposes. Feel free to use it as a starting point for your own projects.
