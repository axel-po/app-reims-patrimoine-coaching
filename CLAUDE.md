# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 educational platform for heritage coaching in Reims, built with TypeScript and implementing Clean Architecture principles with Domain-Driven Design patterns. The application features secure video streaming, Stripe payment integration, and a sophisticated authentication system.

## Development Commands

```bash
# Development
pnpm dev              # Start development server (includes DB connection check)
pnpm build            # Production build
pnpm start            # Production server

# Database Management
pnpm db:check         # Verify database connection
pnpm db:migrate       # Run database migrations
pnpm db:studio        # Open Drizzle Studio for database management
pnpm db:seed          # Populate database with test data
pnpm db:reset-seed    # Reset database and seed with fresh data

# Testing
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:coverage    # Run tests with coverage report
pnpm test:domain      # Run domain layer tests only
pnpm test:infrastructure  # Run infrastructure layer tests only
pnpm test:ui          # Run UI component tests only

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Check code formatting with Prettier
pnpm format:fix       # Fix code formatting with Prettier
```

## Architecture

The codebase follows **Clean Architecture** with strict separation of concerns:

### Core Structure
- **`src/domain/`** - Business logic layer (entities, use cases, models)
- **`src/infrastructure/`** - External concerns (database, repositories, presenters)
- **`src/userinterface/`** - Presentation layer (components, actions, pages)
- **`src/di/`** - Dependency injection containers using Awilix
- **`src/lib/`** - Shared utilities and configurations

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Database**: Drizzle ORM with PostgreSQL (Neon)
- **Authentication**: better-auth with database sessions
- **Payments**: Stripe (one-time payments with installments)
- **Storage**: Cloudflare R2 for secure video streaming
- **UI**: shadcn/ui components with Tailwind CSS
- **State**: Zustand + nuqs for URL state management
- **Testing**: Vitest with React Testing Library

## Database Development

Always run `pnpm db:check` before starting development to ensure database connectivity. Use `pnpm db:studio` to visually inspect and modify database content during development.

## Testing Strategy

Tests are organized by architectural layers:
- Domain tests: Business logic and use cases
- Infrastructure tests: Database operations and external integrations
- UI tests: Component behavior and user interactions

Run layer-specific tests during development to focus on specific areas.

## Authentication & Security

The application uses middleware-based route protection for `/dashboard/*` routes. Authentication state is managed through better-auth with database-backed sessions. Video content is protected with anti-hotlinking measures and secure streaming endpoints.

## Payment Integration

Stripe integration uses one-time payments (not subscriptions). Payment status is tracked in the database and affects user access to premium content. Webhook endpoints handle payment completion events.

## Dual Project Structure

This repository contains two applications:
1. **Main app** (`/src`) - Production educational platform
2. **Clean Code practice** (`/cleancode`) - Separate Vite+React app demonstrating Clean Architecture with Redux Toolkit

When working on features, focus on the main application unless specifically asked about the cleancode project.

## Code Patterns

- Use dependency injection through Awilix containers for testability
- Follow Domain-Driven Design with clear entity boundaries
- Implement server actions for form handling and mutations
- Use Drizzle schema-first approach for database operations
- Apply security-first principles for video content and user data