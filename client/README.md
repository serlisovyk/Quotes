# Quotes App

This is a Next.js project for displaying and managing quotes. It allows users to view random quotes, search for quotes by various criteria, and manage (create, edit, delete) quotes through an interactive interface.

## Getting Started

### Running the Development Server

To run the app locally, first, install the dependencies:

1. `cd client`
1. `npm install`
1. `npm run dev`

This will start the app at [http://localhost:4000](http://localhost:4000).

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
