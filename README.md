# Politician Website - Rajesh Kumar Sharma

A modern, responsive website for politician Rajesh Kumar Sharma, showcasing his political journey, vision, achievements, and ways to connect with constituents.

## Features

- **Modern Design**: Clean, professional interface with responsive design
- **Hero Section**: Compelling introduction with call-to-action
- **About Section**: Detailed biography and political journey
- **Vision & Mission**: Clear statements of political goals and objectives
- **Photo Gallery**: Visual documentation of political activities and events
- **News Section**: Latest updates and announcements
- **Contact Form**: Direct communication channel for constituents
- **Social Media Integration**: Links to social platforms

## Technology Stack

This project is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd civic-voice-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation component
│   ├── HeroSection.tsx # Hero section
│   ├── AboutSection.tsx# About section
│   └── ...             # Other page sections
├── assets/             # Images and static assets
├── pages/              # Page components
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Customization

### Design System
The website uses a custom design system defined in:
- `src/index.css` - CSS custom properties and global styles
- `tailwind.config.ts` - Tailwind CSS configuration

### Content
To customize the content:
1. Update politician information in component files
2. Replace images in the `src/assets/` directory
3. Modify text content in respective section components

## Deployment

The website can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Deploy directly from GitHub with continuous integration
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is developed for educational and portfolio purposes.

## Contact

For any questions or suggestions regarding this project, please feel free to reach out through the contact form on the website.
