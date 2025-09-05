# Overview

This is a personal portfolio website built as a full-stack application featuring a React frontend with a Node.js/Express backend. The application showcases professional information including an about section, skills, projects, and a contact form. It uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components for a polished user interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 and TypeScript, using Vite as the build tool. The UI is styled with Tailwind CSS and utilizes the shadcn/ui component library for consistent design patterns. The application follows a component-based architecture with:

- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: Comprehensive shadcn/ui components for consistent UI elements

## Backend Architecture
The backend uses Express.js with TypeScript in ESM module format. It implements a simple REST API with:

- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Routes**: RESTful endpoints for contact form submissions and data retrieval
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

## Database Design
The application uses Drizzle ORM with PostgreSQL schema definition including:

- **Users Table**: Basic user authentication schema (id, username, password)
- **Contacts Table**: Contact form submissions with fields for name, email, subject, and message
- **Type Safety**: Full TypeScript integration with Drizzle-Zod for runtime validation

## Development Environment
The project uses a modern development setup with:

- **Build System**: Vite for fast development and optimized production builds
- **Database Migrations**: Drizzle Kit for schema management and migrations
- **Type Checking**: Strict TypeScript configuration across frontend and backend
- **Module Resolution**: Path aliases for clean import statements

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database queries and schema management

## UI Framework
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

## Form Management
- **React Hook Form**: Performance-focused forms with minimal re-renders
- **Zod**: Schema validation for form data and API contracts

## State Management
- **TanStack Query**: Server state management with caching and background updates

## Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production

## Third-Party Services
- **Font Awesome**: Icon library for social media and UI icons
- **Google Fonts**: Web fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Stock photography for portfolio images