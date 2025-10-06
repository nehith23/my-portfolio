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
- **Color Palette**: Strict dark mode with pure black background (#000000), white/light gray text, and single electric cyan accent (HSL 180 100% 50-60%)
- **Typography**: Inter font family with generous letter spacing (0.05em body, 0.03em headings, 0.08em interactive elements) for modern minimal aesthetic
- **Component Theming**: CSS variables enforcing monochrome black/white/gray with electric cyan as the only accent color
- **Visual Style**: Ultra-minimal and modern - pure black backgrounds with sharp cyan highlights creating a high-tech console or HUD aesthetic
- **Responsive Design**: Mobile-first approach optimized for clarity and precision
- **UI/UX Approach**: Full-screen chapter-like sections (min-h-screen) with vertical centering, rounded corners on all components (1.5rem/24px radius), and generous breathing room (py-24 section spacing, mb-16 header spacing) for premium presentation

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