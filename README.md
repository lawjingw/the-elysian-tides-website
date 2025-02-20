# Elysian Tides Hotel Website

## 🌊 Overview

Elysian Tides is a luxury hotel booking platform that provides guests with a seamless experience for exploring the hotel, checking room availability, and making reservations. Designed with performance and user experience in mind, this application leverages modern web technologies to ensure fast, reliable, and secure interactions.

## ✨ Features

- **Dynamic Room Booking** – Real-time room availability and seamless reservation process.
- **Server-Side Rendering (SSR)** – Faster load times and improved SEO with Next.js.
- **Modern UI Design** – Built with shadcn/ui for a sleek and elegant look.
- **Type Safety** – TypeScript ensures a robust and maintainable codebase.
- **Efficient Styling** – Tailwind CSS for streamlined styling and responsiveness.
- **Data Validation** – Secure and consistent data handling with Zod.
- **Performance Optimization** – Optimized for speed and smooth interactions.

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
- **State Management:** React Context
- **Validation:** Zod
- **Hosting:** Vercel
- **Testing:** Vitest, Testing Library

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)
- [Supabase Account](https://supabase.com/) for database

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/lawjingw/avolution.git
   cd avolution
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app should now be running at `http://localhost:3000`

## 🧪 Testing

The project uses Vitest and Testing Library for unit and integration testing.

### Running Tests

- **Run all tests:**
  ```sh
  npm test
  ```

- **Run tests with UI:**
  ```sh
  npm run test:ui
  ```

- **Generate coverage report:**
  ```sh
  npm run coverage
  ```

## 🚀 Deployment

### Deploying to Vercel

1. **Create a Vercel Account:**
   - Sign up at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`

2. **Configure Project:**
   - Fork this repository to your GitHub account
   - Connect your GitHub account to Vercel
   - Import the repository in Vercel dashboard

3. **Environment Setup:**
   - Add environment variables in Vercel project settings
   - Configure the same variables as in `.env.local`

4. **Deploy:**
   - Vercel will automatically deploy your main branch
   - For manual deployment, run:
     ```sh
     vercel
     ```

5. **Monitor:**
   - View deployment status in Vercel dashboard
   - Check build logs and analytics

## 📁 Project Structure

```
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   ├── utils/         # Helper functions
│   ├── hooks/         # Custom hooks
│   ├── context/       # Global state management
│   ├── lib/           # API calls and services
└── README.md          # Project documentation
```

## 📝 Future Enhancements

- Add user authentication for managing bookings
- Implement payment integration for room reservations
- Introduce multi-language support

## 📬 Contact

For any inquiries or feedback, reach out at [lawjingw@gmail.com](mailto:lawjingw@gmail.com) or visit my [LinkedIn](https://linkedin.com/in/jingweilaw).
