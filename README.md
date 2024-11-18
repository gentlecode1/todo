# Todo App

## Overview
Todo App is a simple app designed for managing tasks.
You can create tasks and set them as completed or pending.
There is a Mock Api for the backend (https://mockapi.io/projects/6738f1b4a3a36b5a62ed95ee)

## Badges
![Angular Version](https://img.shields.io/badge/angular-18.2.0-red)
![Node Version](https://img.shields.io/badge/node-20.10.0-green)

## Installation
To install and set up the Todo App, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/ITACCIONA/ene_ESCO__olympo_reports.git
   cd olympo_reports
   ```

2. Install dependencies:
   For Node.js projects, run:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

6. Access the application:
   Open your web browser and navigate to `http://localhost:4200`.


## Project Structure
The following is the project's directory structure, along with brief descriptions of key files and directories:
```
├── src/
│   ├── app/
│   │   ├── tasks/                   
│   │   ├── header/                 
│   │   ├── app.component.ts           
│   │   └── app.config.ts              
│   ├── assets/                        
│   ├── environments/                  
│   └── main.ts                       
├── package.json                      
└── README.md
```

## Contributing

Please adhere to the following guidelines:

- Branch Naming: Use descriptive names for branches, e.g., feature/add-login or fix/bug-in-comparison-chart.
- Code Style: Maintain consistent formatting and code standards. Use eslint for validation.
- Husky hooks: There are pre-commit hooks to preserve the quality of the source code.

Useful commands:

- Run tests
   ```bash
   npm run test:no-browser
   ```

- Run eslint
   ```bash
   npm run eslint
   ```

- Build
   ```bash
   npm run build
   ```