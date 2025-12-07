# 📘 Blog Backend API
**Fastify • MongoDB • RESTful CRUD API**

This project is a **backend-only REST API** for a personal blogging platform.  
Built using **Fastify** and **MongoDB Atlas**, it follows clean, modular architecture and real-world best practices.  
All API endpoints support **CRUD operations** and have been thoroughly tested using **Postman**.

---

## 🚀 Features

- Fast, lightweight backend built with **Fastify**
- **CRUD API** for blog articles
- **MongoDB Atlas** integration using `@fastify/mongodb`
- Modular routes (`routes.js`)
- Separate database connector (`our-db-connector.js`)
- Environment variables (`.env`)
- Fully tested with Postman

---

## 🧱 Tech Stack

- **Backend:** Node.js, Fastify  
- **Database:** MongoDB / MongoDB Atlas  
- **Libraries:** `@fastify/mongodb`, `dotenv`
  
## 📂 Project Structure

backend/

─server.js

─our-db-connector.js

─ routes.js

─package.json

─.env

## ⚙️ Setup Instructions

1. Clone the repository


- git clone <your-repo-url>
- cd backend
  

3. Install dependencies

4. Create .env file
   
- PORT=5000
- MONGO_URL= your-mongodb-connection-string

7. Start the server
   
node server.js


## The API now runs on:
👉 http://localhost:5000

## 📚 API Documentation
Base URL: http://localhost:5000/api

## ⭐ Endpoints
1. GET /articles: Retrieve all articles.

Supports optional filters:

- /api/articles?tag=tech
- /api/articles?date=2024-01-01

2. GET /articles/:id :Retrieve a single article by ID.
   
- Example: GET /api/articles/674c7f8931f7ab21dd4b2b95

3. POST /articles

Create a new article.

Body (JSON):

{
  "title": "My First Article",
  "content": "This is the content",
  "tags": ["blog", "api"]
}

4. PUT /articles/:id

Update an existing article by ID.

Body Example:

{
  "title": "Updated Title"
}

5. DELETE /articles/:id

Delete an article by ID.

🗄 MongoDB Article Schema (Document Structure)
{
  "_id": "ObjectId",
  "title": "String",
  "content": "String",
  "tags": ["blog", "tech"],
  "createdAt": "Date"
}

## 🧪 Testing

You can test all API endpoints using Postman:

Create a new article

Get all articles

Query by tag/date

Update an article

Delete an article

Everything returns proper JSON responses.
