# RafStyle Barber Shop Management System

## Overview

RafStyle is a comprehensive barber shop management system that facilitates appointment scheduling, service management, and inventory tracking. The project provides both customer-facing features and administrative capabilities for barber shop operation.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - Sequelize ORM
  - MariaDB/MySQL
  - JWT for authentication

- **Frontend**:
  - Vue.js (customer portal)
  - Bootstrap/Bootstrap-Vue
  - HTML/CSS/JavaScript (admin panel)

- **Architecture**:
  - Microservices pattern with three distinct services:
    - `api_servis`: REST API for data operations
    - `app_servis`: Admin dashboard web application
    - `auth_server`: Authentication service

## Key Features

### Customer Portal (Vue.js)
- User registration and login
- Browse service categories and view detailed service information
- Appointment scheduling with barber selection
- Category-based service filtering

### Admin Dashboard
- Service management (add, edit, delete)
- Barber management (add, associate with service categories)
- Product/inventory management
- Appointment tracking and status updates
- Category management for organizing services

### Authentication System
- Secure JWT-based token authentication
- Role-based access control
- Password encryption

### Database Design
- Relational database with multiple interconnected entities
- Models for:
  - Categories (Premium, Top, and Standard Barbers)
  - Services (with pricing and category association)
  - Employees (associated with categories)
  - Products (inventory items)
  - Appointments (scheduling with status tracking)
  - Users (customers and administrators)

## Running the Project

1. Set up the database using the provided migration and seed files
2. Start the three services:
   - `api_servis` (port 9000)
   - `app_servis` (port 8000)
   - `auth_server` (port 9001)
3. Access the admin panel at `http://localhost:8000/admin`
4. Access the customer portal at `http://localhost:8080`

## Architecture Details

The system follows a microservices architecture with clear separation of concerns:

- **API Service**: Handles all data operations and business logic, providing a RESTful interface for both the admin panel and customer portal
- **App Service**: Serves the admin dashboard web application and processes form submissions
- **Auth Server**: Manages user authentication, token generation, and validation

This separation enhances maintainability, security, and scalability of the application.
