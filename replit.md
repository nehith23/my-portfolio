# Academic Research Portfolio - Nehith Sai Vemulapalli

## Overview

This is a modern academic research portfolio website for Nehith Sai Vemulapalli, a PhD candidate in Robotics & AI. The application showcases research publications, academic projects, professional experience, technical skills, and provides contact functionality. Built as a full-stack web application with a focus on professional presentation and academic credibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design system following academic portfolio best practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful endpoints for contact form submission and CV download
- **File Serving**: Static file serving for PDF documents and assets
- **Development**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: User management schema with authentication preparation
- **Storage Strategy**: In-memory storage implementation for development with database migration support

### Authentication and Authorization
- **Preparation**: Basic user schema and storage interfaces implemented
- **Current State**: No active authentication (portfolio is public-facing)
- **Future-Ready**: Infrastructure prepared for user management and admin access

### Design System
- **Color Palette**: High-tech HUD aesthetic with nearly black backgrounds, bright cyan accents (#06B6D4), and minimal borders for a premium console feel
- **Typography**: Inter font family with monospace accents for technical precision
- **Component Theming**: CSS variables with cyan-infused dark themes for both light and dark modes
- **Visual Style**: Minimal, sleek, and modern - designed to feel like a high-end application or heads-up display rather than a traditional website
- **Responsive Design**: Mobile-first approach optimized for clarity and precision

### Content Management
- **Portfolio Sections**: Hero, Publications, Projects, Experience, Skills, Contact
- **Data Structure**: TypeScript interfaces for publications, projects, and experience entries
- **Asset Management**: PDF CV download and project imagery support
- **SEO Optimization**: Meta tags and Open Graph properties for academic discovery

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **UI Library**: Radix UI component primitives for accessibility compliance
- **Styling**: Tailwind CSS with PostCSS for advanced styling capabilities
- **Icons**: Lucide React for consistent iconography

### Development and Build Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server and build tool with React plugin
- **ESBuild**: Fast bundling for production server builds
- **TSX**: TypeScript execution for server development

### Backend Infrastructure
- **Express.js**: Web application framework for API endpoints
- **Database**: Neon Database (PostgreSQL) with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Form Validation**: Hookform resolvers with Zod schemas
- **Query Management**: TanStack React Query for server state

### Replit Integration
- **Development**: Replit-specific plugins for error handling and cartographer support
- **Deployment**: Environment-aware configuration for Replit hosting
- **Assets**: Attached assets directory for CV and project files