# Voluntiera Website

This is the Next.js implementation of the Voluntiera website, a platform that connects volunteers with charities.

## Project Overview

The Voluntiera website is built using:

- **Next.js**: A React framework for building server-side rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling the components
- **React Icons**: For icons throughout the application
- **Framer Motion**: For animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd voluntiera-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
voluntiera-nextjs/
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── about/         # About Us page
│   │   ├── contact/       # Contact page
│   │   ├── globals.css    # Global CSS styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── not-found.tsx  # 404 page
│   │   └── page.tsx       # Homepage
│   │
│   └── components/        # React components
│       ├── FeatureCard.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       └── Navbar.tsx
│
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

To start the production server, run:

```bash
npm run start
# or
yarn start
```

## Deployment

This Next.js application can be deployed on various platforms, including:

- [Vercel](https://vercel.com/) (recommended for Next.js applications)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Color Scheme

The primary color scheme used in this project is a green and white color scheme:
- Primary: hsla(167.9, 86.11%, 28.24%, 1)

## License

[MIT](https://choosealicense.com/licenses/mit/)
