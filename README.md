# Sigma – Simple Figma Clone

A minimal collaborative design tool inspired by Figma. Draw, comment, react, and chat with others in real time.

## Features

- 🖌️ Draw shapes (rectangle, circle, triangle, line) and freeform on a canvas
- 🖼️ Upload and manipulate images
- 💬 Add comments and threads anywhere on the canvas
- 👥 See live cursors and chat with other users
- 😀 React with emojis directly on the canvas
- 🔄 Real-time collaboration (powered by Liveblocks)
- 🧩 Modern, minimal UI

## Tech Stack

- Next.js (React)
- TypeScript
- Liveblocks (real-time collaboration)
- Fabric.js (canvas drawing)
- Tailwind CSS
- Shadcn UI

## Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file in the root of your project and add your Liveblocks API key:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_api_key
```

You can get your API key from your [Liveblocks dashboard](https://liveblocks.io/dashboard/projects).

### 3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` – Main app and layout
- `components/` – UI, canvas, sidebar, cursor, comments, reactions, etc.
- `lib/` – Canvas logic, shape utilities, key events
- `types/` – TypeScript types

---

> This project is mainly created by a YouTuber. Credit: [Javascript Mastery](https://www.youtube.com/@javascriptmastery).

