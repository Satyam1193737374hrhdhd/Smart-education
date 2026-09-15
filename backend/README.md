# Educa Portal - Express.js & Supabase Backend Service

Production-grade RESTful API service powering the **Educa Smart Education Portal**, featuring Supabase Cloud PostgreSQL integration, security headers, role-based authorization, and centralized error handling.

---

## Architecture Overview

```
backend/
├── config/
│   └── supabase.js             # Supabase client initialization & health check
├── middleware/
│   ├── auth.js                 # Authentication & user resolution middleware
│   └── errorHandler.js         # Centralized error handler & 404 response
├── models/
│   ├── Course.js               # Course playlists & syllabus data access
│   ├── Doubt.js                # Doubt Nexus questions, answers, and bounties
│   ├── Project.js              # Collaboration projects and peer applications
│   ├── Profile.js              # Student profiles, XP progression & levels
│   ├── Resource.js             # Academic vault cheatsheets & notes
│   └── Contact.js              # Contact form inquiries
├── routes/
│   ├── courseRoutes.js         # /api/courses
│   ├── doubtRoutes.js          # /api/doubts
│   ├── projectRoutes.js        # /api/projects
│   ├── profileRoutes.js        # /api/profiles
│   ├── resourceRoutes.js       # /api/resources
│   └── contactRoutes.js        # /api/contact
├── .env                        # Active environment configuration
├── .env.example                # Template configuration
├── package.json                # Dependencies & scripts
├── server.js                   # Server entry point & route mounting
└── README.md                   # Documentation
```

---

## Getting Started

### 1. Prerequisites
- **Node.js**: v18 or higher recommended
- **NPM**: v9 or higher

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` (already preconfigured with active Supabase project credentials):
```env
PORT=5000
NODE_ENV=development
SUPABASE_URL=https://jybnhvlsccruhkdsvvtq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
CLIENT_URL=http://localhost:3000,http://127.0.0.1:5500
```

### 4. Run the Server
- **Development Mode (Auto-reloading with nodemon)**:
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

The server will start at: `http://localhost:5000`

---

## API Endpoints Reference

### Health & Info
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Server and Supabase database connection health check |
| `GET` | `/api` | API directory and available service endpoints |

### 1. Courses (`/api/courses`)
| Method | Endpoint | Description | Query Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/courses` | List all courses | `category`, `search` |
| `GET` | `/api/courses/:id` | Get single course | — |

### 2. Doubt Nexus (`/api/doubts`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/doubts` | List doubts with answers | `tag`, `search` |
| `GET` | `/api/doubts/:id` | Get single doubt by ID | — |
| `POST` | `/api/doubts` | Create a new doubt | `{ title, description, tags, bounty_xp }` |
| `POST` | `/api/doubts/:id/vote` | Upvote a doubt | — |
| `POST` | `/api/doubts/:id/answers` | Post an answer | `{ content }` |
| `PATCH` | `/api/doubts/:id/answers/:ansId/accept` | Accept an answer | — |

### 3. Project Collab Vault (`/api/projects`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/projects` | List all collaboration projects | `role`, `category` |
| `GET` | `/api/projects/:id` | Get project with applications | — |
| `POST` | `/api/projects` | Pitch a new team project | `{ title, pitch, category, tech_stack, open_roles, max_team_size }` |
| `POST` | `/api/projects/:id/apply` | Apply to join a project | `{ role_applied }` |

### 4. Student Profiles (`/api/profiles`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/profiles/:id` | Get student profile & XP | — |
| `PUT` | `/api/profiles/:id` | Update profile information | `{ name, email, avatar }` |
| `POST` | `/api/profiles/:id/xp` | Award XP points | `{ amount }` |

### 5. Academic Resources (`/api/resources`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/resources` | List academic resources | `category`, `search` |
| `POST` | `/api/resources` | Share a new resource | `{ title, category, topic, description }` |
| `POST` | `/api/resources/:id/download` | Increment download count | — |

### 6. Contact & Inquiries (`/api/contact`)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/contact` | Submit contact message | `{ name, email, phone, message }` |
| `GET` | `/api/contact` | List all contact messages (admin) | — |

---

## Deployment Options

This backend is ready to deploy on any modern cloud hosting platform:
- **Render / Railway / Fly.io**: Specify `npm start` as the start command and add the `.env` variables.
- **Vercel / Netlify Functions**: Wrap `server.js` using `serverless-http`.
