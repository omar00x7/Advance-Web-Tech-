# Product and Employee Management API

## Student Information
- **Name:**Md.Farhan Ferdous Omar
- **Student ID:** 24-56430-1
- **Section:** B

## Project Description
A NestJS REST API for managing products and employees using PostgreSQL and TypeORM.

## Technologies
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman
- pnpm

## Prerequisites
- Node.js
- pnpm
- PostgreSQL

## Setup Instructions
1. Install PostgreSQL and create a database named `product_management`.
2. Copy `.env.example` to `.env`.
3. Update `.env` with your local PostgreSQL credentials.
4. Install dependencies:

   `pnpm install`

5. Build the application:

   `pnpm build`

6. Start the development server:

   `pnpm start:dev`

## Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Employee Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## Screenshots
Product API testing screenshots are available in the `screenshots/` directory.

## Database
The application uses PostgreSQL with TypeORM to persist product and employee records.

