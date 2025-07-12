# Quotes App

This is a Fullstack project for displaying and managing quotes. It allows users to view random quotes, search for quotes by various criteria, and manage (create, edit, delete) quotes through an interactive interface.

## Tools

<p align="left">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="40" height="40" alt="Postgresql" />
  
  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="40" height="40" alt="NodeJS" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="40" height="40" alt="Express" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="40" height="40" alt="Docker" />

  <br>
  <br>
  
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="40" height="40" alt="Next js" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="40" height="40" alt="React" />

  <img width="12" />

  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="40" height="40" alt="Tailwind" />

  <img width="12" />

  <img src="https://www.svgrepo.com/show/353930/jest.svg" width="40" height="40" alt="Jest" />

  <img width="12" />
</p>

## Getting Started

## Filling database with initial data

Follow instructions in the `database/seed/README.md` file to fill database with quotes and categories.
All necessary database files are located in the `database/data`.

## Running API

1. `cd server`
1. `docker compose up -d`
1. `npm install`
1. `npm run dev`

### Running the Development Server

To run the app locally, first, install the dependencies:

1. `cd client`
1. `npm install`
1. `npm run dev`

## Project Structure

```text
app
├── _components        # Shared components like buttons and forms
├── _config            # Configuration files, including API endpoints
├── _queries            # Tanstack queries for fetching data
├── _services         # Services for interacting with the API
├── _utils             # Utility functions for fetching data and helper functions
└── (routes)           # Dynamic routes for handling different pages
    ├── quotes         # Routes related to managing quotes
    │   ├── [id]       # Routes related to single quote
    │   │   └── edit   # Route for editing single quote
    │   └── create     # Route for creating a single quote
    ├── search         # Route related to searching for quotes
    ├── fonts          # Custom font files
    ├── favicon.ico    # App favicon
    ├── globals.css    # Global CSS styles
    ├── layout.js      # Main layout component
    └── page.js        # Page for displaying random quotes
    └── query-provider.js # Query provider for Tanstack queries
```

## API Endpoints

The app interacts with the following backend API endpoints:

- GET **`/random`**: Fetches random quotes.
- GET **`/quotes`**: Fetches and searches for quotes (e.g., by text, author, category).
- POST **`/quotes`**: Creates a new quote.
- GET **`/quotes/:id`**: Fetches a specific quote by its ID.
- PATCH **`/quotes/:id`**: Edits an existing quote.
- DELETE **`/quotes/:id`**: Deletes a quote.
