# Todo App

A modern task management application built with Angular 18 and Angular Material. Features a clean UI, real-time updates, and persistent storage via REST API.

![Angular Version](https://img.shields.io/badge/angular-18.2.0-red)
![Node Version](https://img.shields.io/badge/node-20.10.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed or pending
- Clean, Material Design UI
- Responsive layout
- HTTP interceptor with loading spinner
- ESLint integration with pre-commit hooks
- Full test coverage with Jasmine
- Docker support for easy deployment

## Tech Stack

- **Framework**: Angular 18.2
- **UI Library**: Angular Material & CDK
- **Language**: TypeScript
- **State Management**: RxJS
- **HTTP Client**: Angular HttpClient with interceptors
- **Testing**: Jasmine + Karma
- **Code Quality**: ESLint + Husky pre-commit hooks
- **Backend**: Mock API (MockAPI.io)

## Getting Started

### Prerequisites

- Node.js 20.10.0 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gentlecode1/todo.git
   cd todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Project Structure

```
src/
├── app/
│   ├── tasks/                      # Tasks feature module
│   │   ├── task/                   # Individual task component
│   │   ├── add-task-dialog/        # Dialog for adding tasks
│   │   ├── tasks.component.ts      # Main tasks container
│   │   ├── tasks.service.ts        # Tasks HTTP service
│   │   └── task.type.ts            # Task type definitions
│   ├── header/                     # Header component
│   ├── spinner.interceptor.ts      # HTTP loading interceptor
│   ├── loading-http.service.ts     # Loading state service
│   ├── app.component.ts            # Root component
│   ├── app.config.ts               # App configuration
│   └── app.routes.ts               # Routing configuration
├── assets/                         # Static assets
├── environments/                   # Environment configurations
└── main.ts                         # Application entry point
```

## Available Scripts

### Development

```bash
npm start              # Start dev server
npm run watch          # Build and watch for changes
```

### Testing

```bash
npm test                      # Run tests with browser
npm run test:no-browser       # Run tests headless (CI)
```

### Code Quality

```bash
npm run eslint         # Run ESLint
npm run eslint:quiet   # Run ESLint (errors only)
```

### Build

```bash
npm run build          # Production build
```

## Docker Deployment

Build and run with Docker:

```bash
# Build image
docker build -t todo-app .

# Run container
docker run -p 8080:80 todo-app
```

Access the app at `http://localhost:8080`

## Contributing

### Branch Naming

Use descriptive names:
- `feature/add-task-filter`
- `fix/task-deletion-bug`
- `refactor/simplify-service`

### Code Style

- Follow Angular style guide
- Run ESLint before committing
- Husky enforces pre-commit hooks

### Pre-commit Checks

Husky automatically runs:
- ESLint validation
- TypeScript compilation check

## API Integration

The app uses MockAPI.io for backend services:
- Endpoint: `https://mockapi.io/projects/6738f1b4a3a36b5a62ed95ee`
- Full CRUD operations supported
- Real-time data persistence

## License

MIT