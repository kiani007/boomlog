# Project Setup

## Local Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kiani007/boomlog.git
   cd your-repo-name
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```
   ***Remember to put Clerk Secret Keys in .env file***

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your database connection string:
   There is example.env copy the list of evoinrment variable and paste yours in .env file
   ```
    DATABASE_URL="Your DATABASE_URL"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Your Key"
    CLERK_SECRET_KEY= 
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   
   
   ```

4. **Run Migrations**
   Use Prisma to run migrations and set up your database schema:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

## Prisma Schema and Server Actions

- **Prisma Schema**: The schema consists of several models such as `User`, `Post`, and `Event`. Each model is defined with fields and their types, as well as relationships between models.
  
- **Server Actions**: The server-side logic includes functions for creating users, logging events, and managing posts. These functions interact with the database using Prisma.

## Logging Events and Fetching Analytics

- **Log Events**: Use the `logEvent` function to record user interactions like views, likes, and comments. It takes parameters such as event type, post ID, and user ID.

- **Fetch Analytics**: The `fetchAnalytics` function aggregates event data to provide insights into post interactions. It groups events by post ID and counts occurrences.

## Pagination Implementation

- **Pagination Component**: The `Pagination` component manages navigation through pages of posts. It provides "Prev" and "Next" buttons and displays the current page number.
  
- **Usage**: Include the `Pagination` component in your posts page, passing `currentPage` and `totalPages` as props to enable navigation.

## Additional Notes

- Ensure your database is running and accessible with the connection string provided in the `.env` file.
- Customize Tailwind CSS and other styling as needed in the `tailwind.config.ts` and `globals.css`.
- Use server actions carefully, ensuring security and validation of data before processing.


