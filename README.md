# Employee Directory Backend

## Project Overview
This is the **backend** for the Employee Directory Application.  
It provides a **GraphQL API** to manage employees and departments.

### Features
- Add new employees
- List all employees
- Filter employees by department
- View detailed employee information

---

## Tech Stack
- Node.js
- Apollo Server 4
- MongoDB (native driver)
- GraphQL

---
## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/orwel009/employee-directory-backend.git
cd employee-directory-backend

```
### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file:

```bash
MONGO_URI= <your mongo URI >
PORT=4000
```

### 4. Seed initial data
```bash
node seed.js
```

### 5. Run the server
```bash
node server.js
```

Access GraphQL playground at: http://localhost:4000/