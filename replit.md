# Academic Research Portfolio - Nehith Sai Vemulapalli

## Overview

This is a modern academic research portfolio website for Nehith Sai Vemulapalli, a Master's graduate in Robotics & AI seeking PhD positions, jobs, and internships. The application showcases research publications, academic projects, professional experience, technical skills, and provides contact functionality. Built as a full-stack web application with a focus on professional presentation and academic credibility optimized for job applications.

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
- **Color Palette**: Sage/forest green color scheme (#5d965a sage green, #366133 forest green) with dark mode support
- **Typography**: Space Grotesk font family throughout for modern, professional aesthetic
- **Component Theming**: Uniform py-16 spacing and centered layouts with card-based components
- **Visual Style**: Clean, academic aesthetic with consistent section spacing and card-based project displays
- **Responsive Design**: Mobile-first approach with responsive grid layouts for Contact section
- **UI/UX Approach**: Uniform section layouts with centered content, comprehensive project modals with detailed technical information
- **Dark Mode**: High contrast text (90% lightness) on dark backgrounds for optimal readability

### Content Management
- **Portfolio Sections**: Hero, Publications, Projects, Experience, Skills, Contact
- **Data Structure**: TypeScript interfaces for publications, projects, and experience entries
- **Asset Management**: PDF CV download and project imagery support
- **CV Management**: 
  - Current CV file: `cv_phd_1760007892664.pdf`
  - View CV button in Header navigation (opens in new tab)
  - Download CV button in Contact section (triggers download)
- **SEO Optimization**: Meta tags and Open Graph properties for academic discovery
- **Project Portfolio**: 10 comprehensive research projects with "Show More" functionality
  - Initially displays 6 projects with fade overlay
  - "Show More" button reveals remaining 4 projects
  - Dynamically adapts to category filters
  - Projects 1-10: Hybrid 3D Reconstruction, SLAM, Multi-Agent Swarm, Motor Control, EKF/MPC, Self-Reconfigurable Robots, Object Segmentation, Affective Computing, Pick-n-Place, YouBot Kinematics
- **Experience Highlights**:
  - UCL HereEast Graduate Research Project
  - AquaScout Founder (UCL Xplore Winner)
  - UCL Department of Computer Science Student Ambassador
- **Research Interests**: Computer Vision, 3D Reconstruction, SLAM, Aerial Robotics, AI/ML, Robots, Intelligent Systems, Autonomous Systems, Teleoperation
- **Opportunities**: Open to PhD Positions, Jobs & Internships, Research Collaborations, and Industry Projects

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