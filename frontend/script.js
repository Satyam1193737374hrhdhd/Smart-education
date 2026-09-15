/* ==========================================================================
   Educa JavaScript App Core & State Engine (Full Upgrade)
   ========================================================================== */

// 1. Core Seed Data (Tutors, Playlists, Videos)
const seedTutors = [
   {
      id: "tut-1",
      name: "Alex Johnson",
      profession: "Senior Developer",
      image: "pic-1.jpg",
      playlistsCount: 3,
      videosCount: 8,
      likesCount: 145
   },
   {
      id: "tut-2",
      name: "Sarah Connor",
      profession: "UI/UX Designer",
      image: "pic-4.jpg",
      playlistsCount: 2,
      videosCount: 5,
      likesCount: 98
   },
   {
      id: "tut-3",
      name: "David Miller",
      profession: "Backend Architect",
      image: "pic-3.jpg",
      playlistsCount: 2,
      videosCount: 6,
      likesCount: 112
   },
   {
      id: "tut-4",
      name: "Emma Watson",
      profession: "Marketing Lead",
      image: "pic-6.jpg",
      playlistsCount: 1,
      videosCount: 3,
      likesCount: 54
   }
];

const seedPlaylists = [
   {
      id: "play-1",
      tutor_id: "tut-1",
      title: "Complete HTML5 Masterclass",
      description: "Learn the core backbone of web development. We start from absolute scratch and cover semantic HTML, structures, tags, inputs, forms, validation, and advanced HTML5 APIs.",
      thumb: "thumb-1.png",
      date: "2026-05-12",
      category: "development",
      status: "active"
   },
   {
      id: "play-2",
      tutor_id: "tut-1",
      title: "CSS3 Grid & Flexbox Layouts",
      description: "Master modern CSS responsive layout techniques. Build premium landing pages, responsive grids, media query architectures, and stunning glassmorphism layouts.",
      thumb: "thumb-2.png",
      date: "2026-06-01",
      category: "development",
      status: "active"
   },
   {
      id: "play-3",
      tutor_id: "tut-1",
      title: "JavaScript ES6 Essentials",
      description: "Deep dive into JS syntax, arrow functions, DOM manipulation, promises, async/await, fetch requests, event loops, and building rich single page apps.",
      thumb: "thumb-3.png",
      date: "2026-06-20",
      category: "development",
      status: "active"
   },
   {
      id: "play-4",
      tutor_id: "tut-2",
      title: "UI/UX Design Systems & Figma",
      description: "Step-by-step training on Figma, design methodologies, color theory, spacing, typographic scales, design tokens, and components design systems.",
      thumb: "thumb-4.png",
      date: "2026-07-02",
      category: "design",
      status: "active"
   },
   {
      id: "play-5",
      tutor_id: "tut-3",
      title: "PHP PDO & MySQL Database Course",
      description: "Learn robust database operations using PHP PDO. Secure SQL query execution, password hashing, CRUD projects, session management, and authentication systems.",
      thumb: "thumb-5.png",
      date: "2026-07-15",
      category: "development",
      status: "active"
   },
   {
      id: "play-6",
      tutor_id: "tut-3",
      title: "Node.js & Express REST APIs",
      description: "Build scalable backend APIs. Manage authentication using JWT, middleware systems, database models, error handlers, and cloud deployments.",
      thumb: "thumb-6.png",
      date: "2026-08-01",
      category: "software",
      status: "active"
   }
];

const seedVideos = [
   {
      id: "vid-1",
      playlist_id: "play-1",
      tutor_id: "tut-1",
      title: "Introduction to HTML5 & Setup",
      description: "Setting up our code editors (VS Code), extensions, understanding document structure, doc types, and rendering our first tag.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-1.png",
      date: "2026-05-12"
   },
   {
      id: "vid-2",
      playlist_id: "play-1",
      tutor_id: "tut-1",
      title: "Semantic HTML elements",
      description: "Understanding article, section, header, nav, footer, main, and how they benefit SEO architectures.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumb: "thumb-1.png",
      date: "2026-05-13"
   },
   {
      id: "vid-3",
      playlist_id: "play-1",
      tutor_id: "tut-1",
      title: "HTML5 Forms & Inputs Validation",
      description: "Handling text, password, range, dates, checkboxes, radios, select inputs, and modern CSS validation hooks.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-1.png",
      date: "2026-05-15"
   },
   {
      id: "vid-4",
      playlist_id: "play-2",
      tutor_id: "tut-1",
      title: "Flexbox Layout Model Deep Dive",
      description: "Master align-items, justify-content, flex-wrap, flex-grow, flex-shrink, and nested layouts.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumb: "thumb-2.png",
      date: "2026-06-01"
   },
   {
      id: "vid-5",
      playlist_id: "play-2",
      tutor_id: "tut-1",
      title: "CSS Grid: Building Complex Columns",
      description: "Grid templates, repeat auto-fit, minmax values, gap configurations, and page wrapper grids.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-2.png",
      date: "2026-06-03"
   },
   {
      id: "vid-6",
      playlist_id: "play-3",
      tutor_id: "tut-1",
      title: "Variables, Scope, and Let/Const",
      description: "Block scopes vs. global scope, hoisting mechanics, temporal dead zones, and coding rules.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-3.png",
      date: "2026-06-20"
   },
   {
      id: "vid-7",
      playlist_id: "play-3",
      tutor_id: "tut-1",
      title: "DOM Selectors & Event Listeners",
      description: "Selecting elements, adding event listeners, bubbling, capturing, and updating dynamic elements.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumb: "thumb-3.png",
      date: "2026-06-22"
   },
   {
      id: "vid-8",
      playlist_id: "play-3",
      tutor_id: "tut-1",
      title: "Asynchronous JS: Promises & Fetch API",
      description: "AJAX requests, rendering remote API payloads, promise chains, and robust async/await models.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-3.png",
      date: "2026-06-25"
   },
   {
      id: "vid-9",
      playlist_id: "play-4",
      tutor_id: "tut-2",
      title: "Introduction to User Experience (UX)",
      description: "User research, personas definition, wireframing workflows, and usability heuristics.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumb: "thumb-4.png",
      date: "2026-07-02"
   },
   {
      id: "vid-10",
      playlist_id: "play-4",
      tutor_id: "tut-2",
      title: "Figma Fundamentals: UI Design Tools",
      description: "Auto-layout, vectors, masking, color fills, styles mapping, libraries integration, and prototypes.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-4.png",
      date: "2026-07-05"
   },
   {
      id: "vid-11",
      playlist_id: "play-5",
      tutor_id: "tut-3",
      title: "PHP PDO Database Setup & DSN",
      description: "Creating our PDO object instance, handling exceptions, setting attributes, and configuring connection character sets.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-5.png",
      date: "2026-07-15"
   },
   {
      id: "vid-12",
      playlist_id: "play-5",
      tutor_id: "tut-3",
      title: "Prepared Statements & SQL Injection Prevention",
      description: "Using placeholder arrays, executing queries, row counts, fetching records securely.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumb: "thumb-5.png",
      date: "2026-07-18"
   },
   {
      id: "vid-13",
      playlist_id: "play-6",
      tutor_id: "tut-3",
      title: "Setting up Node.js & Express server",
      description: "NPM init, installing Express, building a listener socket, routing index request, and hot reloading configurations.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumb: "thumb-6.png",
      date: "2026-08-01"
   }
];

const seedQuizzes = {
   "play-1": [
      {
         question: "Which HTML5 tag is used to wrap self-contained content like images, diagrams, or code listings?",
         options: ["<aside>", "<figure>", "<section>", "<details>"],
         answer: 1
      },
      {
         question: "What is the primary benefit of semantic elements in HTML5?",
         options: ["Makes videos play faster", "Improves code readability and SEO structure", "Adds default glassmorphism effects", "Enables script injection protection"],
         answer: 1
      },
      {
         question: "Which form element attribute specifies that an input field must be filled out before submitting?",
         options: ["validate", "autofocus", "required", "placeholder"],
         answer: 2
      }
   ],
   "play-3": [
      {
         question: "Which variable declaration keyword has block-level scope and cannot be redeclared in the same scope?",
         options: ["var", "let", "global", "define"],
         answer: 1
      },
      {
         question: "How do you add an event handler that fires when a user clicks on an element in vanilla JS?",
         options: ["element.onClick()", "element.addEventListener('click', handler)", "element.listen('click')", "element.bindEvent('click')"],
         answer: 1
      },
      {
         question: "What state does a Promise start in before it resolves or rejects?",
         options: ["fulfilled", "rejected", "pending", "locked"],
         answer: 2
      }
   ],
   "play-4": [
      {
         question: "What design model focuses primarily on the ease-of-use and user flow through an interface?",
         options: ["Software Development Life Cycle", "User Experience (UX) Heuristics", "Vector Layer optimization", "Semantic Grid alignment"],
         answer: 1
      },
      {
         question: "Which tool in Figma helps create responsive, self-aligning layout grids inside frames?",
         options: ["Masking Tool", "Pen Tool", "Auto Layout", "Smart Animate"],
         answer: 2
      }
   ]
};

const mockStudentsLeaderboard = [
   { rank: 1, name: "Suresh Kumar", image: "pic-3.jpg", level: 12, xp: 3450, streak: 15 },
   { rank: 2, name: "Elena Rostova", image: "pic-4.jpg", level: 10, xp: 2980, streak: 8 },
   { rank: 3, name: "Devansh Sharma", image: "pic-5.jpg", level: 8, xp: 2150, streak: 5 },
   { rank: 4, name: "John Student", image: "pic-2.jpg", level: 2, xp: 180, streak: 3 },
   { rank: 5, name: "Carlos Ortega", image: "pic-6.jpg", level: 1, xp: 90, streak: 1 }
];

const badgeRegistry = {
   "badge-1": { title: "Pioneer Apprentice", desc: "Successfully joined the portal and configured a profile.", icon: "fas fa-award" },
   "badge-2": { title: "Polyglot Scholar", desc: "Switched translation system and viewed vernacular content.", icon: "fas fa-language" },
   "badge-3": { title: "Intellectual Voice", desc: "Posted your first lesson discussion comment.", icon: "fas fa-comment-dots" },
   "badge-4": { title: "Knowledge Seeker", desc: "Successfully took your first automated course quiz.", icon: "fas fa-graduation-cap" },
   "badge-5": { title: "Perfect Score Mastery", desc: "Scored 100% correct answers on a skills quiz.", icon: "fas fa-circle-check" },
   "badge-6": { title: "Tech Lab Explorer", desc: "Completed diagnostics inside the interactive 3D laboratory.", icon: "fas fa-cubes" }
};

// Seed Data for Future of Education Modules
const initialRoadmaps = {
   "web-dev": {
      id: "web-dev",
      title: "Full-Stack Web Architect Pathway",
      level: "Beginner to Pro",
      milestones: [
         { id: "m-web-1", title: "Semantic HTML5 & Modern Layouts", tags: ["HTML5", "Flexbox", "Grid"], xp: 50, completed: true, desc: "Master responsive layout primitives, semantic document structures, and accessibility best practices." },
         { id: "m-web-2", title: "Modern JavaScript (ES6+) & Async Workflows", tags: ["Promises", "Async/Await", "Event Loop"], xp: 75, completed: true, desc: "Deep dive into execution contexts, closures, Fetch API, and asynchronous control flows." },
         { id: "m-web-3", title: "Component Architecture with React & Hooks", tags: ["React", "State", "useEffect"], xp: 100, completed: false, desc: "Build interactive user interfaces with reusable functional components and customized state hooks." },
         { id: "m-web-4", title: "RESTful APIs & Backend Architecture", tags: ["Node.js", "Express", "REST"], xp: 120, completed: false, desc: "Design high-performance API endpoints, authentication middleware (JWT), and request validation." },
         { id: "m-web-5", title: "Database Schema Design & Query Optimization", tags: ["SQL", "Indexes", "Normalization"], xp: 150, completed: false, desc: "Structure relational schemas, prevent N+1 queries, and implement robust transactional queries." },
         { id: "m-web-6", title: "Full-Stack Capstone Project & Cloud Deployment", tags: ["Docker", "CI/CD", "Vercel/AWS"], xp: 200, completed: false, desc: "Deploy a production-ready application with automated CI/CD pipelines, SSL, and performance monitoring." }
      ]
   },
   "ai-ml": {
      id: "ai-ml",
      title: "AI & Machine Learning Specialist Pathway",
      level: "Intermediate to Advanced",
      milestones: [
         { id: "m-ai-1", title: "Python for Data Science & Linear Algebra", tags: ["NumPy", "Pandas", "Math"], xp: 60, completed: true, desc: "Vectorized computations, matrix operations, data cleaning, and statistical distributions." },
         { id: "m-ai-2", title: "Exploratory Data Analysis & Visualization", tags: ["Matplotlib", "Seaborn", "Stats"], xp: 80, completed: false, desc: "Extract actionable insights through heatmaps, correlation matrices, and distribution analysis." },
         { id: "m-ai-3", title: "Supervised Learning & Regression Models", tags: ["Scikit-Learn", "Regression", "Trees"], xp: 110, completed: false, desc: "Train linear models, decision trees, and ensemble methods with cross-validation." },
         { id: "m-ai-4", title: "Neural Networks & Deep Learning Foundations", tags: ["PyTorch", "Backprop", "CNN"], xp: 150, completed: false, desc: "Build multi-layer perceptrons, convolutional layers, and optimize loss functions with Adam." },
         { id: "m-ai-5", title: "LLMs & Modern Generative AI", tags: ["Transformers", "RAG", "Embeddings"], xp: 200, completed: false, desc: "Harness pretrained transformer architectures, vector embeddings, and retrieval-augmented generation." }
      ]
   },
   "dsa-systems": {
      id: "dsa-systems",
      title: "Data Structures & System Architecture",
      level: "All Skill Levels",
      milestones: [
         { id: "m-dsa-1", title: "Algorithmic Complexity & Big-O Analysis", tags: ["Big-O", "Space/Time", "Math"], xp: 50, completed: true, desc: "Analyze asymptotic complexity, recursion trees, and dynamic memory allocations." },
         { id: "m-dsa-2", title: "Linear Data Structures & Hash Tables", tags: ["Arrays", "Linked Lists", "HashMaps"], xp: 75, completed: true, desc: "Implement constant-time lookup maps, collision handling, and doubly linked list pointer manipulation." },
         { id: "m-dsa-3", title: "Trees, Graphs & Traversal Algorithms", tags: ["BFS", "DFS", "Dijkstra"], xp: 120, completed: false, desc: "Graph representations, topological sort, shortest paths, and binary search tree balancing." },
         { id: "m-dsa-4", title: "Scalable Distributed System Fundamentals", tags: ["Load Balancing", "Caching", "Sharding"], xp: 160, completed: false, desc: "Architect high-availability systems with Redis caching, consistent hashing, and database sharding." }
      ]
   }
};

const initialStudyPlanner = {
   focusMinutesToday: 50,
   targetMinutes: 120,
   sessionsCompleted: 2,
   activeMode: 'work',
   spacedRepetitions: [
      { id: "rep-1", title: "JavaScript Closures & Lexical Scope", course: "ES6 Masterclass", dueDate: "Today", completed: false },
      { id: "rep-2", title: "SQL Indexing & B-Trees", course: "Database Fundamentals", dueDate: "Today", completed: true },
      { id: "rep-3", title: "CSS Grid Auto-Fit vs Auto-Fill", course: "CSS Design Systems", dueDate: "Tomorrow", completed: false }
   ]
};

const initialDoubts = [
   {
      id: "doubt-1",
      title: "Why does async/await return a Promise even when returning a primitive string?",
      desc: "When I write an async function like `async function getGreeting() { return 'hello'; }`, calling it returns `Promise {<fulfilled>: 'hello'}` instead of `'hello'`. What is the underlying reason?",
      code: "async function getGreeting() {\n   return 'Hello World';\n}\n\nconst val = getGreeting();\nconsole.log(val); // Logs Promise instead of string!",
      tag: "JavaScript",
      bounty: 50,
      authorName: "Carlos Ortega",
      authorImage: "pic-3.jpg",
      date: "2 hours ago",
      votes: 14,
      hasVoted: false,
      solved: true,
      answers: [
         {
            id: "ans-1",
            userName: "Dev Sarah",
            userImage: "pic-4.jpg",
            date: "1 hour ago",
            body: "Every async function in JavaScript automatically wraps non-promise return values in Promise.resolve(val). This guarantees a uniform asynchronous contract so calling code can always use .then() or await safely without type checking.",
            accepted: true
         }
      ]
   },
   {
      id: "doubt-2",
      title: "When should I choose SQLite over PostgreSQL for full-stack student projects?",
      desc: "I'm building a project with 3 peers. Some tutorials recommend SQLite while others insist on PostgreSQL. What are the performance and concurrency trade-offs?",
      code: "// Connecting to database\nconst db = new Database('./app.sqlite');\n// vs PostgreSQL connection pool with pg",
      tag: "Database",
      bounty: 25,
      authorName: "Maya Lin",
      authorImage: "pic-6.jpg",
      date: "4 hours ago",
      votes: 8,
      hasVoted: false,
      solved: false,
      answers: [
         {
            id: "ans-2",
            userName: "John Student",
            userImage: "pic-2.jpg",
            date: "3 hours ago",
            body: "SQLite is fantastic for prototypes and local development because it is serverless and zero-configuration (stored in a single file). PostgreSQL is better if you need concurrent write locks across multiple backend instances or advanced JSONB querying.",
            accepted: false
         }
      ]
   },
   {
      id: "doubt-3",
      title: "How to avoid unnecessary React re-renders with heavy array filtering?",
      desc: "In our dashboard with 500+ items, re-filtering on every keystroke lags the UI. Should I use useMemo, React.memo, or debouncing?",
      code: "const filteredList = items.filter(item => \n   item.title.toLowerCase().includes(search.toLowerCase())\n);",
      tag: "React",
      bounty: 100,
      authorName: "Alice Vance",
      authorImage: "pic-5.jpg",
      date: "Yesterday",
      votes: 19,
      hasVoted: false,
      solved: false,
      answers: []
   }
];

const initialCollabProjects = [
   {
      id: "proj-1",
      title: "Smart EcoTrack: Real-Time Carbon Footprint Visualizer",
      pitch: "A modern web dashboard that visualizes personal energy and commute carbon emissions using Open Data APIs and interactive Three.js 3D visualizations.",
      category: "Web Development",
      tech: ["React", "Three.js", "Node.js", "Chart.js"],
      roles: ["Frontend Dev", "UI/UX Designer"],
      members: ["pic-2.jpg", "pic-4.jpg"],
      currentTeamSize: 2,
      maxTeamSize: 4,
      status: "Recruiting",
      isApplied: false
   },
   {
      id: "proj-2",
      title: "EduMatch: AI Peer Study Buddy Recommendation Engine",
      pitch: "Matches university students studying complementary topics for collaborative problem-solving using vector embeddings and shared calendar availability.",
      category: "AI & ML",
      tech: ["Python", "FastAPI", "PostgreSQL", "Tailwind"],
      roles: ["ML Engineer", "Backend Dev"],
      members: ["pic-3.jpg", "pic-6.jpg", "pic-1.jpg"],
      currentTeamSize: 3,
      maxTeamSize: 4,
      status: "Recruiting",
      isApplied: false
   },
   {
      id: "proj-3",
      title: "CampusQuest: Gamified Campus Orientation Web App",
      pitch: "Interactive GPS & QR code scavenger hunt web app designed for freshmen to learn campus facilities and discover academic resource centers.",
      category: "Mobile App",
      tech: ["JavaScript", "HTML5 Geolocation", "PWA", "CSS3"],
      roles: ["PWA Specialist"],
      members: ["pic-5.jpg"],
      currentTeamSize: 1,
      maxTeamSize: 3,
      status: "Recruiting",
      isApplied: false
   }
];

const initialResources = [
   {
      id: "res-1",
      title: "The Modern Full-Stack Developer Cheatsheet 2026",
      category: "Cheatsheet",
      topic: "Web Development",
      icon: "fas fa-file-code",
      desc: "High-density reference for CSS Grid, Flexbox, ES6+ array methods, HTTP status codes, and Git commands.",
      author: "Dev Sarah",
      downloads: 1420,
      upvotes: 384,
      hasUpvoted: false
   },
   {
      id: "res-2",
      title: "Data Structures & Algorithms Complete Visual Notes",
      category: "Study Notes",
      topic: "Algorithms",
      icon: "fas fa-file-pdf",
      desc: "Handcrafted diagrams illustrating recursion trees, Dijkstra's algorithm, binary heaps, and dynamic programming tables.",
      author: "Alex River",
      downloads: 2150,
      upvotes: 512,
      hasUpvoted: false
   },
   {
      id: "res-3",
      title: "Full-Stack Project Starter Kit with Auth & Database",
      category: "Starter Kit",
      topic: "Full-Stack",
      icon: "fas fa-laptop-code",
      desc: "Production boilerplate with JWT authentication, SQLite/PostgreSQL schemas, dark mode tokens, and automated testing.",
      author: "John Student",
      downloads: 890,
      upvotes: 230,
      hasUpvoted: false
   },
   {
      id: "res-4",
      title: "Computer Science University Exam Survival Guide",
      category: "Exam Prep",
      topic: "CS Fundamentals",
      icon: "fas fa-graduation-cap",
      desc: "Key proofs, recurrence relations, OS scheduling formulas, and database normalization normal forms.",
      author: "Maya Lin",
      downloads: 1120,
      upvotes: 298,
      hasUpvoted: false
   }
];

// 2. Hybrid Data Adapter State Configuration
const AppState = {
   user: JSON.parse(localStorage.getItem('educa_user')) || {
      id: "usr-99",
      name: "John Student",
      email: "student@educa.com",
      image: "pic-2.jpg",
      role: "student",
      xp: 180,
      level: 2,
      streak: 3,
      lastActiveDate: new Date().toISOString().split('T')[0],
      badges: ["badge-1"]
   },
   likes: JSON.parse(localStorage.getItem('educa_likes')) || ["vid-1", "vid-6"],
   bookmarks: JSON.parse(localStorage.getItem('educa_bookmarks')) || ["play-1", "play-4"],
   comments: JSON.parse(localStorage.getItem('educa_comments')) || [
      {
         id: "comm-1",
         content_id: "vid-1",
         user_id: "usr-99",
         user_name: "John Student",
         user_image: "pic-2.jpg",
         comment: "Wow! Extremely clear introduction. Loved the setup guide.",
         date: "2026-08-20"
      }
   ],
   contacts: JSON.parse(localStorage.getItem('educa_contacts')) || [],
   quizAnswers: JSON.parse(localStorage.getItem('educa_quiz_answers')) || {}, // playId: score

   // Future of Education challenge state collections
   roadmaps: JSON.parse(localStorage.getItem('educa_roadmaps')) || initialRoadmaps,
   studyPlanner: JSON.parse(localStorage.getItem('educa_study_planner')) || initialStudyPlanner,
   doubts: JSON.parse(localStorage.getItem('educa_doubts')) || initialDoubts,
   collabProjects: JSON.parse(localStorage.getItem('educa_collab_projects')) || initialCollabProjects,
   resources: JSON.parse(localStorage.getItem('educa_resources')) || initialResources,

   currentRoadmapTrack: 'web-dev',
   doubtFilterTag: 'All',
   collabRoleFilter: 'All',
   resourceFilterCategory: 'All',

   useDatabaseAPI: false, // Set dynamically by pinging server
   API_BASE: "../api",

   save() {
      localStorage.setItem('educa_user', JSON.stringify(this.user));
      localStorage.setItem('educa_likes', JSON.stringify(this.likes));
      localStorage.setItem('educa_bookmarks', JSON.stringify(this.bookmarks));
      localStorage.setItem('educa_comments', JSON.stringify(this.comments));
      localStorage.setItem('educa_contacts', JSON.stringify(this.contacts));
      localStorage.setItem('educa_quiz_answers', JSON.stringify(this.quizAnswers));
      localStorage.setItem('educa_roadmaps', JSON.stringify(this.roadmaps));
      localStorage.setItem('educa_study_planner', JSON.stringify(this.studyPlanner));
      localStorage.setItem('educa_doubts', JSON.stringify(this.doubts));
      localStorage.setItem('educa_collab_projects', JSON.stringify(this.collabProjects));
      localStorage.setItem('educa_resources', JSON.stringify(this.resources));
   }
};

// 3. Vernacular Translation Dictionaries
const translations = {
   en: {
      nav_home: "Home", nav_about: "About Us", nav_courses: "Courses", nav_roadmap: "Skill Roadmap", nav_doubts: "Doubt Nexus", nav_collab: "Project Collab", nav_teachers: "Teachers", nav_labs: "3D Tech Lab", nav_leaderboard: "Leaderboard", nav_instructor: "Tutor Area", nav_contact: "Contact Us",
      heading_roadmap: "Skill Roadmap & Adaptive Study Planner", heading_doubts: "Peer Doubt-Solving Nexus", heading_collab: "Project Collab & Resource Vault",
      search_placeholder: "Search courses, playlists, tutors...", filter_placeholder: "Search by title, description or tutor...", filter_tutor_placeholder: "Search tutors by name or profession...",
      hero_badge: "Next-Gen Adaptive Learning Platform 2026", hero_title_1: "Begin Your Learning Journey", hero_title_2: "with Edu-Verse", hero_desc: "Experience next-gen education like never before. Advanced study roadmaps, peer-to-peer collaboration, and 3D interactive labs make mastery accessible, immersive, and unforgettable.", hero_btn: "Book Your Journey",
      heading_quick: "Quick Options", heading_latest: "Latest Courses", heading_courses_list: "Our Courses", heading_playlist: "Playlist Details", heading_watch: "Watch Video",
      heading_labs: "AR/VR 3D Interactive Lab", heading_leaderboard: "Global Student Leaderboard", heading_tutors_list: "Expert Tutors", heading_tutor_profile: "Tutor Profile", heading_dashboard: "Student Dashboard", heading_update_profile: "Update Profile",
      title_categories: "Top Categories", title_topics: "Popular Topics", title_become_tutor: "Become a Tutor", desc_become_tutor: "Share your knowledge with the world, inspire thousands of students, and earn by teaching what you love.", btn_get_started: "Get Started Now", btn_view_all: "View All Courses",
      about_why_title: "Why Choose Edu-Verse?", about_desc_1: "Edu-Verse is a leading online learning platform designed to connect passionate educators with eager learners. We offer a project-based curriculum that prepares students for modern-day careers in development, design, marketing, and more.", about_desc_2: "Our platform focuses on rich interactive video learning, student-teacher communication via video commenting, and personal progress tracking dashboards.", about_browse: "Browse Catalog",
      stat_courses: "Online Courses", stat_students: "Brilliant Students", stat_tutors: "Expert Tutors", stat_career: "Career-Focused", about_testimonials: "Student Testimonials",
      opt_all_cat: "All Categories", cat_dev: "Development", cat_bus: "Business", cat_des: "Design", cat_mkt: "Marketing", cat_mus: "Music", cat_sw: "Software",
      contact_title: "Get In Touch", contact_desc: "Our support team is online 24/7 to assist you with course registration, certification, or tutoring options.", contact_loc: "Tech City, India", title_contact_form: "Send a Message", btn_submit_msg: "Submit Message",
      title_login: "Welcome Back", title_register: "Create Account", btn_login: "Login Student", btn_register: "Register Account", auth_no_account: "Don't have an account?", auth_switch_register: "Register here", auth_has_account: "Already have an account?", auth_switch_login: "Login here",
      lbl_name: "Name", lbl_email: "Email", lbl_avatar: "Choose Avatar", lbl_old_pass: "Current Password", lbl_new_pass: "New Password", lbl_confirm_pass: "Confirm Password", title_update_form: "Edit Profile Details", btn_update_now: "Update Profile",
      placeholder_name: "Enter your name", placeholder_email: "Enter your email", placeholder_phone: "Enter your phone number", placeholder_msg: "Enter your message",
      heading_instructor: "Tutor Analytics Center"
   },
   hi: {
      nav_home: "होम", nav_about: "हमारे बारे में", nav_courses: "पाठ्यक्रम", nav_roadmap: "कौशल रोडमैप", nav_doubts: "डाउट नेक्सस", nav_collab: "प्रोजेक्ट सहयोग", nav_teachers: "शिक्षक", nav_labs: "3डी टेक लैब", nav_leaderboard: "लीडरबोर्ड", nav_instructor: "ट्यूटर क्षेत्र", nav_contact: "संपर्क करें",
      heading_roadmap: "कौशल रोडमैप और अध्ययन योजना", heading_doubts: "सहकर्मी डाउट समाधान केंद्र", heading_collab: "प्रोजेक्ट सहयोग और संसाधन",
      search_placeholder: "पाठ्यक्रम, प्लेलिस्ट, ट्यूटर्स खोजें...", filter_placeholder: "शीर्षक, विवरण या ट्यूटर द्वारा खोजें...", filter_tutor_placeholder: "नाम या पेशे से शिक्षक खोजें...",
      hero_badge: "नेक्स्ट-जेन एडेप्टिव लर्निंग प्लेटफॉर्म 2026", hero_title_1: "अपनी सीखने की यात्रा शुरू करें", hero_title_2: "Edu-Verse के साथ", hero_desc: "अगली पीढ़ी की शिक्षा का ऐसा अनुभव करें जैसा पहले कभी नहीं हुआ। उन्नत रोडमैप, पीयर सहयोग और 3D लैब के साथ महारत हासिल करें।", hero_btn: "यात्रा शुरू करें",
      heading_quick: "त्वरित विकल्प", heading_latest: "नवीनतम पाठ्यक्रम", heading_courses_list: "हमारे पाठ्यक्रम", heading_playlist: "प्लेलिस्ट विवरण", heading_watch: "वीडियो देखें",
      heading_labs: "एआर / वीआर 3डी लैब", heading_leaderboard: "वैश्विक छात्र लीडरबोर्ड", heading_tutors_list: "विशेषज्ञ ट्यूटर", heading_tutor_profile: "ट्यूटर प्रोफाइल", heading_dashboard: "छात्र डैशबोर्ड", heading_update_profile: "प्रोफ़ाइल अपडेट करें",
      title_categories: "शीर्ष श्रेणियां", title_topics: "लोकप्रिय विषय", title_become_tutor: "ट्यूटर बनें", desc_become_tutor: "दुनिया के साथ अपना ज्ञान साझा करें, हजारों छात्रों को प्रेरित करें, और पढ़ाकर कमाएं।", btn_get_started: "अभी शुरू करें", btn_view_all: "सभी पाठ्यक्रम देखें",
      about_why_title: "Edu-Verse को क्यों चुनें?", about_desc_1: "Edu-Verse एक अग्रणी ऑनलाइन शिक्षण मंच है जो उत्साही शिक्षकों को उत्सुक शिक्षार्थियों से जोड़ता है। हम परियोजना-आधारित पाठ्यक्रम प्रदान करते हैं।", about_desc_2: "हमारा प्लेटफ़ॉर्म समृद्ध इंटरैक्टिव वीडियो लर्निंग, चर्चाओं और व्यक्तिगत प्रगति ट्रैकिंग डैशबोर्ड पर केंद्रित है।", about_browse: "कैटलॉग ब्राउज़ करें",
      stat_courses: "ऑनलाइन पाठ्यक्रम", stat_students: "प्रतिभावान छात्र", stat_tutors: "विशेषज्ञ शिक्षक", stat_career: "कैरियर-उन्मुख", about_testimonials: "छात्र प्रशंसापत्र",
      opt_all_cat: "सभी श्रेणियां", cat_dev: "विकास", cat_bus: "व्यापार", cat_des: "डिज़ाइन", cat_mkt: "विपणन", cat_mus: "संगीत", cat_sw: "सॉफ्टवेयर",
      contact_title: "संपर्क में रहें", contact_desc: "हमारी सहायता टीम आपकी मदद करने के लिए 24/7 ऑनलाइन उपलब्ध है।", contact_loc: "टेक सिटी, भारत", title_contact_form: "संदेश भेजें", btn_submit_msg: "संदेश भेजें",
      title_login: "स्वागत है", title_register: "खाता बनाएं", btn_login: "लॉगिन छात्र", btn_register: "खाता पंजीकृत करें", auth_no_account: "खाता नहीं है?", auth_switch_register: "यहाँ पंजीकरण करें", auth_has_account: "पहले से ही एक खाता है?", auth_switch_login: "यहाँ लॉगिन करें",
      lbl_name: "नाम", lbl_email: "ईमेल", lbl_avatar: "अवतार चुनें", lbl_old_pass: "वर्तमान पासवर्ड", lbl_new_pass: "नया पासवर्ड", lbl_confirm_pass: "पासवर्ड की पुष्टि करें", title_update_form: "प्रोफ़ाइल विवरण संपादित करें", btn_update_now: "प्रोफ़ाइल सहेजें",
      placeholder_name: "अपना नाम दर्ज करें", placeholder_email: "अपना ईमेल दर्ज करें", placeholder_phone: "अपना फ़ोन नंबर दर्ज करें", placeholder_msg: "अपना संदेश दर्ज करें",
      heading_instructor: "ट्यूटर विश्लेषिकी केंद्र"
   },
   es: {
      nav_home: "Inicio", nav_about: "Sobre Nosotros", nav_courses: "Cursos", nav_roadmap: "Ruta de Habilidades", nav_doubts: "Nexo de Dudas", nav_collab: "Colaboración", nav_teachers: "Profesores", nav_labs: "Laboratorio 3D", nav_leaderboard: "Clasificación", nav_instructor: "Zona Tutor", nav_contact: "Contacto",
      heading_roadmap: "Ruta de Aprendizaje y Planificador", heading_doubts: "Nexo de Resolución de Dudas", heading_collab: "Proyectos y Recursos Académicos",
      search_placeholder: "Buscar cursos, listas, tutores...", filter_placeholder: "Buscar por título o tutor...", filter_tutor_placeholder: "Buscar tutores por nombre o profesión...",
      hero_badge: "Plataforma de Aprendizaje Adaptativo 2026", hero_title_1: "Comienza Tu Viaje de Aprendizaje", hero_title_2: "con Edu-Verse", hero_desc: "Experimenta la educación de próxima generación. Mapas de estudio avanzados, colaboración entre pares y laboratorios 3D.", hero_btn: "Reserva Tu Viaje",
      heading_quick: "Opciones Rápidas", heading_latest: "Últimos Cursos", heading_courses_list: "Nuestros Cursos", heading_playlist: "Detalles de Lista", heading_watch: "Ver Video",
      heading_labs: "Laboratorio Interactivo 3D AR/VR", heading_leaderboard: "Clasificación Global de Estudiantes", heading_tutors_list: "Tutores Expertos", heading_tutor_profile: "Perfil de Tutor", heading_dashboard: "Panel de Estudiante", heading_update_profile: "Actualizar Perfil",
      title_categories: "Categorías Principales", title_topics: "Temas Populares", title_become_tutor: "Conviértete en Tutor", desc_become_tutor: "Comparte tu conocimiento, inspira a miles de estudiantes y gana enseñando lo que amas.", btn_get_started: "Comenzar Ahora", btn_view_all: "Ver Todos los Cursos",
      about_why_title: "¿Por qué elegir Edu-Verse?", about_desc_1: "Edu-Verse es una plataforma líder de aprendizaje en línea diseñada para conectar educadores apasionados con estudiantes ansiosos.", about_desc_2: "Nuestra plataforma se centra en el aprendizaje enriquecido con videos, comentarios interactivos y paneles de seguimiento de progreso.", about_browse: "Examinar Catálogo",
      stat_courses: "Cursos en Línea", stat_students: "Estudiantes Brillantes", stat_tutors: "Tutores Expertos", stat_career: "Enfocado en el Empleo", about_testimonials: "Testimonios de Estudiantes",
      opt_all_cat: "Todas las Categorías", cat_dev: "Desarrollo", cat_bus: "Negocios", cat_des: "Diseño", cat_mkt: "Marketing", cat_mus: "Música", cat_sw: "Software",
      contact_title: "Ponte en Contacto", contact_desc: "Nuestro equipo está en línea las 24 horas para asistirte.", contact_loc: "Tech City, India", title_contact_form: "Enviar un Mensaje", btn_submit_msg: "Enviar Mensaje",
      title_login: "Bienvenido", title_register: "Crear Cuenta", btn_login: "Iniciar Sesión", btn_register: "Registrar Cuenta", auth_no_account: "¿No tienes una cuenta?", auth_switch_register: "Regístrate aquí", auth_has_account: "¿Ya tienes cuenta?", auth_switch_login: "Inicia sesión aquí",
      lbl_name: "Nombre", lbl_email: "Correo Electrónico", lbl_avatar: "Elegir Avatar", lbl_old_pass: "Contraseña Actual", lbl_new_pass: "Nueva Contraseña", lbl_confirm_pass: "Confirmar Contraseña", title_update_form: "Editar detalles del perfil", btn_update_now: "Actualizar Perfil",
      placeholder_name: "Ingrese su nombre", placeholder_email: "Ingrese su correo", placeholder_phone: "Ingrese su teléfono", placeholder_msg: "Ingrese su mensaje",
      heading_instructor: "Panel de Analíticas del Tutor"
   },
   ta: {
      nav_home: "முகப்பு", nav_about: "எங்களைப் பற்றி", nav_courses: "பாடங்கள்", nav_roadmap: "திறன் வரைபடம்", nav_doubts: "சந்தேக தீர்வு", nav_collab: "திட்ட ஒத்துழைப்பு", nav_teachers: "ஆசிரியர்கள்", nav_labs: "3D தொழில்நுட்ப ஆய்வகம்", nav_leaderboard: "மதிப்பீட்டு பலகை", nav_instructor: "ஆசிரியர் பகுதி", nav_contact: "தொடர்பு கொள்ள",
      heading_roadmap: "திறன் வரைபடம் மற்றும் படிப்பு திட்டமிடுபவர்", heading_doubts: "சந்தேக தீர்வு மையம்", heading_collab: "திட்ட ஒத்துழைப்பு மற்றும் ஆதாரங்கள்",
      search_placeholder: "பாடங்கள், டூட்டர்களைத் தேடுங்கள்...", filter_placeholder: "தலைப்பு அல்லது ஆசிரியர் மூலம் தேடுங்கள்...", filter_tutor_placeholder: "ஆசிரியர்களை பெயர் அல்லது வேலை மூலம் தேடுங்கள்...",
      hero_badge: "அடுத்த தலைமுறை கற்றல் தளம் 2026", hero_title_1: "உங்கள் கற்றல் பயணத்தைத் தொடங்குங்கள்", hero_title_2: "Edu-Verse உடன்", hero_desc: "முன்னோடி கல்வி அனுபவம். மேம்பட்ட திறன் வரைபடங்கள், 3D ஆய்வகம் மற்றும் கூட்டுத் திட்டங்கள்.", hero_btn: "உங்கள் பயணத்தைத் தொடங்குங்கள்",
      heading_quick: "விரைவு விருப்பங்கள்", heading_latest: "சமீபத்திய பாடங்கள்", heading_courses_list: "எங்கள் பாடங்கள்", heading_playlist: "பாடப்பட்டியல் விவரங்கள்", heading_watch: "வீடியோவைக் காண்க",
      heading_labs: "3D ஆய்வகம்", heading_leaderboard: "மாணவர் தரவரிசைப் பலகை", heading_tutors_list: "நிபுணத்துவ டூட்டர்கள்", heading_tutor_profile: "டூட்டர் சுயவிவரம்", heading_dashboard: "மாணவர் டாஷ்போர்டு", heading_update_profile: "சுயவிவரத்தைப் புதுப்பிக்கவும்",
      title_categories: "முக்கிய பிரிவுகள்", title_topics: "பிரபலமான தலைப்புகள்", title_become_tutor: "ஆசிரியராகுங்கள்", desc_become_tutor: "உங்கள் அறிவைப் பகிர்ந்து கொள்ளுங்கள், ஆயிரக்கணக்கான மாணவர்களை ஊக்குவித்து கற்றுக் கொடுத்து சம்பாதிக்கவும்.", btn_get_started: "இப்போதே தொடங்குங்கள்", btn_view_all: "அனைத்து பாடங்களையும் காண்க",
      about_why_title: "ஏன் Edu-Verse-ஐத் தேர்ந்தெடுக்க வேண்டும்?", about_desc_1: "Edu-Verse ஆர்வமுள்ள ஆசிரியர்களையும் ஆவலுள்ள மாணவர்களையும் இணைக்கும் முன்னனி தளம்.", about_desc_2: "எங்கள் தளம் வீடியோ வழி கற்றல், விவாதங்கள் மற்றும் தனிப்பட்ட முன்னேற்றக் கண்காணிப்பில் கவனம் செலுத்துகிறது.", about_browse: "பாடப்பட்டியலைக் காண்க",
      stat_courses: "ஆன்லைன் பாடங்கள்", stat_students: "திறமையான மாணவர்கள்", stat_tutors: "நிபுணத்துவ ஆசிரியர்கள்", stat_career: "வேலைவாய்ப்பு சார்ந்த", about_testimonials: "மாணவர்களின் கருத்துக்கள்",
      opt_all_cat: "அனைத்துப் பிரிவுகள்", cat_dev: "மென்பொருள் மேம்பாடு", cat_bus: "வணிகம்", cat_des: "வடிவமைப்பு", cat_mkt: "சந்தைப்படுத்துதல்", cat_mus: "இசை", cat_sw: "மென்பொருள்",
      contact_title: "தொடர்புகொள்ள", contact_desc: "எங்கள் குழு உங்களுக்கு உதவ 24/7 ஆன்லைனில் உள்ளது.", contact_loc: "டெக் சிட்டி, இந்தியா", title_contact_form: "செய்தி அனுப்பുക", btn_submit_msg: "செய்தி அனுப்பு",
      title_login: "வரவேற்கிறோம்", title_register: "கணக்கை உருவாக்கு", btn_login: "மாணவர் உள்நுழைவு", btn_register: "கணக்கை பதிவுசெய்", auth_no_account: "கணக்கு இல்லையா?", auth_switch_register: "இங்கே பதிவு செய்க", auth_has_account: "ஏற்கனவே கணக்கு உள்ளதா?", auth_switch_login: "இங்கே உள்நுழைக",
      lbl_name: "பெயர்", lbl_email: "மின்னஞ்சல்", lbl_avatar: "அவதாரைத் தேர்ந்தெடு", lbl_old_pass: "தற்போதைய கடவுச்சொல்", lbl_new_pass: "புதிய கடவுச்சொல்", lbl_confirm_pass: "கடவுச்சொல்லை உறுதிசெய்", title_update_form: "சுயவிவர விவரங்களைத் திருத்து", btn_update_now: "சுயவிவரத்தைப் புதுப்பி",
      placeholder_name: "உங்கள் பெயரை உள்ளிடவும்", placeholder_email: "உங்கள் மின்னஞ்சலை உள்ளிடவும்", placeholder_phone: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்", placeholder_msg: "உங்கள் செய்தியை உள்ளிடவும்",
      heading_instructor: "ஆசிரியர் பகுப்பாய்வு மையம்"
   }
};

// 4. Hybrid API Client Interface Operations (Supabase Realtime Cloud Backend)
async function initDatabaseConnection() {
   if (window.EducaBackend && window.EducaBackend.client) {
      try {
         console.log("⚡ [Educa] Initializing Supabase Cloud Realtime connection...");
         AppState.useDatabaseAPI = true;

         // A. Fetch Courses
         const courses = await window.EducaBackend.getCourses();
         if (courses && courses.length > 0) {
            seedPlaylists.length = 0;
            courses.forEach(c => {
               seedPlaylists.push({
                  id: c.id,
                  tutor_id: c.tutor_id || "tut-1",
                  title: c.title,
                  description: c.description,
                  thumb: c.thumb || "thumb-1.png",
                  date: c.created_at ? c.created_at.split('T')[0] : "2026-06-01",
                  category: c.category || "development",
                  status: c.status || "active"
               });
            });
            console.log(`⚡ [Educa Supabase] Loaded ${courses.length} courses.`);
         }

         // B. Fetch Doubts Nexus
         const doubts = await window.EducaBackend.getDoubts();
         if (doubts && doubts.length > 0) {
            AppState.doubts = doubts.map(d => ({
               id: d.id,
               title: d.title,
               desc: d.description,
               code: "",
               tag: (Array.isArray(d.tags) && d.tags[0]) || "General",
               bounty: d.bounty_xp || 50,
               authorName: d.author_name || "Student",
               authorImage: d.author_avatar ? d.author_avatar.replace(/^images\//, '') : "pic-2.jpg",
               date: d.created_at ? new Date(d.created_at).toLocaleDateString() : "Just now",
               votes: d.upvotes || 0,
               hasVoted: false,
               solved: !!d.solved,
               answers: (d.answers || []).map(a => ({
                  id: a.id,
                  userName: a.author_name || "Contributor",
                  userImage: a.author_avatar ? a.author_avatar.replace(/^images\//, '') : "pic-2.jpg",
                  date: a.created_at ? new Date(a.created_at).toLocaleDateString() : "Recently",
                  body: a.content || "",
                  accepted: !!a.is_accepted
               }))
            }));
            AppState.save();
            console.log(`⚡ [Educa Supabase] Loaded ${doubts.length} doubts.`);
         }

         // C. Fetch Collab Projects
         const projects = await window.EducaBackend.getProjects();
         if (projects && projects.length > 0) {
            AppState.collabProjects = projects.map(p => ({
               id: p.id,
               title: p.title,
               pitch: p.pitch,
               category: p.category,
               tech: Array.isArray(p.tech_stack) ? p.tech_stack : ["React"],
               roles: Array.isArray(p.open_roles) ? p.open_roles : ["Contributor"],
               members: Array.isArray(p.members) ? p.members.map(m => typeof m === 'string' ? m.replace(/^images\//, '') : (m.avatar ? m.avatar.replace(/^images\//, '') : 'pic-2.jpg')) : ["pic-2.jpg"],
               currentTeamSize: p.team_size || 1,
               maxTeamSize: p.max_team_size || 4,
               status: p.status || "Recruiting",
               isApplied: false
            }));
            AppState.save();
            console.log(`⚡ [Educa Supabase] Loaded ${projects.length} collab projects.`);
         }

         // D. Fetch Academic Resources
         const resources = await window.EducaBackend.getResources();
         if (resources && resources.length > 0) {
            AppState.resources = resources.map(r => ({
               id: r.id,
               title: r.title,
               category: r.category,
               topic: r.topic,
               icon: r.category === 'Cheatsheet' ? 'fas fa-file-code' : (r.category === 'Study Notes' ? 'fas fa-file-pdf' : (r.category === 'Starter Kit' ? 'fas fa-laptop-code' : 'fas fa-graduation-cap')),
               desc: r.description,
               author: r.author_name || "Peer Learner",
               downloads: r.downloads || 0,
               upvotes: 0,
               hasUpvoted: false
            }));
            AppState.save();
            console.log(`⚡ [Educa Supabase] Loaded ${resources.length} academic resources.`);
         }

         // E. Initialize Realtime WebSocket Subscriptions
         window.EducaBackend.initRealtime({
            onDoubtChange: (payload) => {
               if (payload.eventType === 'INSERT') {
                  const d = payload.new;
                  if (!AppState.doubts.some(x => x.id === d.id)) {
                     AppState.doubts.unshift({
                        id: d.id,
                        title: d.title,
                        desc: d.description,
                        code: "",
                        tag: (Array.isArray(d.tags) && d.tags[0]) || "General",
                        bounty: d.bounty_xp || 50,
                        authorName: d.author_name || "Student",
                        authorImage: d.author_avatar ? d.author_avatar.replace(/^images\//, '') : "pic-2.jpg",
                        date: "Just now",
                        votes: d.upvotes || 0,
                        hasVoted: false,
                        solved: !!d.solved,
                        answers: []
                     });
                     AppState.save();
                     if (typeof renderDoubts === 'function') renderDoubts();
                  }
               } else if (payload.eventType === 'UPDATE') {
                  const d = payload.new;
                  const item = AppState.doubts.find(x => x.id === d.id);
                  if (item) {
                     item.votes = d.upvotes;
                     item.solved = !!d.solved;
                     AppState.save();
                     if (typeof renderDoubts === 'function') renderDoubts();
                  }
               }
            },
            onAnswerChange: (payload) => {
               if (payload.eventType === 'INSERT') {
                  const a = payload.new;
                  const doubt = AppState.doubts.find(x => x.id === a.doubt_id);
                  if (doubt) {
                     if (!doubt.answers) doubt.answers = [];
                     if (!doubt.answers.some(x => x.id === a.id)) {
                        doubt.answers.push({
                           id: a.id,
                           userName: a.author_name || "Contributor",
                           userImage: a.author_avatar ? a.author_avatar.replace(/^images\//, '') : "pic-2.jpg",
                           date: "Just now",
                           body: a.content || "",
                           accepted: !!a.is_accepted
                        });
                        AppState.save();
                        if (typeof renderDoubts === 'function') renderDoubts();
                     }
                  }
               } else if (payload.eventType === 'UPDATE') {
                  const a = payload.new;
                  const doubt = AppState.doubts.find(x => x.id === a.doubt_id);
                  if (doubt && doubt.answers) {
                     const ans = doubt.answers.find(x => x.id === a.id);
                     if (ans) {
                        ans.accepted = !!a.is_accepted;
                        if (ans.accepted) doubt.solved = true;
                        AppState.save();
                        if (typeof renderDoubts === 'function') renderDoubts();
                     }
                  }
               }
            },
            onCollabChange: (payload) => {
               if (payload.eventType === 'INSERT') {
                  const p = payload.new;
                  if (!AppState.collabProjects.some(x => x.id === p.id)) {
                     AppState.collabProjects.unshift({
                        id: p.id,
                        title: p.title,
                        pitch: p.pitch,
                        category: p.category,
                        tech: Array.isArray(p.tech_stack) ? p.tech_stack : ["React"],
                        roles: Array.isArray(p.open_roles) ? p.open_roles : ["Contributor"],
                        members: ["pic-2.jpg"],
                        currentTeamSize: p.team_size || 1,
                        maxTeamSize: p.max_team_size || 4,
                        status: p.status || "Recruiting",
                        isApplied: false
                     });
                     AppState.save();
                     if (typeof renderCollabProjects === 'function') renderCollabProjects();
                  }
               } else if (payload.eventType === 'UPDATE') {
                  const p = payload.new;
                  const item = AppState.collabProjects.find(x => x.id === p.id);
                  if (item) {
                     item.currentTeamSize = p.team_size || item.currentTeamSize;
                     item.status = p.status || item.status;
                     AppState.save();
                     if (typeof renderCollabProjects === 'function') renderCollabProjects();
                  }
               }
            }
         });
      } catch (err) {
         console.warn("⚠️ [Educa Supabase] Connection error, using cached local data:", err);
      }
   } else {
      console.log("ℹ️ [Educa] Running with Local Storage client engine.");
   }
}

// 5. Three.js WebGL Labs simulation loop
let activeLabSystem = "nodes";
let threeRenderer = null;
let threeScene = null;
let threeCamera = null;
let threeAnimationId = null;
let threeNodesGroup = null;
let threeRaycaster = null;
let threeMouse = null;
let threeNodesArray = [];

const serverNodeMeta = [
   { id: "node-1", label: "Primary API Router", details: "Directs secure client requests to core database instances.", type: "core", x: -120, y: -60, z: -50, load: 24, latency: 8 },
   { id: "node-2", label: "MySQL InnoDB Database Node", details: "Transactional ACID storage keeping tables aligned.", type: "database", x: 100, y: 80, z: -40, load: 68, latency: 18 },
   { id: "node-3", label: "Redis Caching Node Clusters", details: "Provides rapid memory access cycles bypassing databases.", type: "cache", x: -80, y: 100, z: 60, load: 12, latency: 2 },
   { id: "node-4", label: "CDN Static Resource Balancer", details: "Serves styling components and HTML assets from local edges.", type: "balancer", x: 120, y: -80, z: 80, load: 45, latency: 12 },
   { id: "node-5", label: "Auth Token Controller", details: "Authenticates sessions using JWT token handshakes.", type: "auth", x: 0, y: 0, z: 0, load: 30, latency: 5 }
];

const compilerNodeMeta = [
   { id: "node-a", label: "Lexical Lexer Parser", details: "Breaks source code bytes into categorized tokens maps.", type: "parse", x: -140, y: -50, z: -20, load: 10, latency: 3 },
   { id: "node-b", label: "AST Parse Tree Compiler", details: "Generates Abstract Syntax Trees mapping semantic grammar structures.", type: "parse", x: -40, y: 60, z: 20, load: 25, latency: 7 },
   { id: "node-c", label: "Bytecode Optimization Engine", details: "Resolves loop variables and constant expressions to optimize steps.", type: "optimize", x: 60, y: -50, z: -30, load: 45, latency: 15 },
   { id: "node-d", label: "Machine Code Assembly Writer", details: "Emits binaries aligned with targeted hardware architectures.", type: "write", x: 150, y: 50, z: 10, load: 5, latency: 1 }
];

function initLabs() {
   const container = document.querySelector(".canvas-viewport");
   if (!container) return;

   // 1. Check if Three.js is loaded
   if (window.THREE) {
      initThreeJS(container);
   } else {
      initCanvas2DFallback();
   }
}

function initThreeJS(container) {
   // Clear container
   container.innerHTML = `<div id="three-viewport" style="width:100%; height:420px; overflow:hidden;"></div>
   <div class="help-overlay">
      <p><i class="fas fa-mouse-pointer"></i> Drag to rotate orbit camera, click server nodes to inspect diagnostics</p>
   </div>`;
   const viewport = document.getElementById("three-viewport");

   // Initialize Raycaster
   threeRaycaster = new THREE.Raycaster();
   threeMouse = new THREE.Vector2();

   // Set up scene, camera, renderer
   threeScene = new THREE.Scene();
   threeScene.background = new THREE.Color(0x06050b);

   threeCamera = new THREE.PerspectiveCamera(60, viewport.clientWidth / 420, 1, 1000);
   threeCamera.position.set(0, 50, 300);

   threeRenderer = new THREE.WebGLRenderer({ antialias: true });
   threeRenderer.setSize(viewport.clientWidth, 420);
   threeRenderer.setPixelRatio(window.devicePixelRatio);
   viewport.appendChild(threeRenderer.domElement);

   // Add ambient and directional lights
   const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
   threeScene.add(ambientLight);

   const pointLight = new THREE.PointLight(0xa55eea, 1.5, 400);
   pointLight.position.set(50, 150, 100);
   threeScene.add(pointLight);

   // Add grid helper
   const grid = new THREE.GridHelper(300, 20, 0x7048e8, 0x2c294a);
   grid.position.y = -100;
   threeScene.add(grid);

   // Create orbit nodes group
   threeNodesGroup = new THREE.Group();
   threeScene.add(threeNodesGroup);

   // Build node graphs
   buildThreeNodes();

   // Setup interactions
   let isDragging = false;
   let prevMousePosition = { x: 0, y: 0 };

   viewport.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMousePosition = { x: e.clientX, y: e.clientY };
   });

   viewport.addEventListener('mousemove', (e) => {
      if (isDragging) {
         const deltaX = e.clientX - prevMousePosition.x;
         const deltaY = e.clientY - prevMousePosition.y;

         threeNodesGroup.rotation.y += deltaX * 0.005;
         threeNodesGroup.rotation.x += deltaY * 0.005;

         prevMousePosition = { x: e.clientX, y: e.clientY };
      }
   });

   window.addEventListener('mouseup', () => {
      isDragging = false;
   });

   viewport.addEventListener('click', handleThreeClick);

   // Start loop
   if (threeAnimationId) cancelAnimationFrame(threeAnimationId);
   animateThreeJS();
}

function buildThreeNodes() {
   // Clear group
   while (threeNodesGroup.children.length > 0) {
      threeNodesGroup.remove(threeNodesGroup.children[0]);
   }
   threeNodesArray = [];

   const meta = activeLabSystem === "nodes" ? serverNodeMeta : compilerNodeMeta;

   // 1. Create spheres representing nodes
   meta.forEach(node => {
      const geo = new THREE.SphereGeometry(14, 32, 32);
      const mat = new THREE.MeshPhongMaterial({
         color: 0x7048e8,
         emissive: 0x2b1055,
         shininess: 30,
         flatShading: false
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(node.x, node.y, node.z);
      
      // Keep reference to metadata
      mesh.userData = node;

      threeNodesGroup.add(mesh);
      threeNodesArray.push(mesh);
   });

   // 2. Draw connections (lines)
   if (activeLabSystem === "nodes") {
      drawThreeConnection(serverNodeMeta[0], serverNodeMeta[1]); // Router -> Database
      drawThreeConnection(serverNodeMeta[0], serverNodeMeta[2]); // Router -> Cache
      drawThreeConnection(serverNodeMeta[2], serverNodeMeta[1]); // Cache -> Database
      drawThreeConnection(serverNodeMeta[2], serverNodeMeta[4]); // Cache -> Auth
      drawThreeConnection(serverNodeMeta[3], serverNodeMeta[0]); // Balancer -> Router
   } else {
      drawThreeConnection(compilerNodeMeta[0], compilerNodeMeta[1]); // Lexer -> AST
      drawThreeConnection(compilerNodeMeta[1], compilerNodeMeta[2]); // AST -> Optimizer
      drawThreeConnection(compilerNodeMeta[2], compilerNodeMeta[3]); // Optimizer -> Code Writer
   }
}

function drawThreeConnection(nodeA, nodeB) {
   const material = new THREE.LineBasicMaterial({ color: 0xff7675 });
   const points = [];
   points.push(new THREE.Vector3(nodeA.x, nodeA.y, nodeA.z));
   points.push(new THREE.Vector3(nodeB.x, nodeB.y, nodeB.z));
   
   const geometry = new THREE.BufferGeometry().setFromPoints(points);
   const line = new THREE.Line(geometry, material);
   threeNodesGroup.add(line);
}

function animateThreeJS() {
   if (!threeScene || !threeRenderer) return;

   // Slow idle rotation when not dragging
   threeNodesGroup.rotation.y += 0.002;

   threeRenderer.render(threeScene, threeCamera);
   threeAnimationId = requestAnimationFrame(animateThreeJS);
}

function handleThreeClick(e) {
   const rect = threeRenderer.domElement.getBoundingClientRect();
   threeMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
   threeMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

   threeRaycaster.setFromCamera(threeMouse, threeCamera);
   const intersects = threeRaycaster.intersectObjects(threeNodesArray);

   if (intersects.length > 0) {
      const clickedMesh = intersects[0].object;
      
      // Reset all meshes to base color
      threeNodesArray.forEach(mesh => {
         mesh.material.color.setHex(0x7048e8);
         mesh.material.emissive.setHex(0x2b1055);
      });

      // Highlight clicked node
      clickedMesh.material.color.setHex(0xff7675);
      clickedMesh.material.emissive.setHex(0x551111);

      // Render inspector details
      renderInspector(clickedMesh.userData);
      showToast("Selected Node: " + clickedMesh.userData.label);
   }
}

window.switchLabSystem = function(systemType) {
   activeLabSystem = systemType;
   document.querySelectorAll(".lab-tab").forEach(tab => {
      if (tab.getAttribute("onclick").includes(systemType)) {
         tab.classList.add("active");
      } else {
         tab.classList.remove("active");
      }
   });
   
   if (window.THREE && threeScene) {
      buildThreeNodes();
      document.getElementById("inspector-content").innerHTML = `
         <div class="initial-msg">Click on any network element inside the 3D grid viewport to inspect and configure diagnostics.</div>
      `;
   } else {
      resetLabNodes();
   }
};

window.resetLabSimulation = function() {
   if (window.THREE && threeScene) {
      threeNodesGroup.rotation.set(0, 0, 0);
      buildThreeNodes();
   } else {
      labCamera = { x: 0, y: 0, zoom: 1.1, rotation: 0 };
      resetLabNodes();
   }
   showToast("Simulation nodes reset successfully");
};

// 2D Canvas Fallback loop if Three.js CDN fails to load
let labCanvas = null;
let labCtx = null;
let labAnimId = null;
let labAnimationRunning = true;
let labNodes = [];
let labCamera = { x: 0, y: 0, zoom: 1.1, rotation: 0 };
let isDraggingLab = false;
let startDragCoords = { x: 0, y: 0 };
let packets = [];

function initCanvas2DFallback() {
   const container = document.querySelector(".canvas-viewport");
   container.innerHTML = `<canvas id="lab-canvas" width="800" height="420"></canvas>
   <div class="help-overlay">
      <p><i class="fas fa-mouse-pointer"></i> Rotate, drag, and click nodes to test signal pathways and configurations</p>
   </div>`;
   
   labCanvas = document.getElementById("lab-canvas");
   labCtx = labCanvas.getContext("2d");

   labCanvas.onmousedown = (e) => {
      isDraggingLab = true;
      startDragCoords = { x: e.clientX, y: e.clientY };
   };
   labCanvas.onmousemove = (e) => {
      if (!isDraggingLab) return;
      const dx = e.clientX - startDragCoords.x;
      labCamera.rotation += dx * 0.007;
      startDragCoords = { x: e.clientX, y: e.clientY };
   };
   window.onmouseup = () => { isDraggingLab = false; };
   labCanvas.onclick = handleCanvas2DClick;

   resetLabNodes();
   labAnimationRunning = true;
   drawLabLoop();
}

function resetLabNodes() {
   packets = [];
   const meta = activeLabSystem === "nodes" ? serverNodeMeta : compilerNodeMeta;
   labNodes = meta.map(n => ({
      ...n,
      connections: activeLabSystem === "nodes" ? 
         (n.id === "node-1" ? ["node-2", "node-3"] : n.id === "node-3" ? ["node-2", "node-5"] : n.id === "node-4" ? ["node-1"] : []) :
         (n.id === "node-a" ? ["node-b"] : n.id === "node-b" ? ["node-c"] : n.id === "node-c" ? ["node-d"] : []),
      radius: 12
   }));
}

function drawLabLoop() {
   if (!labCanvas || !labCtx) return;
   
   labCtx.fillStyle = "#06050b";
   labCtx.fillRect(0, 0, labCanvas.width, labCanvas.height);
   
   // Background grid
   labCtx.strokeStyle = "rgba(112, 72, 232, 0.04)";
   labCtx.lineWidth = 1;
   for (let x = 0; x < labCanvas.width; x += 40) {
      labCtx.beginPath(); labCtx.moveTo(x, 0); labCtx.lineTo(x, labCanvas.height); labCtx.stroke();
   }

   const angle = labCamera.rotation;
   const centerX = labCanvas.width / 2 + labCamera.x;
   const centerY = labCanvas.height / 2 + labCamera.y;

   const projected = labNodes.map(node => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rx = node.x * cos - node.z * sin;
      const rz = node.x * sin + node.z * cos;
      const perspective = 300 / (300 + rz);
      return {
         ...node,
         projX: centerX + rx * perspective * labCamera.zoom,
         projY: centerY + node.y * perspective * labCamera.zoom,
         depth: rz,
         size: node.radius * perspective * labCamera.zoom
      };
   });

   projected.sort((a, b) => b.depth - a.depth);

   // Draw Wires
   labCtx.lineWidth = 2;
   projected.forEach(node => {
      node.connections.forEach(connId => {
         const destNode = projected.find(n => n.id === connId);
         if (destNode) {
            labCtx.strokeStyle = "rgba(112, 72, 232, 0.4)";
            labCtx.beginPath();
            labCtx.moveTo(node.projX, node.projY);
            labCtx.lineTo(destNode.projX, destNode.projY);
            labCtx.stroke();
         }
      });
   });

   // Draw Nodes
   projected.forEach(node => {
      const isSelected = selectedNode && selectedNode.id === node.id;
      labCtx.fillStyle = isSelected ? "#ff7675" : "#7048e8";
      labCtx.beginPath();
      labCtx.arc(node.projX, node.projY, node.size, 0, Math.PI * 2);
      labCtx.fill();
      
      labCtx.fillStyle = "#ffffff";
      labCtx.font = "Outfit 11px";
      labCtx.fillText(node.label, node.projX - 25, node.projY - node.size - 5);
   });

   if (labAnimationRunning && !isDraggingLab) {
      labCamera.rotation += 0.003;
   }

   if (labAnimationRunning) {
      labAnimId = requestAnimationFrame(drawLabLoop);
   }
}

function handleCanvas2DClick(e) {
   const rect = labCanvas.getBoundingClientRect();
   const clickX = e.clientX - rect.left;
   const clickY = e.clientY - rect.top;

   const centerX = labCanvas.width / 2 + labCamera.x;
   const centerY = labCanvas.height / 2 + labCamera.y;
   const angle = labCamera.rotation;
   let clicked = null;

   labNodes.forEach(node => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rx = node.x * cos - node.z * sin;
      const rz = node.x * sin + node.z * cos;
      const perspective = 300 / (300 + rz);
      const projX = centerX + rx * perspective * labCamera.zoom;
      const projY = centerY + node.y * perspective * labCamera.zoom;
      const size = node.radius * perspective * labCamera.zoom;

      const dist = Math.hypot(clickX - projX, clickY - projY);
      if (dist < size + 10) clicked = node;
   });

   if (clicked) {
      selectedNode = clicked;
      renderInspector(clicked);
      showToast("Selected Node: " + clicked.label);
   }
}

function renderInspector(node) {
   const container = document.getElementById("inspector-content");
   
   let metricsHtml = "";
   if (activeLabSystem === "nodes") {
      metricsHtml = `
         <div class="metrics-list">
            <div class="metric-item">Active Workload Load: <span>${node.load}%</span></div>
            <div class="metric-item">Network Ping Latency: <span>${node.latency} ms</span></div>
            <div class="metric-item">Node Connection State: <span class="healthy">ONLINE</span></div>
         </div>
         <button onclick="runLabDiagnostics('${node.id}')" class="btn primary-btn"><i class="fas fa-microchip"></i> Run Diagnostics</button>
      `;
   } else {
      metricsHtml = `
         <div class="metrics-list">
            <div class="metric-item">Instruction Size: <span>142 bytes</span></div>
            <div class="metric-item">Pipeline Compilation Step: <span>${node.type.toUpperCase()}</span></div>
            <div class="metric-item">Parsing Latency: <span>${node.latency} ms</span></div>
         </div>
         <button onclick="runLabDiagnostics('${node.id}')" class="btn primary-btn"><i class="fas fa-play"></i> Compile Pipeline Segment</button>
      `;
   }

   container.innerHTML = `
      <div class="node-stats-card">
         <h4>${node.label}</h4>
         <p>${node.details}</p>
         ${metricsHtml}
         <div id="diagnostic-log" style="font-family:'Courier New', monospace; font-size:11px; margin-top:15px; max-height:100px; overflow-y:auto; color:#2ecc71;"></div>
      </div>
   `;
}

window.runLabDiagnostics = function(nodeId) {
   const log = document.getElementById("diagnostic-log");
   if (!log) return;

   log.innerHTML = "Initializing security handshake...<br>";
   
   setTimeout(() => {
      log.innerHTML += "Sending 32-byte diagnostic packet pulses...<br>";
   }, 400);
   setTimeout(() => {
      log.innerHTML += "Connection healthy. Nodes integrity 100% stable.<br>";
      log.innerHTML += "SUCCESS: Diagnostic complete.<br>";
      showToast("Diagnostic tests passed! Earned +15 XP");
      addXP(15);
      
      // Unlock Lab Badge
      unlockBadge("badge-6");
   }, 900);
};

// 6. Chart.js Instructor Analytics Dashboard Renderer
function renderInstructorDashboard() {
   if (!window.Chart) {
      console.warn("Chart.js not loaded. Skipping instructor charts rendering.");
      return;
   }

   // 1. Course Enrollment Bar Chart
   const ctxEnrollment = document.getElementById("courseEnrollmentChart");
   if (ctxEnrollment) {
      new Chart(ctxEnrollment, {
         type: 'bar',
         data: {
            labels: ['HTML5', 'CSS3 Grid', 'JS ES6', 'Figma UX', 'PHP MySQL', 'Node Express'],
            datasets: [{
               label: 'Students Enrolled',
               data: [85, 110, 140, 95, 60, 48],
               backgroundColor: [
                  'rgba(112, 72, 232, 0.75)',
                  'rgba(165, 94, 234, 0.75)',
                  'rgba(255, 118, 117, 0.75)',
                  'rgba(52, 152, 219, 0.75)',
                  'rgba(46, 204, 113, 0.75)',
                  'rgba(241, 196, 15, 0.75)'
               ],
               borderColor: 'rgba(255,255,255,0.1)',
               borderWidth: 1,
               borderRadius: 6
            }]
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
               legend: { display: false }
            },
            scales: {
               y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a4b0be' } },
               x: { grid: { display: false }, ticks: { color: '#a4b0be' } }
            }
         }
      });
   }

   // 2. Weekly Student Study Activity Line Chart
   const ctxActivity = document.getElementById("weeklyActivityChart");
   if (ctxActivity) {
      new Chart(ctxActivity, {
         type: 'line',
         data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
               label: 'Total Study Hours',
               data: [45, 62, 85, 50, 75, 120, 110],
               borderColor: '#7048e8',
               backgroundColor: 'rgba(112, 72, 232, 0.15)',
               fill: true,
               tension: 0.4,
               pointBackgroundColor: '#ff7675',
               pointRadius: 4
            }]
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
               legend: { display: false }
            },
            scales: {
               y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a4b0be' } },
               x: { grid: { display: false }, ticks: { color: '#a4b0be' } }
            }
         }
      });
   }
}

// 7. Video.js Custom player & jsPDF Certificate Exporter

let activeVideoJSPlayer = null;

function cleanupVideoJS() {
   if (activeVideoJSPlayer) {
      activeVideoJSPlayer.dispose();
      activeVideoJSPlayer = null;
   }
}

function initializeVideoJSPlayer(containerId, videoSource, posterSource) {
   cleanupVideoJS();

   const wrapper = document.getElementById(containerId);
   if (!wrapper) return;

   // Re-create video element
   wrapper.innerHTML = `
      <video id="my-videojs-player" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" poster="${posterSource}">
         <source src="${videoSource}" type="video/mp4" />
         <p class="vjs-no-js">To view this video please enable JavaScript</p>
      </video>
   `;

   if (window.videojs) {
      activeVideoJSPlayer = videojs("my-videojs-player", {
         controlBar: {
            children: [
               'playToggle',
               'volumePanel',
               'currentTimeDisplay',
               'timeDivider',
               'durationDisplay',
               'progressControl',
               'remainingTimeDisplay',
               'fullscreenToggle'
            ]
         }
      });
   }
}

// PDF Certificate Exporter using jsPDF
window.generateCertificate = function(playlistId) {
   if (!window.jspdf) {
      showToast("jsPDF library not loaded. Unable to export PDF.", true);
      return;
   }

   const playlist = seedPlaylists.find(p => p.id === playlistId);
   const studentName = AppState.user ? AppState.user.name : "Educa Student";
   const dateString = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

   const { jsPDF } = window.jspdf;
   const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [800, 560]
   });

   // 1. Draw elegant background border details
   doc.setFillColor(12, 11, 22); // Deep dark purple background matching app theme
   doc.rect(0, 0, 800, 560, "F");

   // Double Gold/Purple border
   doc.setDrawColor(112, 72, 232); // Purple primary
   doc.setLineWidth(6);
   doc.rect(20, 20, 760, 520);

   doc.setDrawColor(241, 196, 15); // Golden outline
   doc.setLineWidth(2);
   doc.rect(26, 26, 748, 508);

   // Corner corner frames
   doc.setFillColor(241, 196, 15);
   doc.rect(20, 20, 30, 6, "F");
   doc.rect(20, 20, 6, 30, "F");
   doc.rect(750, 20, 30, 6, "F");
   doc.rect(774, 20, 6, 30, "F");
   doc.rect(20, 534, 30, 6, "F");
   doc.rect(20, 510, 6, 30, "F");
   doc.rect(750, 534, 30, 6, "F");
   doc.rect(774, 510, 6, 30, "F");

   // 2. Title header
   doc.setTextColor(241, 196, 15); // Golden
   doc.setFont("Helvetica", "bold");
   doc.setFontSize(28);
   doc.text("EDUCA ONLINE ACADEMY", 400, 90, { align: "center" });

   doc.setTextColor(255, 255, 255);
   doc.setFont("Helvetica", "normal");
   doc.setFontSize(16);
   doc.text("CERTIFICATE OF COURSE COMPLETION", 400, 130, { align: "center" });

   // Decorative divider
   doc.setDrawColor(112, 72, 232);
   doc.setLineWidth(2);
   doc.line(300, 150, 500, 150);

   // 3. Statement
   doc.setFontSize(14);
   doc.setTextColor(164, 176, 190); // Muted gray
   doc.text("This document certifies that the student", 400, 190, { align: "center" });

   // 4. Student name
   doc.setFont("Helvetica", "bold");
   doc.setFontSize(32);
   doc.setTextColor(255, 255, 255);
   doc.text(studentName.toUpperCase(), 400, 240, { align: "center" });

   // 5. Course statement
   doc.setFont("Helvetica", "normal");
   doc.setFontSize(14);
   doc.setTextColor(164, 176, 190);
   doc.text("has successfully completed the coursework, practice lessons, and assessments in", 400, 280, { align: "center" });

   // Course Title
   doc.setFont("Helvetica", "bold");
   doc.setFontSize(22);
   doc.setTextColor(112, 72, 232); // Purple primary
   doc.text(`"${playlist ? playlist.title : 'Web Development Basics'}"`, 400, 320, { align: "center" });

   doc.setFont("Helvetica", "normal");
   doc.setFontSize(12);
   doc.setTextColor(164, 176, 190);
   doc.text("awarded with distinction and registered under candidate profile key usr-99.", 400, 350, { align: "center" });

   // 6. Signature lines
   doc.setDrawColor(164, 176, 190);
   doc.setLineWidth(1);
   
   // Date line
   doc.line(120, 440, 260, 440);
   doc.setFontSize(11);
   doc.text("Date of Award", 190, 455, { align: "center" });
   doc.setFont("Helvetica", "bold");
   doc.text(dateString, 190, 432, { align: "center" });

   // Seal Circle representation in center
   doc.setDrawColor(241, 196, 15);
   doc.setLineWidth(2);
   doc.setFillColor(112, 72, 232);
   doc.circle(400, 430, 30, "FD");
   doc.setTextColor(241, 196, 15);
   doc.setFontSize(10);
   doc.text("VERIFIED", 400, 433, { align: "center" });

   // Signature line
   doc.setFont("Helvetica", "normal");
   doc.line(540, 440, 680, 440);
   doc.text("Authorized Tutor", 610, 455, { align: "center" });
   doc.setFont("Courier", "italic");
   doc.setFontSize(16);
   doc.setTextColor(255, 255, 255);
   doc.text("Alex Johnson", 610, 432, { align: "center" });

   // 7. Save PDF file
   doc.save(`Educa_Certificate_${playlistId}.pdf`);
   showToast("Certificate downloaded successfully! Check downloads.");
};

// 8. Gamification Controller (XP, Levels, Streaks, Badges)
function addXP(amount) {
   if (!AppState.user) return;
   
   AppState.user.xp = (AppState.user.xp || 0) + amount;
   const nextLevelXP = AppState.user.level * 250;
   
   showToast(`Earned +${amount} XP!`);
   
   if (AppState.user.xp >= nextLevelXP) {
      AppState.user.xp -= nextLevelXP;
      AppState.user.level = (AppState.user.level || 1) + 1;
      
      setTimeout(() => {
         showToast(`🎉 LEVEL UP! You reached Level ${AppState.user.level}!`, false);
      }, 800);
   }

   AppState.save();
   renderHeader();
   renderSidebar();
   updateLeaderboardArray();
   
   if (window.location.hash === "#profile") {
      renderStudentDashboard();
   }
}

function updateStreak() {
   if (!AppState.user) return;
   
   const today = new Date().toISOString().split('T')[0];
   const lastActive = AppState.user.lastActiveDate;

   if (!lastActive) {
      AppState.user.streak = 1;
      AppState.user.lastActiveDate = today;
   } else if (lastActive !== today) {
      const lastDate = new Date(lastActive);
      const curDate = new Date(today);
      const diffTime = Math.abs(curDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
         AppState.user.streak = (AppState.user.streak || 0) + 1;
         showToast(`🔥 Streak Active! ${AppState.user.streak}-Day Login Streak!`);
      } else if (diffDays > 1) {
         AppState.user.streak = 1;
      }
      AppState.user.lastActiveDate = today;
   }
   AppState.save();
}

function unlockBadge(badgeId) {
   if (!AppState.user) return;
   
   if (!AppState.user.badges) {
      AppState.user.badges = ["badge-1"];
   }

   if (!AppState.user.badges.includes(badgeId)) {
      AppState.user.badges.push(badgeId);
      AppState.save();
      
      const badge = badgeRegistry[badgeId];
      setTimeout(() => {
         showToast(`🏆 Badge Unlocked: "${badge.title}"!`, false);
      }, 1500);

      addXP(100);
   }
}

function updateLeaderboardArray() {
   const student = mockStudentsLeaderboard.find(s => s.name === AppState.user.name || s.rank === 4);
   if (student) {
      student.name = AppState.user.name;
      student.level = AppState.user.level;
      student.xp = AppState.user.xp + (AppState.user.level - 1) * 250;
      student.streak = AppState.user.streak;
      student.image = AppState.user.image;
   }
   mockStudentsLeaderboard.sort((a, b) => b.xp - a.xp);
   mockStudentsLeaderboard.forEach((s, idx) => s.rank = idx + 1);
}

// 9. Automated Assessments (Quizzes) & Adaptive Recommendations

let activeQuiz = {
   playlistId: null,
   currentIndex: 0,
   selectedAns: null,
   score: 0,
   questions: []
};

function renderQuizWidget(playlistId) {
   const playlist = seedPlaylists.find(p => p.id === playlistId);
   const questions = seedQuizzes[playlistId];
   
   if (!questions) return "";

   const previousScore = AppState.quizAnswers[playlistId];

   let html = `
      <div class="quiz-widget" id="playlist-quiz-${playlistId}">
         <h3><i class="fas fa-file-signature"></i> <span>Automated Skills Quiz</span></h3>
         <div id="quiz-inner-stage">
   `;

   if (previousScore !== undefined) {
      html += `
         <div class="quiz-results-card">
            <i class="fas fa-circle-check score-icon" style="color:#2ecc71;"></i>
            <h4>Quiz Completed</h4>
            <p>You passed this test with a score of <strong>${previousScore}%</strong>.</p>
            <div style="margin-top:15px; display:flex; gap:10px; justify-content:center;">
               <button onclick="startQuiz('${playlistId}')" class="btn inline-option-btn" style="width:auto; margin:0;">Retake Quiz</button>
               <button onclick="generateCertificate('${playlistId}')" class="btn primary-btn" style="width:auto; margin:0;"><i class="fas fa-file-pdf"></i> Claim Certificate</button>
            </div>
         </div>
      `;
   } else {
      html += `
         <div class="quiz-results-card" style="padding: 10px 0;">
            <p>Challenge your understanding. Answer ${questions.length} automated questions to earn XP and skill badges.</p>
            <button onclick="startQuiz('${playlistId}')" class="btn primary-btn" style="width:auto;">Start Quiz</button>
         </div>
      `;
   }

   html += `
         </div>
      </div>
   `;
   return html;
}

window.startQuiz = function(playlistId) {
   const questions = seedQuizzes[playlistId];
   if (!questions) return;

   activeQuiz = {
      playlistId: playlistId,
      currentIndex: 0,
      selectedAns: null,
      score: 0,
      questions: questions
   };

   renderQuizQuestion();
};

function renderQuizQuestion() {
   const container = document.getElementById("quiz-inner-stage");
   const q = activeQuiz.questions[activeQuiz.currentIndex];
   
   container.innerHTML = `
      <div class="quiz-stage">
         <div class="quiz-progress">
            <span>Question ${activeQuiz.currentIndex + 1} of ${activeQuiz.questions.length}</span>
            <span>Current Score: ${Math.round((activeQuiz.score / activeQuiz.questions.length) * 100)}%</span>
         </div>
         <div class="quiz-question">${q.question}</div>
         <div class="quiz-options-list">
            ${q.options.map((opt, idx) => `
               <button class="quiz-opt-btn" onclick="selectQuizAnswer(${idx})">${opt}</button>
            `).join('')}
         </div>
         <button id="quiz-next-btn" onclick="submitQuizQuestion()" class="btn primary-btn" style="width:auto; align-self:flex-end; display:none;">Submit Answer</button>
      </div>
   `;
}

window.selectQuizAnswer = function(idx) {
   activeQuiz.selectedAns = idx;
   document.querySelectorAll(".quiz-opt-btn").forEach((btn, buttonIdx) => {
      if (buttonIdx === idx) {
         btn.classList.add("selected");
      } else {
         btn.classList.remove("selected");
      }
   });
   document.getElementById("quiz-next-btn").style.display = "inline-block";
};

window.submitQuizQuestion = function() {
   const q = activeQuiz.questions[activeQuiz.currentIndex];
   const btns = document.querySelectorAll(".quiz-opt-btn");
   const nextBtn = document.getElementById("quiz-next-btn");

   if (nextBtn.textContent === "Next Question" || nextBtn.textContent === "Finish Quiz") {
      activeQuiz.currentIndex++;
      if (activeQuiz.currentIndex < activeQuiz.questions.length) {
         activeQuiz.selectedAns = null;
         renderQuizQuestion();
      } else {
         finishQuiz();
      }
      return;
   }

   const isCorrect = activeQuiz.selectedAns === q.answer;
   if (isCorrect) {
      activeQuiz.score++;
      btns[activeQuiz.selectedAns].classList.add("correct-ans");
      showToast("Correct Answer! +10 XP");
      addXP(10);
   } else {
      btns[activeQuiz.selectedAns].classList.add("wrong-ans");
      btns[q.answer].classList.add("correct-ans");
      showToast("Incorrect Answer", true);
   }

   const isLast = activeQuiz.currentIndex === activeQuiz.questions.length - 1;
   nextBtn.textContent = isLast ? "Finish Quiz" : "Next Question";
};

function finishQuiz() {
   const scorePercent = Math.round((activeQuiz.score / activeQuiz.questions.length) * 100);
   AppState.quizAnswers[activeQuiz.playlistId] = scorePercent;
   AppState.save();

   const container = document.getElementById("quiz-inner-stage");
   const passed = scorePercent >= 60;

   let rewardsMsg = "";
   if (passed) {
      addXP(100);
      unlockBadge("badge-4");
      rewardsMsg = "🎉 You passed! Earned +100 XP completion bonus.";
      if (scorePercent === 100) {
         unlockBadge("badge-5");
         rewardsMsg = "🔥 PERFECT SCORE! Earned +150 XP bonus and unlocked the Perfect Mastery Badge!";
         addXP(50);
      }
   } else {
      rewardsMsg = "Score under 60%. Study the playlist lessons and try again.";
   }

   container.innerHTML = `
      <div class="quiz-results-card">
         <i class="fas ${passed ? 'fa-trophy' : 'fa-circle-xmark'}" style="font-size:50px; color:${passed ? '#f1c40f':'#e74c3c'}; margin-bottom:10px;"></i>
         <h4>Quiz Finished!</h4>
         <p>You scored <strong>${scorePercent}%</strong> (${activeQuiz.score}/${activeQuiz.questions.length} correct answers).</p>
         <p style="font-size:12px; margin-bottom:15px; font-weight:500; color:${passed ? '#2ecc71':'#e74c3c'}">${rewardsMsg}</p>
         
         <div style="display:flex; gap:10px; justify-content:center; margin-top:15px;">
            <button onclick="startQuiz('${activeQuiz.playlistId}')" class="btn inline-option-btn" style="width:auto; margin:0;">Retake Test</button>
            ${passed ? `<button onclick="generateCertificate('${activeQuiz.playlistId}')" class="btn primary-btn" style="width:auto; margin:0;"><i class="fas fa-file-pdf"></i> Claim Certificate</button>` : ''}
         </div>
      </div>
   `;

   renderAdaptiveRecommendations();
}

function renderAdaptiveRecommendations() {
   const container = document.getElementById("adaptive-learning-container");
   if (!container) return;

   container.innerHTML = "";
   let recommendations = [];

   Object.entries(AppState.quizAnswers).forEach(([playlistId, score]) => {
      if (score < 60) {
         const playlist = seedPlaylists.find(p => p.id === playlistId);
         if (playlist) {
            recommendations.push({
               playlist: playlist,
               badge: "💡 Skill Gap recommendation",
               desc: `Review the syllabus because your quiz score is ${score}% (under 60%).`
            });
         }
      }
   });

   if (AppState.likes.length > 0) {
      const likedVideo = seedVideos.find(v => AppState.likes.includes(v.id));
      if (likedVideo) {
         const playlist = seedPlaylists.find(p => p.id === likedVideo.playlist_id);
         if (playlist) {
            const categoryCourses = seedPlaylists.filter(p => p.category === playlist.category && !AppState.bookmarks.includes(p.id) && p.id !== playlist.id);
            categoryCourses.forEach(c => {
               if (!recommendations.some(r => r.playlist.id === c.id)) {
                  recommendations.push({
                     playlist: c,
                     badge: "🌟 Because you liked " + playlist.category,
                     desc: "Expand your capabilities in this topic."
                  });
               }
            });
         }
      }
   }

   if (recommendations.length === 0) {
      const jsCourse = seedPlaylists.find(p => p.id === "play-3");
      const figmaCourse = seedPlaylists.find(p => p.id === "play-4");
      
      if (!AppState.bookmarks.includes("play-3") && jsCourse) {
         recommendations.push({
            playlist: jsCourse,
            badge: "⚡ Essential Baseline",
            desc: "Highly recommended JavaScript baseline to master before pursuing dynamic web frameworks."
         });
      }
      if (!AppState.bookmarks.includes("play-4") && figmaCourse) {
         recommendations.push({
            playlist: figmaCourse,
            badge: "🎨 Interactive Creative Design",
            desc: "Add creative UX UI designing skills to expand design thinking."
         });
      }
   }

   const topRecs = recommendations.slice(0, 3);
   
   let html = `
      <h3><i class="fas fa-brain"></i> <span data-i18n="heading_adaptive">Adaptive Learning Pathway Suggestions</span></h3>
      <div class="recommendations-flex">
   `;

   topRecs.forEach(rec => {
      html += `
         <div class="rec-card">
            <span class="reason-badge">${rec.badge}</span>
            <h4>${rec.playlist.title}</h4>
            <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px; line-height:1.4;">${rec.desc}</p>
            <a href="#playlist?id=${rec.playlist.id}" class="btn primary-btn" style="margin-top:auto; padding:6px 15px; font-size:12px; width:auto; align-self:flex-start;">Begin Path</a>
         </div>
      `;
   });

   html += `</div>`;
   container.innerHTML = html;
}

// 10. General Render Methods & Leaderboards

function renderLeaderboard() {
   updateLeaderboardArray();
   const container = document.getElementById("leaderboard-items");
   if (!container) return;

   container.innerHTML = "";

   mockStudentsLeaderboard.forEach(student => {
      container.innerHTML += `
         <div class="leaderboard-row">
            <div class="rank-cell">#${student.rank}</div>
            <div class="student-cell">
               <img src="images/${student.image}" alt="">
               <span>${student.name}</span>
            </div>
            <div class="level-cell"><span>Lvl ${student.level}</span></div>
            <div class="xp-cell">${student.xp} XP</div>
            <div class="streak-cell">🔥 ${student.streak} days</div>
         </div>
      `;
   });
}

function renderGamificationSidebar() {
   const container = document.getElementById("sidebar-gamify-container");
   if (!container) return;

   if (AppState.user) {
      const nextLevelXP = AppState.user.level * 250;
      const progressPercent = Math.min((AppState.user.xp / nextLevelXP) * 100, 100);
      container.innerHTML = `
         <div class="level-badge">
            <span>Level ${AppState.user.level}</span>
            <span>${AppState.user.xp}/${nextLevelXP} XP</span>
         </div>
         <div class="xp-progress">
            <div class="xp-progress-bar" style="width: ${progressPercent}%"></div>
         </div>
         <div class="streak-count">
            <i class="fas fa-fire"></i> 
            <span><strong>${AppState.user.streak}</strong> Day Streak</span>
         </div>
      `;
   } else {
      container.innerHTML = "";
   }
}

// Translate function
function changeLanguage(lang) {
   localStorage.setItem('educa_lang', lang);
   document.getElementById("lang-selector").value = lang;

   const elements = document.querySelectorAll("[data-i18n]");
   elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
         el.innerHTML = translations[lang][key];
      }
   });

   const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
   placeholders.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
         el.setAttribute("placeholder", translations[lang][key]);
      }
   });

   if (lang !== "en") {
      unlockBadge("badge-2");
   }
}

function renderHeader() {
   const container = document.getElementById("dropdown-user-info");
   if (AppState.user) {
      container.innerHTML = `
         <img src="images/${AppState.user.image}" alt="">
         <h3>${AppState.user.name}</h3>
         <span>${AppState.user.role}</span>
         <a href="#profile" class="btn">View Dashboard</a>
         <div class="flex-btn">
            <a href="#login" class="option-btn">login</a>
            <a href="#register" class="option-btn">register</a>
         </div>
         <a href="#" id="logout-btn" class="delete-btn">logout</a>
      `;
      document.getElementById("logout-btn").onclick = handleLogout;
   } else {
      container.innerHTML = `
         <h3>Guest Student</h3>
         <span>Please sign in</span>
         <div class="flex-btn" style="margin-top: 15px;">
            <a href="#login" class="option-btn">login</a>
            <a href="#register" class="option-btn">register</a>
         </div>
      `;
   }
}

function renderSidebar() {
   const container = document.getElementById("sidebar-profile");
   if (AppState.user) {
      container.innerHTML = `
         <img src="images/${AppState.user.image}" alt="">
         <h3>${AppState.user.name}</h3>
         <span>Student</span>
         <a href="#profile" class="btn">view profile</a>
      `;
   } else {
      container.innerHTML = `
         <h3>Guest Student</h3>
         <span>Please login or register</span>
         <div class="flex-btn" style="padding-top: .5rem;">
            <a href="#login" class="option-btn">login</a>
            <a href="#register" class="option-btn">register</a>
         </div>
      `;
   }

   renderGamificationSidebar();
}

function renderHome() {
   const statsDiv = document.getElementById("student-quick-stats");
   if (AppState.user) {
      const userCommentsCount = AppState.comments.filter(c => c.user_id === AppState.user.id).length;
      statsDiv.innerHTML = `
         <h3 class="title">Quick Dashboard</h3>
         <p>Total Likes: <span>${AppState.likes.length}</span></p>
         <a href="#profile" class="inline-btn">View Likes</a>
         <p>My Comments: <span>${userCommentsCount}</span></p>
         <a href="#profile" class="inline-btn">View Comments</a>
         <p>Saved Playlists: <span>${AppState.bookmarks.length}</span></p>
         <a href="#profile" class="inline-btn">View Bookmarks</a>
      `;
   } else {
      statsDiv.innerHTML = `
         <h3 class="title">Join Our Community</h3>
         <p style="margin-bottom: 20px; line-height:1.5;">Register now to like lessons, bookmark playlists, and discuss with tutors.</p>
         <div class="flex-btn">
            <a href="#login" class="option-btn">login</a>
            <a href="#register" class="option-btn">register</a>
         </div>
      `;
   }

   const coursesContainer = document.getElementById("latest-courses-container");
   coursesContainer.innerHTML = "";
   const activePlaylists = seedPlaylists.filter(p => p.status === "active").slice(0, 3);

   activePlaylists.forEach(playlist => {
      const tutor = seedTutors.find(t => t.id === playlist.tutor_id);
      coursesContainer.innerHTML += `
         <div class="box">
            <div class="tutor">
               <img src="images/${tutor.image}" alt="">
               <div>
                  <h3>${tutor.name}</h3>
                  <span>${playlist.date}</span>
               </div>
            </div>
            <div class="thumb-container">
               <img src="images/${playlist.thumb}" class="thumb" alt="">
            </div>
            <h3 class="title">${playlist.title}</h3>
            <a href="#playlist?id=${playlist.id}" class="inline-btn">View Playlist</a>
         </div>
      `;
   });

   renderAdaptiveRecommendations();
}

function renderCourses() {
   const listContainer = document.getElementById("all-courses-container");
   listContainer.innerHTML = "";

   seedPlaylists.forEach(playlist => {
      const tutor = seedTutors.find(t => t.id === playlist.tutor_id);
      listContainer.innerHTML += `
         <div class="box course-item" data-title="${playlist.title.toLowerCase()}" data-tutor="${tutor.name.toLowerCase()}" data-desc="${playlist.description.toLowerCase()}" data-category="${playlist.category}">
            <div class="tutor">
               <img src="images/${tutor.image}" alt="">
               <div>
                  <h3>${tutor.name}</h3>
                  <span>${playlist.date}</span>
               </div>
            </div>
            <div class="thumb-container">
               <img src="images/${playlist.thumb}" class="thumb" alt="">
            </div>
            <h3 class="title">${playlist.title}</h3>
            <a href="#playlist?id=${playlist.id}" class="inline-btn">View Playlist</a>
         </div>
      `;
   });

   document.getElementById("course-filter-search").oninput = filterCourses;
   document.getElementById("course-filter-category").onchange = filterCourses;
}

function filterCourses() {
   const q = document.getElementById("course-filter-search").value.toLowerCase().trim();
   const cat = document.getElementById("course-filter-category").value;
   const items = document.querySelectorAll("#all-courses-container .course-item");
   let visibleCount = 0;

   items.forEach(item => {
      const title = item.getAttribute("data-title");
      const tutor = item.getAttribute("data-tutor");
      const desc = item.getAttribute("data-desc");
      const itemCat = item.getAttribute("data-category");

      const matchSearch = title.includes(q) || tutor.includes(q) || desc.includes(q);
      const matchCat = cat === "all" || itemCat === cat;

      if (matchSearch && matchCat) {
         item.style.display = "block";
         visibleCount++;
      } else {
         item.style.display = "none";
      }
   });

   const existingEmpty = document.querySelector("#all-courses-container .empty");
   if (visibleCount === 0) {
      if (!existingEmpty) {
         const emptyMsg = document.createElement("p");
         emptyMsg.className = "empty";
         emptyMsg.textContent = "No courses match your filtering criteria.";
         document.getElementById("all-courses-container").appendChild(emptyMsg);
      }
   } else if (existingEmpty) {
      existingEmpty.remove();
   }
}

async function renderPlaylist(playlistId) {
   const container = document.getElementById("playlist-details-container");
   container.innerHTML = "";

   const playlist = seedPlaylists.find(p => p.id === playlistId);
   if (!playlist) {
      container.innerHTML = `<p class="empty">Playlist not found.</p>`;
      return;
   }

   const tutor = seedTutors.find(t => t.id === playlist.tutor_id);
   const videos = seedVideos.filter(v => v.playlist_id === playlistId);
   
   // Sync bookmark state with DB if active
   let isBookmarked = AppState.bookmarks.includes(playlistId);

   const quizHtml = renderQuizWidget(playlistId);

   let html = `
      <div class="playlist-details">
         <div class="col">
            <img src="images/${playlist.thumb}" class="thumb" alt="">
         </div>
         <div class="col">
            <div class="tutor">
               <img src="images/${tutor.image}" alt="">
               <div>
                  <h3>${tutor.name}</h3>
                  <span>${tutor.profession}</span>
               </div>
            </div>
            <h3 class="title">${playlist.title}</h3>
            <p class="description">${playlist.description}</p>
            <div class="bookmark-actions">
               <button onclick="toggleBookmark('${playlist.id}')" class="btn ${isBookmarked ? 'option-btn' : 'primary-btn'}" style="width:auto; margin:0;">
                  <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i> 
                  <span>${isBookmarked ? 'Bookmarked' : 'Bookmark Playlist'}</span>
               </button>
               <a href="#tutor?id=${tutor.id}" class="inline-option-btn" style="line-height:24px;">View Tutor Profile</a>
            </div>
         </div>
      </div>

      ${quizHtml}
      
      <div class="playlist-videos" style="margin-top:25px;">
         <h3>Videos in Playlist (${videos.length})</h3>
         <div class="videos-list">
   `;

   if (videos.length === 0) {
      html += `<p class="empty" style="grid-column:1/-1;">No lessons added to this playlist yet.</p>`;
   } else {
      videos.forEach(video => {
         html += `
            <a href="#watch?video=${video.id}" class="video-card">
               <img src="images/${video.thumb}" alt="">
               <div class="play-overlay">
                  <i class="fas fa-play"></i>
               </div>
               <h3>${video.title}</h3>
            </a>
         `;
      });
   }

   html += `
         </div>
      </div>
   `;
   container.innerHTML = html;
}

async function renderWatchVideo(videoId) {
   const container = document.getElementById("watch-video-container");
   container.innerHTML = "";

   const video = seedVideos.find(v => v.id === videoId);
   if (!video) {
      container.innerHTML = `<p class="empty">Video not found.</p>`;
      return;
   }

   const playlist = seedPlaylists.find(p => p.id === video.playlist_id);
   const tutor = seedTutors.find(t => t.id === video.tutor_id);
   
   let isLiked = AppState.likes.includes(videoId);
   let isBookmarked = AppState.bookmarks.includes(playlist.id);

   let totalVideoLikes = (isLiked ? 1 : 0) + (videoId === "vid-1" ? 18 : 5);
   let videoComments = [...AppState.comments.filter(c => c.content_id === videoId)];

   // Try retrieving comments from API
   if (AppState.useDatabaseAPI) {
      try {
         const resp = await fetch(`${AppState.API_BASE}/comments.php?video_id=${videoId}`);
         if (resp.ok) {
            const data = await resp.json();
            if (data.status === "success" && data.comments.length > 0) {
               videoComments = data.comments;
            }
         }
      } catch (e) {
         console.warn("Educa: Failed to fetch database comments. Using mock comments.", e);
      }
   }

   const quizHtml = renderQuizWidget(playlist.id);

   let html = `
      <div class="watch-video">
         <!-- Advanced Video.js Wrapper container -->
         <div class="video-player-container" id="video-js-wrapper">
            <!-- Rendered by initializeVideoJSPlayer -->
         </div>
         <div class="video-details">
            <h3>${video.title}</h3>
            <div class="info">
               <span><i class="fas fa-calendar"></i> ${video.date}</span>
               <span><i class="fas fa-thumbs-up"></i> <span id="likes-count-val">${totalVideoLikes}</span> likes</span>
            </div>
            <div class="video-actions">
               <div class="tutor">
                  <img src="images/${tutor.image}" alt="">
                  <div>
                     <h3>${tutor.name}</h3>
                     <span>${tutor.profession}</span>
                  </div>
               </div>
               <div class="btn-group">
                  <button onclick="toggleLike('${video.id}')" class="inline-btn ${isLiked ? 'option-btn' : ''}" id="like-btn-el">
                     <i class="fa-${isLiked ? 'solid' : 'regular'} fa-thumbs-up"></i> <span>${isLiked ? 'Liked' : 'Like'}</span>
                  </button>
                  <button onclick="toggleBookmark('${playlist.id}', true)" class="inline-option-btn">
                     <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i> <span>${isBookmarked ? 'Saved' : 'Save Playlist'}</span>
                  </button>
               </div>
            </div>
            <p style="margin-top: 20px; line-height: 1.6; color: var(--text-muted); font-size:14.5px;">${video.description}</p>
         </div>
      </div>

      ${quizHtml}

      <div class="comments-section" style="margin-top:25px;">
         <h3>Comments (${videoComments.length})</h3>
         
         <div class="add-comment-form">
            <form id="comment-post-form" onsubmit="handleCommentSubmit(event, '${video.id}', '${tutor.id}')">
               <textarea placeholder="Write a comment..." rows="3" id="comment-text" required></textarea>
               <button type="submit" class="inline-btn">Post Comment</button>
            </form>
         </div>

         <div class="comments-container" style="margin-top: 25px;">
   `;

   if (videoComments.length === 0) {
      html += `<p class="empty" id="empty-comments-msg" style="padding: 2rem;">Be the first to comment on this tutorial!</p>`;
   } else {
      const sortedComments = [...videoComments].reverse();
      sortedComments.forEach(comment => {
         const canDelete = AppState.user && comment.user_id === AppState.user.id;
         html += `
            <div class="comment-box" id="comment-item-${comment.id}">
               <div class="user">
                  <div class="info">
                     <img src="images/${comment.user_image || 'pic-2.jpg'}" alt="">
                     <div>
                        <h3>${comment.user_name || 'Guest'}</h3>
                        <span>${comment.date}</span>
                     </div>
                  </div>
                  ${canDelete ? `
                     <button onclick="deleteComment('${comment.id}', '${video.id}')" class="inline-delete-btn" style="padding: 5px 12px; font-size: 11px;">
                        <i class="fas fa-trash"></i> Delete
                     </button>
                  ` : ''}
               </div>
               <div class="text">${comment.comment}</div>
            </div>
         `;
      });
   }

   html += `
         </div>
      </div>
   `;
   container.innerHTML = html;

   // Start Video.js player
   initializeVideoJSPlayer("video-js-wrapper", video.videoUrl, `images/${video.thumb}`);

   // Award +10 XP
   setTimeout(() => {
      addXP(10);
   }, 3000);
}

function renderTeachers() {
   const container = document.getElementById("teachers-container");
   container.innerHTML = "";

   seedTutors.forEach(tutor => {
      container.innerHTML += `
         <div class="box teacher-item" data-name="${tutor.name.toLowerCase()}" data-profession="${tutor.profession.toLowerCase()}">
            <img src="images/${tutor.image}" alt="">
            <h3>${tutor.name}</h3>
            <span>${tutor.profession}</span>
            <p>playlists : <span>${tutor.playlistsCount}</span></p>
            <p>total videos : <span>${tutor.videosCount}</span></p>
            <p>total likes : <span>${tutor.likesCount}</span></p>
            <a href="#tutor?id=${tutor.id}" class="inline-btn">view profile</a>
         </div>
      `;
   });

   document.getElementById("teacher-filter-search").oninput = filterTeachers;
}

function filterTeachers() {
   const q = document.getElementById("teacher-filter-search").value.toLowerCase().trim();
   const items = document.querySelectorAll("#teachers-container .teacher-item");
   let visibleCount = 0;

   items.forEach(item => {
      const name = item.getAttribute("data-name");
      const profession = item.getAttribute("data-profession");
      if (name.includes(q) || profession.includes(q)) {
         item.style.display = "block";
         visibleCount++;
      } else {
         item.style.display = "none";
      }
   });

   const existingEmpty = document.querySelector("#teachers-container .empty");
   if (visibleCount === 0) {
      if (!existingEmpty) {
         const emptyMsg = document.createElement("p");
         emptyMsg.className = "empty";
         emptyMsg.textContent = "No tutors match your search.";
         document.getElementById("teachers-container").appendChild(emptyMsg);
      }
   } else if (existingEmpty) {
      existingEmpty.remove();
   }
}

function renderTutorProfile(tutorId) {
   const container = document.getElementById("tutor-profile-container");
   container.innerHTML = "";

   const tutor = seedTutors.find(t => t.id === tutorId);
   if (!tutor) {
      container.innerHTML = `<p class="empty">Tutor not found.</p>`;
      return;
   }

   const tutorPlaylists = seedPlaylists.filter(p => p.tutor_id === tutorId);

   let html = `
      <div class="profile-card">
         <img src="images/${tutor.image}" alt="">
         <h3>${tutor.name}</h3>
         <span>${tutor.profession}</span>
         <div class="profile-stats">
            <div class="stat-box">
               <i class="fas fa-graduation-cap"></i>
               <h4>${tutor.playlistsCount}</h4>
               <p>playlists</p>
            </div>
            <div class="stat-box">
               <i class="fas fa-video"></i>
               <h4>${tutor.videosCount}</h4>
               <p>total videos</p>
            </div>
            <div class="stat-box">
               <i class="fas fa-thumbs-up"></i>
               <h4>${tutor.likesCount}</h4>
               <p>total likes</p>
            </div>
         </div>
      </div>

      <h1 class="heading">Playlists by ${tutor.name}</h1>
      <div class="courses-grid">
   `;

   if (tutorPlaylists.length === 0) {
      html += `<p class="empty" style="grid-column:1/-1;">This tutor hasn't uploaded playlists yet.</p>`;
   } else {
      tutorPlaylists.forEach(playlist => {
         html += `
            <div class="box">
               <div class="thumb-container">
                  <img src="images/${playlist.thumb}" class="thumb" alt="">
               </div>
               <h3 class="title" style="margin-top:15px;">${playlist.title}</h3>
               <a href="#playlist?id=${playlist.id}" class="inline-btn">View Playlist</a>
            </div>
         `;
      });
   }

   html += `</div>`;
   container.innerHTML = html;
}

function renderStudentDashboard() {
   const container = document.getElementById("student-profile-container");
   container.innerHTML = "";

   if (!AppState.user) {
      container.innerHTML = `<p class="empty">Please log in to view your dashboard.</p>`;
      return;
   }

   const userComments = AppState.comments.filter(c => c.user_id === AppState.user.id);
   const userBookmarks = seedPlaylists.filter(p => AppState.bookmarks.includes(p.id));
   
   if (!AppState.user.badges) {
      AppState.user.badges = ["badge-1"];
   }

   let html = `
      <div class="profile-card">
         <img src="images/${AppState.user.image}" alt="">
         <h3>${AppState.user.name}</h3>
         <span>Student Profile (Level ${AppState.user.level})</span>
         <div class="profile-stats">
            <div class="stat-box">
               <i class="fas fa-thumbs-up"></i>
               <h4>${AppState.likes.length}</h4>
               <p>liked videos</p>
            </div>
            <div class="stat-box">
               <i class="fas fa-comment"></i>
               <h4>${userComments.length}</h4>
               <p>my comments</p>
            </div>
            <div class="stat-box">
               <i class="fas fa-award"></i>
               <h4>${AppState.user.badges.length}</h4>
               <p>unlocked badges</p>
            </div>
         </div>
         <a href="#update-profile" class="btn inline-btn" style="margin-top:20px; width:auto;">Update Profile Info</a>
      </div>

      <div class="profile-tabs-section">
         <div class="profile-tabs-header">
            <button class="profile-tab-btn active" onclick="switchProfileTab(event, 'tab-bookmarks')">Saved Playlists</button>
            <button class="profile-tab-btn" onclick="switchProfileTab(event, 'tab-comments')">My Comments</button>
            <button class="profile-tab-btn" onclick="switchProfileTab(event, 'tab-badges')">Achievements</button>
            <button class="profile-tab-btn" onclick="switchProfileTab(event, 'tab-radar')"><i class="fas fa-chart-pie"></i> Skill Mastery Radar</button>
         </div>

         <div class="profile-tab-content active" id="tab-bookmarks">
            <div class="courses-grid" style="margin-top: 15px;">
   `;

   if (userBookmarks.length === 0) {
      html += `<p class="empty" style="grid-column:1/-1; padding: 2.5rem;">You haven't bookmarked any playlists yet.</p>`;
   } else {
      userBookmarks.forEach(playlist => {
         const tutor = seedTutors.find(t => t.id === playlist.tutor_id);
         html += `
            <div class="box">
               <div class="tutor">
                  <img src="images/${tutor.image}" alt="">
                  <div>
                     <h3>${tutor.name}</h3>
                     <span>${playlist.date}</span>
                  </div>
               </div>
               <div class="thumb-container">
                  <img src="images/${playlist.thumb}" class="thumb" alt="">
               </div>
               <h3 class="title">${playlist.title}</h3>
               <div class="flex-btn">
                  <a href="#playlist?id=${playlist.id}" class="inline-btn" style="flex:1;">View</a>
                  <button onclick="toggleBookmark('${playlist.id}')" class="inline-delete-btn" style="padding: 10px 15px;">
                     <i class="fas fa-trash"></i> Remove
                  </button>
               </div>
            </div>
         `;
      });
   }

   html += `
            </div>
         </div>

         <div class="profile-tab-content" id="tab-comments">
            <div class="my-comments-list" style="margin-top: 15px;">
   `;

   if (userComments.length === 0) {
      html += `<p class="empty" style="padding: 2.5rem;">You haven't posted any comments yet.</p>`;
   } else {
      userComments.forEach(comment => {
         const video = seedVideos.find(v => v.id === comment.content_id);
         html += `
            <div class="comment-item" id="dashboard-comment-${comment.id}">
               <div class="comment-content">
                  <h4>Comment on: <a href="#watch?video=${video.id || 'vid-1'}" style="color:var(--primary-color); font-weight:500;">${video ? video.title : 'Deleted Video'}</a></h4>
                  <p><i class="fas fa-calendar"></i> Posted on ${comment.date}</p>
                  <div class="comment-text">${comment.comment}</div>
               </div>
               <button onclick="deleteComment('${comment.id}', '${video ? video.id : ''}', true)" class="inline-delete-btn">
                  <i class="fas fa-trash"></i> Remove
               </button>
            </div>
         `;
      });
   }

   html += `
            </div>
         </div>

         <div class="profile-tab-content" id="tab-badges">
            <div class="badges-grid" style="margin-top: 15px;">
               ${Object.entries(badgeRegistry).map(([badgeId, badge]) => {
                  const unlocked = AppState.user.badges.includes(badgeId);
                  return `
                     <div class="badge-card ${unlocked ? 'unlocked' : ''}">
                        <i class="${badge.icon}"></i>
                        <h4>${badge.title}</h4>
                        <p>${badge.desc}</p>
                     </div>
                  `;
               }).join('')}
            </div>
         </div>

         <div class="profile-tab-content" id="tab-radar">
            <div class="radar-mastery-section" style="margin-top: 15px;">
               <div class="radar-mastery-grid">
                  <div class="radar-canvas-container">
                     <canvas id="skillRadarCanvas" width="340" height="340"></canvas>
                  </div>
                  <div class="competency-bars">
                     <h3 style="color:var(--text-main); margin-bottom: 1rem;"><i class="fas fa-award"></i> Verified Multi-Domain Competency</h3>
                     <div class="comp-bar-item">
                        <h5><span>Frontend Architecture (HTML/CSS/JS)</span> <span>88%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 88%;"></div></div>
                     </div>
                     <div class="comp-bar-item">
                        <h5><span>Backend & REST APIs (Node/Express)</span> <span>72%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 72%;"></div></div>
                     </div>
                     <div class="comp-bar-item">
                        <h5><span>Database Systems & SQL Optimization</span> <span>65%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 65%;"></div></div>
                     </div>
                     <div class="comp-bar-item">
                        <h5><span>Data Structures & Algorithmic Thinking</span> <span>80%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 80%;"></div></div>
                     </div>
                     <div class="comp-bar-item">
                        <h5><span>Cloud Deployment & DevOps</span> <span>55%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 55%;"></div></div>
                     </div>
                     <div class="comp-bar-item">
                        <h5><span>AI & Machine Learning Foundations</span> <span>60%</span></h5>
                        <div class="comp-progress-track"><div class="comp-progress-fill" style="width: 60%;"></div></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   `;
   container.innerHTML = html;
}

let skillRadarChartInstance = null;
function renderSkillRadarChart() {
   const canvas = document.getElementById("skillRadarCanvas");
   if (!canvas) return;

   if (skillRadarChartInstance) {
      skillRadarChartInstance.destroy();
      skillRadarChartInstance = null;
   }

   const ctx = canvas.getContext('2d');
   skillRadarChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
         labels: ['Frontend', 'Backend & APIs', 'Database', 'DSA & Algorithms', 'DevOps & Cloud', 'AI & ML'],
         datasets: [{
            label: 'Student Mastery Level (%)',
            data: [88, 72, 65, 80, 55, 60],
            backgroundColor: 'rgba(112, 72, 232, 0.25)',
            borderColor: '#7048e8',
            pointBackgroundColor: '#ff7675',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ff7675',
            borderWidth: 2
         }]
      },
      options: {
         responsive: true,
         maintainAspectRatio: true,
         scales: {
            r: {
               angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
               grid: { color: 'rgba(255, 255, 255, 0.08)' },
               pointLabels: {
                  color: '#a4b0be',
                  font: { size: 11, family: "'Outfit', sans-serif" }
               },
               suggestedMin: 0,
               suggestedMax: 100,
               ticks: {
                  display: false,
                  stepSize: 20
               }
            }
         },
         plugins: {
            legend: {
               labels: {
                  color: '#f1f2f6',
                  font: { family: "'Outfit', sans-serif" }
               }
            }
         }
      }
   });
}

window.switchProfileTab = function(event, tabId) {
   document.querySelectorAll('.profile-tab-btn').forEach(b => b.classList.remove('active'));
   document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
   if (event && event.currentTarget) event.currentTarget.classList.add('active');
   const target = document.getElementById(tabId);
   if (target) target.classList.add('active');
   if (tabId === 'tab-radar') {
      setTimeout(renderSkillRadarChart, 50);
   }
};

// 11. Actions & API Synchronizers

async function toggleBookmark(playlistId, isFromVideo = false) {
   if (!AppState.user) {
      showToast("Please log in to bookmark playlists", true);
      window.location.hash = "#login";
      return;
   }

   // 1. Check API mode
   if (AppState.useDatabaseAPI) {
      try {
         const resp = await fetch(`${AppState.API_BASE}/bookmarks.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: AppState.user.id, playlist_id: playlistId })
         });
         if (resp.ok) {
            const data = await resp.json();
            if (data.status === "success") {
               if (data.bookmarked) {
                  if (!AppState.bookmarks.includes(playlistId)) AppState.bookmarks.push(playlistId);
                  showToast("Playlist added to bookmarks");
                  addXP(15);
               } else {
                  const idx = AppState.bookmarks.indexOf(playlistId);
                  if (idx > -1) AppState.bookmarks.splice(idx, 1);
                  showToast("Removed from saved playlists");
               }
            }
         }
      } catch (e) {
         console.error("API error toggling bookmark", e);
      }
   } else {
      // Fallback
      const index = AppState.bookmarks.indexOf(playlistId);
      if (index > -1) {
         AppState.bookmarks.splice(index, 1);
         showToast("Removed from saved playlists");
      } else {
         AppState.bookmarks.push(playlistId);
         showToast("Playlist added to bookmarks");
         addXP(15);
      }
   }

   AppState.save();

   const hash = window.location.hash;
   if (hash.startsWith("#playlist")) {
      renderPlaylist(playlistId);
   } else if (hash.startsWith("#watch") && isFromVideo) {
      const parts = hash.split('?');
      if (parts[1]) {
         const videoId = parts[1].split('=')[1];
         renderWatchVideo(videoId);
      }
   } else if (hash === "#profile") {
      renderStudentDashboard();
   }
   
   renderHome();
}

async function toggleLike(videoId) {
   if (!AppState.user) {
      showToast("Please log in to like videos", true);
      window.location.hash = "#login";
      return;
   }

   const video = seedVideos.find(v => v.id === videoId);

   if (AppState.useDatabaseAPI) {
      try {
         const resp = await fetch(`${AppState.API_BASE}/likes.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: AppState.user.id, content_id: videoId, tutor_id: video ? video.tutor_id : '' })
         });
         if (resp.ok) {
            const data = await resp.json();
            if (data.status === "success") {
               if (data.liked) {
                  if (!AppState.likes.includes(videoId)) AppState.likes.push(videoId);
                  showToast("Video liked! +5 XP");
                  addXP(5);
               } else {
                  const idx = AppState.likes.indexOf(videoId);
                  if (idx > -1) AppState.likes.splice(idx, 1);
                  showToast("Removed like from video");
               }
               
               // Dynamic UI update
               const val = document.getElementById("likes-count-val");
               if (val) val.textContent = data.total_likes;
               const btn = document.getElementById("like-btn-el");
               if (btn) {
                  if (data.liked) {
                     btn.className = "inline-btn option-btn";
                     btn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> <span>Liked</span>`;
                  } else {
                     btn.className = "inline-btn";
                     btn.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> <span>Like</span>`;
                  }
               }
            }
         }
      } catch (e) {
         console.error("API error toggling like", e);
      }
   } else {
      const index = AppState.likes.indexOf(videoId);
      if (index > -1) {
         AppState.likes.splice(index, 1);
         showToast("Removed like from video");
      } else {
         AppState.likes.push(videoId);
         showToast("Video liked! +5 XP");
         addXP(5);
      }
      
      if (window.location.hash.startsWith("#watch")) {
         renderWatchVideo(videoId);
      }
   }

   AppState.save();
   if (window.location.hash === "#profile") {
      renderStudentDashboard();
   }
   renderHome();
}

async function handleCommentSubmit(e, videoId, tutorId) {
   e.preventDefault();
   if (!AppState.user) {
      showToast("Please log in to post comments", true);
      window.location.hash = "#login";
      return;
   }

   const commentInput = document.getElementById("comment-text");
   const text = commentInput.value.trim();
   if (!text) return;

   const tempId = "comm-" + Date.now();

   if (AppState.useDatabaseAPI) {
      try {
         const resp = await fetch(`${AppState.API_BASE}/comments.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: AppState.user.id, video_id: videoId, tutor_id: tutorId, comment: text })
         });
         if (resp.ok) {
            const data = await resp.json();
            if (data.status === "success") {
               const newComment = {
                  id: data.comment.id,
                  content_id: videoId,
                  user_id: AppState.user.id,
                  user_name: AppState.user.name,
                  user_image: AppState.user.image,
                  comment: text,
                  date: data.comment.date
               };
               AppState.comments.push(newComment);
            }
         }
      } catch (err) {
         console.error("API error posting comment", err);
      }
   } else {
      const newComment = {
         id: tempId,
         content_id: videoId,
         user_id: AppState.user.id,
         user_name: AppState.user.name,
         user_image: AppState.user.image,
         comment: text,
         date: new Date().toISOString().split('T')[0]
      };
      AppState.comments.push(newComment);
   }

   AppState.save();
   commentInput.value = "";
   showToast("Comment posted successfully! +20 XP");
   addXP(20);

   unlockBadge("badge-3");
   renderWatchVideo(videoId);
   renderHome();
}

async function deleteComment(commentId, videoId, isFromDashboard = false) {
   const confirmed = confirm("Are you sure you want to delete this comment?");
   if (!confirmed) return;

   let deleted = false;

   if (AppState.useDatabaseAPI) {
      try {
         const resp = await fetch(`${AppState.API_BASE}/comments.php?comment_id=${commentId}&user_id=${AppState.user.id}`, {
            method: 'DELETE'
         });
         if (resp.ok) {
            const data = await resp.json();
            if (data.status === "success") {
               deleted = true;
            }
         }
      } catch (e) {
         console.error("API error deleting comment", e);
      }
   } else {
      deleted = true;
   }

   if (deleted) {
      const index = AppState.comments.findIndex(c => c.id === commentId);
      if (index > -1) {
         AppState.comments.splice(index, 1);
         AppState.save();
         showToast("Comment deleted successfully!");
      }
   }

   if (isFromDashboard) {
      renderStudentDashboard();
   } else {
      renderWatchVideo(videoId);
   }
   renderHome();
}

// 12. Forms Submissions & Routing Hooks

function loadUpdateProfile() {
   if (!AppState.user) return;
   document.getElementById("update-name").value = AppState.user.name;
   document.getElementById("update-email").value = AppState.user.email;
   document.getElementById("update-avatar").value = AppState.user.image;
}

function handleUpdateProfileSubmit() {
   const name = document.getElementById("update-name").value.trim();
   const email = document.getElementById("update-email").value.trim();
   const image = document.getElementById("update-avatar").value;

   AppState.user.name = name;
   AppState.user.email = email;
   AppState.user.image = image;
   AppState.save();

   showToast("Profile updated successfully!");
   renderHeader();
   renderSidebar();
   window.location.hash = "#profile";
}

function handleLoginSubmit() {
   const email = document.getElementById("login-email").value.trim();
   AppState.user = {
      id: "usr-99",
      name: email.split('@')[0],
      email: email,
      image: "pic-2.jpg",
      role: "student",
      xp: 180,
      level: 2,
      streak: 3,
      lastActiveDate: new Date().toISOString().split('T')[0],
      badges: ["badge-1"]
   };
   AppState.save();
   showToast("Logged in successfully!");
   updateStreak();
   renderHeader();
   renderSidebar();
   window.location.hash = "#home";
}

function handleRegisterSubmit() {
   const name = document.getElementById("reg-name").value.trim();
   const email = document.getElementById("reg-email").value.trim();
   const avatar = document.getElementById("reg-avatar").value;

   AppState.user = {
      id: "usr-" + Date.now(),
      name: name,
      email: email,
      image: avatar,
      role: "student",
      xp: 0,
      level: 1,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      badges: ["badge-1"]
   };
   AppState.save();
   showToast("Account created!");
   renderHeader();
   renderSidebar();
   window.location.hash = "#home";
}

function handleLogout(e) {
   e.preventDefault();
   if (confirm("Log out?")) {
      AppState.user = null;
      AppState.save();
      showToast("Logged out");
      renderHeader();
      renderSidebar();
      window.location.hash = "#login";
   }
}

function handleContactSubmit() {
   const name = document.getElementById("contact-name").value.trim();
   const email = document.getElementById("contact-email").value.trim();
   const number = document.getElementById("contact-number").value.trim();
   const message = document.getElementById("contact-message").value.trim();

   AppState.contacts.push({ name, email, number, message, date: new Date().toISOString() });
   AppState.save();
   showToast("Message submitted! +25 XP");
   addXP(25);
   
   if (window.EducaBackend && window.EducaBackend.submitContactMessage) {
      window.EducaBackend.submitContactMessage({
         name: name,
         email: email,
         phone: number,
         message: message
      }).catch(err => console.warn("Supabase contact sync:", err));
   }

   document.getElementById("contact-name").value = "";
   document.getElementById("contact-email").value = "";
   document.getElementById("contact-number").value = "";
   document.getElementById("contact-message").value = "";
}

// 13. DOM Navigation Router Lifecycle hook
function initRouter() {
   const handleRoute = () => {
      const hash = window.location.hash || "#home";
      const parts = hash.split('?');
      const routeName = parts[0];
      const params = {};

      if (parts[1]) {
         parts[1].split('&').forEach(pair => {
            const [k, v] = pair.split('=');
            params[k] = decodeURIComponent(v);
         });
      }

      // Hide all panels
      document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
      
      // Update sidebar active link classes
      document.querySelectorAll(".side-bar .navbar a").forEach(link => {
         const linkHash = link.getAttribute("href");
         if (linkHash === routeName) {
            link.classList.add("active");
         } else {
            link.classList.remove("active");
         }
      });

      // Cleanup Video.js instance to prevent memory leaks when swapping routes
      cleanupVideoJS();

      // Stop ThreeJS render loop when exiting Labs viewport
      if (routeName !== "#labs" && threeAnimationId) {
         cancelAnimationFrame(threeAnimationId);
         threeAnimationId = null;
      }
      if (routeName !== "#labs" && labAnimId) {
         cancelAnimationFrame(labAnimId);
         labAnimId = null;
      }

      switch (routeName) {
         case "#home":
            document.getElementById("view-home").classList.add("active");
            renderHome();
            break;
         case "#about":
            document.getElementById("view-about").classList.add("active");
            break;
         case "#courses":
            document.getElementById("view-courses").classList.add("active");
            renderCourses();
            break;
         case "#roadmap":
            document.getElementById("view-roadmap").classList.add("active");
            renderRoadmaps();
            break;
         case "#doubts":
            document.getElementById("view-doubts").classList.add("active");
            renderDoubts();
            break;
         case "#collab":
            document.getElementById("view-collab").classList.add("active");
            renderCollab();
            break;
         case "#playlist":
            document.getElementById("view-playlist").classList.add("active");
            renderPlaylist(params.id);
            break;
         case "#watch":
            document.getElementById("view-watch-video").classList.add("active");
            renderWatchVideo(params.video);
            break;
         case "#labs":
            document.getElementById("view-labs").classList.add("active");
            setTimeout(initLabs, 100);
            break;
         case "#leaderboard":
            document.getElementById("view-leaderboard").classList.add("active");
            renderLeaderboard();
            break;
         case "#instructor":
            document.getElementById("view-instructor").classList.add("active");
            setTimeout(renderInstructorDashboard, 100);
            break;
         case "#teachers":
            document.getElementById("view-teachers").classList.add("active");
            renderTeachers();
            break;
         case "#tutor":
            document.getElementById("view-tutor-profile").classList.add("active");
            renderTutorProfile(params.id);
            break;
         case "#profile":
            document.getElementById("view-profile").classList.add("active");
            renderStudentDashboard();
            break;
         case "#update-profile":
            document.getElementById("view-update-profile").classList.add("active");
            loadUpdateProfile();
            break;
         case "#contact":
            document.getElementById("view-contact").classList.add("active");
            break;
         case "#login":
         case "#register":
            document.getElementById("view-login").classList.add("active");
            toggleAuthForms(routeName === "#register");
            break;
         default:
            document.getElementById("view-home").classList.add("active");
            renderHome();
      }

      window.scrollTo(0, 0);
      changeLanguage(localStorage.getItem('educa_lang') || "en");
   };

   window.addEventListener("hashchange", handleRoute);
   handleRoute(); 
}

function initGeneralInteractions() {
   const menuBtn = document.getElementById("menu-btn");
   const sideBar = document.querySelector(".side-bar");
   const closeBtn = document.querySelector(".close-side-bar");

   menuBtn.onclick = () => {
      sideBar.classList.toggle("active");
      document.body.classList.toggle("active");
   };

   closeBtn.onclick = () => {
      sideBar.classList.remove("active");
      document.body.classList.remove("active");
   };

   const userBtn = document.getElementById("user-btn");
   const profileDrop = document.querySelector(".profile-dropdown");

   userBtn.onclick = (e) => {
      e.stopPropagation();
      profileDrop.classList.toggle("active");
   };

   document.addEventListener("click", (e) => {
      if (!profileDrop.contains(e.target) && e.target !== userBtn) {
         profileDrop.classList.remove("active");
      }
      if (sideBar.classList.contains("active") && !sideBar.contains(e.target) && !menuBtn.contains(e.target)) {
         sideBar.classList.remove("active");
         document.body.classList.remove("active");
      }
   });

   const themeBtn = document.getElementById("toggle-btn");
   const savedTheme = localStorage.getItem("educa_theme") || "dark";
   
   if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      themeBtn.className = "fas fa-sun tooltip";
   }

   themeBtn.onclick = () => {
      if (document.documentElement.classList.contains("dark")) {
         document.documentElement.classList.replace("dark", "light");
         themeBtn.className = "fas fa-sun tooltip";
         localStorage.setItem("educa_theme", "light");
         showToast("Switched to light theme");
      } else {
         document.documentElement.classList.replace("light", "dark");
         themeBtn.className = "fas fa-moon tooltip";
         localStorage.setItem("educa_theme", "dark");
         showToast("Switched to dark theme");
      }
   };

   const searchBtn = document.getElementById("search-btn");
   const headerSearch = document.querySelector(".header .flex .search-form");

   if (searchBtn) {
      searchBtn.onclick = () => {
         headerSearch.classList.toggle("active");
      };
   }

   const globalSearch = document.getElementById("global-search");
   globalSearch.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      if (window.location.hash !== "#courses") {
         window.location.hash = "#courses";
      }
      setTimeout(() => {
         document.getElementById("course-filter-search").value = q;
         filterCourses();
      }, 50);
   });

   document.getElementById("login-form").onsubmit = handleLoginSubmit;
   document.getElementById("register-form").onsubmit = handleRegisterSubmit;
   document.getElementById("update-profile-form").onsubmit = handleUpdateProfileSubmit;
   document.getElementById("contact-form").onsubmit = handleContactSubmit;

   document.getElementById("switch-to-register").onclick = () => toggleAuthForms(true);
   document.getElementById("switch-to-login").onclick = () => toggleAuthForms(false);
}

function toggleAuthForms(isRegister) {
   const loginCont = document.getElementById("login-form-container");
   const regCont = document.getElementById("register-form-container");
   if (isRegister) {
      loginCont.classList.remove("active-form");
      regCont.classList.add("active-form");
      window.location.hash = "#register";
   } else {
      regCont.classList.remove("active-form");
      loginCont.classList.add("active-form");
      window.location.hash = "#login";
   }
}

// ==========================================================================
// Future of Education: Skill Roadmap & Study Planner Module
// ==========================================================================

function renderRoadmaps() {
   const trackButtonsContainer = document.getElementById("roadmap-track-buttons");
   const timelineContainer = document.getElementById("roadmap-timeline-container");
   const titleEl = document.getElementById("current-track-title");
   const levelEl = document.getElementById("current-track-level");
   const statCompleted = document.getElementById("rm-stat-completed");
   const statXP = document.getElementById("rm-stat-xp");
   const statProgress = document.getElementById("rm-stat-progress");

   if (!trackButtonsContainer || !timelineContainer) return;

   const activeTrackKey = AppState.currentRoadmapTrack || "web-dev";
   const track = AppState.roadmaps[activeTrackKey] || AppState.roadmaps["web-dev"];

   // 1. Render Track Switcher Buttons
   trackButtonsContainer.innerHTML = Object.values(AppState.roadmaps).map(t => `
      <button class="track-btn ${t.id === track.id ? 'active' : ''}" onclick="switchRoadmapTrack('${t.id}')">
         <i class="${t.id === 'web-dev' ? 'fas fa-code' : t.id === 'ai-ml' ? 'fas fa-brain' : 'fas fa-sitemap'}"></i> ${t.title.split(' ')[0]} ${t.title.split(' ')[1]}
      </button>
   `).join('');

   // 2. Calculate Track Metrics
   const totalMilestones = track.milestones.length;
   const completedMilestones = track.milestones.filter(m => m.completed).length;
   const earnedXP = track.milestones.filter(m => m.completed).reduce((acc, m) => acc + m.xp, 0);
   const progressPct = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

   statCompleted.textContent = `${completedMilestones} / ${totalMilestones}`;
   statXP.textContent = `${earnedXP} XP`;
   statProgress.textContent = `${progressPct}%`;
   titleEl.textContent = track.title;
   levelEl.textContent = track.level;

   // 3. Render Vertical Milestone Timeline
   timelineContainer.innerHTML = track.milestones.map((m, idx) => {
      const isDone = m.completed;
      const isFirst = idx === 0;
      const prevDone = isFirst || track.milestones[idx - 1].completed;
      const isActive = !isDone && prevDone;
      const nodeClass = isDone ? 'completed' : isActive ? 'active-node' : 'locked-node';

      return `
         <div class="roadmap-node ${nodeClass}">
            <div class="rm-node-header">
               <div class="rm-node-title-group">
                  <span class="rm-step-index">Phase ${idx + 1}</span>
                  <h4>${m.title}</h4>
               </div>
               <span class="rm-xp-badge"><i class="fas fa-bolt"></i> +${m.xp} XP</span>
            </div>
            <p class="rm-node-desc">${m.desc}</p>
            <div class="rm-node-tags">
               ${m.tags.map(tag => `<span class="rm-node-tag">#${tag}</span>`).join('')}
            </div>
            <div class="rm-node-footer">
               <span style="font-size: 0.85rem; color: ${isDone ? '#2ed573' : isActive ? '#ffa502' : 'var(--text-muted)'}; font-weight:600;">
                  <i class="${isDone ? 'fas fa-check-circle' : isActive ? 'fas fa-spinner fa-spin' : 'fas fa-lock'}"></i>
                  ${isDone ? 'Milestone Completed' : isActive ? 'Ready to Practice' : 'Prerequisite Required'}
               </span>
               <button class="rm-complete-btn ${isDone ? 'is-done' : ''}" onclick="toggleRoadmapMilestone('${track.id}', '${m.id}')">
                  <i class="${isDone ? 'fas fa-check-double' : 'fas fa-award'}"></i>
                  ${isDone ? 'Completed' : 'Mark Complete & Earn XP'}
               </button>
            </div>
         </div>
      `;
   }).join('');

   // 4. Update Pomodoro & Spaced Repetition Widgets
   renderPomodoro();
   renderSpacedRepetition();
}

function switchRoadmapTrack(trackId) {
   AppState.currentRoadmapTrack = trackId;
   renderRoadmaps();
}

function toggleRoadmapMilestone(trackId, milestoneId) {
   const track = AppState.roadmaps[trackId];
   if (!track) return;
   const milestone = track.milestones.find(m => m.id === milestoneId);
   if (!milestone) return;

   milestone.completed = !milestone.completed;

   if (milestone.completed) {
      addXP(milestone.xp);
      showToast(`🏆 Milestone Complete! You earned +${milestone.xp} XP!`);
   } else {
      showToast("Milestone progress reset.");
   }

   AppState.save();
   renderRoadmaps();
}

// Pomodoro Timer Controller
const PomoController = {
   timerId: null,
   timeLeft: 25 * 60,
   isRunning: false,
   mode: 'work',
   durations: {
      work: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60
   }
};

function renderPomodoro() {
   const timerText = document.getElementById("pomo-timer-text");
   const subText = document.getElementById("pomo-sub-text");
   const startBtn = document.getElementById("pomo-start-btn");
   const modeBadge = document.getElementById("pomo-mode-badge");
   const todayFocus = document.getElementById("today-focus-mins");

   if (!timerText) return;

   const mins = Math.floor(PomoController.timeLeft / 60);
   const secs = PomoController.timeLeft % 60;
   timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

   if (PomoController.mode === 'work') {
      subText.textContent = "Deep Work Block";
      modeBadge.textContent = "Study Session";
      modeBadge.style.color = "var(--secondary-color)";
   } else if (PomoController.mode === 'shortBreak') {
      subText.textContent = "Short Rest (Hydrate)";
      modeBadge.textContent = "Short Break";
      modeBadge.style.color = "#2ed573";
   } else {
      subText.textContent = "Recharge Mind";
      modeBadge.textContent = "Long Break";
      modeBadge.style.color = "#3498db";
   }

   startBtn.innerHTML = PomoController.isRunning ? '<i class="fas fa-pause"></i> Pause Focus' : '<i class="fas fa-play"></i> Start Focus';
   todayFocus.textContent = `${AppState.studyPlanner.focusMinutesToday || 50} mins`;
}

function togglePomodoro() {
   if (PomoController.isRunning) {
      clearInterval(PomoController.timerId);
      PomoController.isRunning = false;
   } else {
      PomoController.isRunning = true;
      PomoController.timerId = setInterval(() => {
         PomoController.timeLeft--;
         if (PomoController.timeLeft <= 0) {
            clearInterval(PomoController.timerId);
            PomoController.isRunning = false;
            
            if (PomoController.mode === 'work') {
               AppState.studyPlanner.focusMinutesToday = (AppState.studyPlanner.focusMinutesToday || 0) + 25;
               AppState.studyPlanner.sessionsCompleted = (AppState.studyPlanner.sessionsCompleted || 0) + 1;
               addXP(20);
               showToast("🎉 Pomodoro Completed! +20 XP awarded. Take a well-deserved break!");
               setPomodoroMode('shortBreak');
            } else {
               showToast("Break finished! Ready to dive back into learning?");
               setPomodoroMode('work');
            }
            AppState.save();
         }
         renderPomodoro();
      }, 1000);
   }
   renderPomodoro();
}

function resetPomodoro() {
   clearInterval(PomoController.timerId);
   PomoController.isRunning = false;
   PomoController.timeLeft = PomoController.durations[PomoController.mode];
   renderPomodoro();
}

function setPomodoroMode(mode) {
   clearInterval(PomoController.timerId);
   PomoController.isRunning = false;
   PomoController.mode = mode;
   PomoController.timeLeft = PomoController.durations[mode];

   document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
   if (event && event.target && event.target.classList.contains("mode-btn")) {
      event.target.classList.add("active");
   }
   renderPomodoro();
}

function renderSpacedRepetition() {
   const container = document.getElementById("spaced-repetition-list");
   if (!container) return;

   const items = AppState.studyPlanner.spacedRepetitions || [];
   container.innerHTML = items.map(item => `
      <div class="rev-item">
         <div class="rev-info">
            <h5 style="${item.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${item.title}</h5>
            <p><i class="fas fa-book-open"></i> ${item.course} • Due ${item.dueDate}</p>
         </div>
         <button class="rev-check-btn ${item.completed ? 'completed' : ''}" onclick="toggleSpacedRepetition('${item.id}')">
            <i class="fas fa-check"></i>
         </button>
      </div>
   `).join('');
}

function toggleSpacedRepetition(repId) {
   const item = AppState.studyPlanner.spacedRepetitions.find(r => r.id === repId);
   if (!item) return;

   item.completed = !item.completed;
   if (item.completed) {
      addXP(15);
      showToast("🧠 Active Recall Checked! Retention verified (+15 XP).");
   }
   AppState.save();
   renderSpacedRepetition();
}


// ==========================================================================
// Future of Education: Peer Doubt-Solving Nexus Module
// ==========================================================================

let doubtExpandedId = null;

function renderDoubts() {
   const tagsContainer = document.getElementById("doubt-tag-filters");
   const feedContainer = document.getElementById("doubts-feed-container");
   const searchInput = document.getElementById("doubt-search-input");

   if (!tagsContainer || !feedContainer) return;

   // 1. Render Tag Pills
   const tags = ["All", "JavaScript", "React", "Python", "Database", "Algorithms", "CSS"];
   const currentTag = AppState.doubtFilterTag || "All";
   tagsContainer.innerHTML = tags.map(t => `
      <button class="tag-pill ${t === currentTag ? 'active' : ''}" onclick="filterDoubtsByTag('${t}')">
         ${t === 'All' ? '<i class="fas fa-layer-group"></i> All Doubts' : `#${t}`}
      </button>
   `).join('');

   // 2. Filter doubts
   const searchTerm = (searchInput ? searchInput.value : "").toLowerCase().trim();
   let filtered = AppState.doubts.filter(d => {
      const matchTag = (currentTag === "All") || (d.tag === currentTag);
      const matchSearch = !searchTerm || d.title.toLowerCase().includes(searchTerm) || d.desc.toLowerCase().includes(searchTerm) || d.tag.toLowerCase().includes(searchTerm);
      return matchTag && matchSearch;
   });

   if (filtered.length === 0) {
      feedContainer.innerHTML = `
         <div class="box" style="text-align:center; padding: 3rem;">
            <i class="fas fa-comments" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h3>No Academic Doubts Found</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Be the first student to ask a question and set a bounty!</p>
            <button class="btn primary-btn" style="margin-top: 1.5rem; display:inline-block;" onclick="openAskDoubtModal()">Ask a Doubt</button>
         </div>
      `;
      return;
   }

   // 3. Render Question Cards
   feedContainer.innerHTML = filtered.map(d => {
      const isExpanded = doubtExpandedId === d.id;
      return `
         <div class="doubt-card" id="doubt-${d.id}">
            <div class="doubt-card-top">
               <div class="doubt-vote-box">
                  <button class="vote-btn ${d.hasVoted ? 'voted' : ''}" onclick="toggleDoubtVote('${d.id}')">
                     <i class="fas fa-chevron-up"></i>
                  </button>
                  <span class="vote-count">${d.votes || 0}</span>
               </div>
               <div class="doubt-main-content">
                  <div class="doubt-author-bar">
                     <div class="doubt-author-info">
                        <img src="images/${d.authorImage || 'pic-1.jpg'}" alt="">
                        <span>${d.authorName || 'Student'}</span>
                        <span class="doubt-time"><i class="fas fa-clock"></i> ${d.date}</span>
                     </div>
                     <span class="doubt-bounty-pill"><i class="fas fa-coins"></i> ${d.bounty} XP Bounty</span>
                  </div>
                  <h3 class="doubt-title">${d.title}</h3>
                  <p class="doubt-body">${d.desc}</p>
                  ${d.code ? `<pre class="doubt-code-block"><code>${escapeHTML(d.code)}</code></pre>` : ''}
               </div>
            </div>

            <div class="doubt-card-footer">
               <div class="doubt-tags-list">
                  <span class="tag-pill" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;">#${d.tag}</span>
                  ${d.solved ? `<span class="doubt-badge-solved"><i class="fas fa-check-circle"></i> Solved & Verified</span>` : ''}
               </div>
               <button class="doubt-reply-toggle-btn" onclick="toggleDoubtAnswers('${d.id}')">
                  <i class="fas fa-comment-dots"></i> ${d.answers ? d.answers.length : 0} Solutions & Discussion
                  <i class="fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}" style="font-size: 0.75rem;"></i>
               </button>
            </div>

            ${isExpanded ? `
               <div class="doubt-answers-thread">
                  <h4 style="font-size: 1.1rem; color:var(--text-main);"><i class="fas fa-graduation-cap"></i> Community Explanations (${d.answers.length})</h4>
                  ${d.answers.length === 0 ? `<p style="color:var(--text-muted); font-size: 0.9rem;">No solutions posted yet. Share your explanation below to earn the +${d.bounty} XP bounty!</p>` : ''}
                  
                  ${d.answers.map(ans => `
                     <div class="answer-item ${ans.accepted ? 'accepted-answer' : ''}">
                        <div class="answer-header">
                           <div class="answer-user">
                              <img src="images/${ans.userImage}" alt="">
                              <strong>${ans.userName}</strong>
                              <span style="font-size: 0.78rem; color:var(--text-muted);">${ans.date}</span>
                           </div>
                           ${ans.accepted ? `
                              <span class="accepted-label"><i class="fas fa-award"></i> Accepted Solution (+${d.bounty} XP)</span>
                           ` : `
                              <button class="accept-solution-btn" onclick="acceptDoubtAnswer('${d.id}', '${ans.id}')">
                                 <i class="fas fa-check"></i> Accept Solution
                              </button>
                           `}
                        </div>
                        <div class="answer-body">${ans.body}</div>
                     </div>
                  `).join('')}

                  <form class="post-answer-box" onsubmit="postDoubtAnswer('${d.id}', event)">
                     <textarea id="reply-text-${d.id}" rows="3" placeholder="Write a clear, helpful explanation or code solution..." required></textarea>
                     <div style="display:flex; justify-content: flex-end;">
                        <button type="submit" class="btn primary-btn"><i class="fas fa-paper-plane"></i> Submit Answer (+15 XP)</button>
                     </div>
                  </form>
               </div>
            ` : ''}
         </div>
      `;
   }).join('');
}

function handleDoubtSearch(val) {
   renderDoubts();
}

function filterDoubtsByTag(tag) {
   AppState.doubtFilterTag = tag;
   renderDoubts();
}

function toggleDoubtVote(doubtId) {
   const doubt = AppState.doubts.find(d => d.id === doubtId);
   if (!doubt) return;

   doubt.hasVoted = !doubt.hasVoted;
   doubt.votes = (doubt.votes || 0) + (doubt.hasVoted ? 1 : -1);
   AppState.save();
   renderDoubts();

   if (window.EducaBackend && window.EducaBackend.upvoteDoubt) {
      window.EducaBackend.upvoteDoubt(doubtId).catch(err => console.warn("Supabase upvote sync:", err));
   }
}

function toggleDoubtAnswers(doubtId) {
   doubtExpandedId = doubtExpandedId === doubtId ? null : doubtId;
   renderDoubts();
}

function postDoubtAnswer(doubtId, event) {
   event.preventDefault();
   const input = document.getElementById(`reply-text-${doubtId}`);
   if (!input || !input.value.trim()) return;

   const doubt = AppState.doubts.find(d => d.id === doubtId);
   if (!doubt) return;

   if (!doubt.answers) doubt.answers = [];
   const ansText = input.value.trim();
   const newAnswer = {
      id: "ans-" + Date.now(),
      userName: AppState.user ? AppState.user.name : "Peer Learner",
      userImage: AppState.user ? AppState.user.image : "pic-2.jpg",
      date: "Just now",
      body: ansText,
      accepted: false
   };

   doubt.answers.push(newAnswer);
   addXP(15);
   showToast("💡 Answer posted! Thank you for contributing to peer learning (+15 XP).");
   AppState.save();
   renderDoubts();

   if (window.EducaBackend && window.EducaBackend.postAnswer) {
      window.EducaBackend.postAnswer(doubtId, ansText, {
         id: AppState.user ? AppState.user.id : "usr-99",
         name: AppState.user ? AppState.user.name : "Peer Learner",
         avatar: AppState.user ? `images/${AppState.user.image}` : "images/pic-2.jpg"
      }).catch(err => console.warn("Supabase postAnswer sync:", err));
   }
}

function acceptDoubtAnswer(doubtId, answerId) {
   const doubt = AppState.doubts.find(d => d.id === doubtId);
   if (!doubt) return;

   doubt.answers.forEach(a => a.accepted = false);
   const ans = doubt.answers.find(a => a.id === answerId);
   if (ans) {
      ans.accepted = true;
      doubt.solved = true;
      addXP(doubt.bounty || 50);
      showToast(`🎉 Accepted solution marked! Winner awarded +${doubt.bounty || 50} XP bounty.`);
      AppState.save();
      renderDoubts();

      if (window.EducaBackend && window.EducaBackend.acceptAnswer) {
         window.EducaBackend.acceptAnswer(doubtId, answerId).catch(err => console.warn("Supabase acceptAnswer sync:", err));
      }
   }
}

function openAskDoubtModal() {
   const modal = document.getElementById("ask-doubt-modal");
   if (modal) modal.classList.add("active");
}

function closeAskDoubtModal() {
   const modal = document.getElementById("ask-doubt-modal");
   if (modal) modal.classList.remove("active");
}

function handleAskDoubtSubmit(event) {
   event.preventDefault();
   const title = document.getElementById("doubt-title").value.trim();
   const tag = document.getElementById("doubt-tag").value;
   const bounty = parseInt(document.getElementById("doubt-bounty").value, 10) || 50;
   const desc = document.getElementById("doubt-desc").value.trim();
   const code = document.getElementById("doubt-code").value.trim();

   const newDoubt = {
      id: "doubt-" + Date.now(),
      title,
      tag,
      bounty,
      desc,
      code,
      authorName: AppState.user ? AppState.user.name : "Student",
      authorImage: AppState.user ? AppState.user.image : "pic-2.jpg",
      date: "Just now",
      votes: 1,
      hasVoted: true,
      solved: false,
      answers: []
   };

   AppState.doubts.unshift(newDoubt);
   AppState.save();
   closeAskDoubtModal();
   showToast("🚀 Doubt posted to Nexus! Our peer community and AI assistant have been notified.");
   renderDoubts();

   if (window.EducaBackend && window.EducaBackend.postDoubt) {
      window.EducaBackend.postDoubt({
         author_id: AppState.user ? AppState.user.id : 'usr-99',
         author_name: AppState.user ? AppState.user.name : 'Student',
         author_avatar: AppState.user ? `images/${AppState.user.image}` : 'images/pic-2.jpg',
         title: title,
         description: desc + (code ? `\n\n\`\`\`\n${code}\n\`\`\`` : ''),
         tags: [tag],
         bounty_xp: bounty
      }).catch(err => console.warn("Supabase postDoubt sync:", err));
   }
}

function triggerAIDoubtHelper() {
   showToast("✨ AI Co-Pilot: Analyzing common questions and matching lecture transcripts...", false);
   setTimeout(() => {
      alert("🤖 AI Instant Explainer Suggestion:\n\nFor JavaScript Promises and Async/Await questions, check out Course Lecture 3: 'Mastering the JavaScript Event Loop and Microtask Queue'.\n\nKey Tip: Remember that asynchronous functions always return a Promise wrapping the resolved value!");
   }, 600);
}

function escapeHTML(str) {
   return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
   );
}


// ==========================================================================
// Future of Education: Project Collaboration & Academic Resource Vault
// ==========================================================================

let activeCollabSubTab = "projects";

function switchCollabSubTab(tab) {
   activeCollabSubTab = tab;
   const tabProjects = document.getElementById("collab-projects-view");
   const tabResources = document.getElementById("collab-resources-view");
   const btnProjects = document.getElementById("tab-btn-projects");
   const btnResources = document.getElementById("tab-btn-resources");

   if (tab === "projects") {
      tabProjects.classList.add("active");
      tabResources.classList.remove("active");
      btnProjects.classList.add("active");
      btnResources.classList.remove("active");
   } else {
      tabProjects.classList.remove("active");
      tabResources.classList.add("active");
      btnProjects.classList.remove("active");
      btnResources.classList.add("active");
   }
   renderCollab();
}

function renderCollab() {
   renderCollabProjects();
   renderCollabResources();
}

function renderCollabProjects() {
   const filterContainer = document.getElementById("collab-role-filters");
   const gridContainer = document.getElementById("collab-projects-container");
   if (!filterContainer || !gridContainer) return;

   // 1. Role Filter Pills
   const roles = ["All", "Frontend Dev", "Backend Dev", "UI/UX Designer", "ML Engineer", "PWA Specialist"];
   const currentFilter = AppState.collabRoleFilter || "All";
   filterContainer.innerHTML = roles.map(r => `
      <button class="tag-pill ${r === currentFilter ? 'active' : ''}" onclick="filterCollabProjectsByRole('${r}')">
         ${r}
      </button>
   `).join('');

   // 2. Filter Projects
   const projects = AppState.collabProjects.filter(p => {
      if (currentFilter === "All") return true;
      return p.roles.some(role => role.toLowerCase().includes(currentFilter.toLowerCase()));
   });

   // 3. Render Cards
   gridContainer.innerHTML = projects.map(proj => `
      <div class="project-card">
         <div>
            <div class="project-card-header">
               <span class="project-category-badge"><i class="fas fa-folder"></i> ${proj.category}</span>
               <span class="project-status-tag"><i class="fas fa-users"></i> ${proj.currentTeamSize}/${proj.maxTeamSize} Members</span>
            </div>
            <h3>${proj.title}</h3>
            <p class="project-pitch">${proj.pitch}</p>
            
            <div class="project-tech-stack">
               ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
            </div>

            <div class="project-roles-needed">
               <div class="roles-title"><i class="fas fa-bullhorn"></i> Looking to Recruit:</div>
               <div class="roles-list">
                  ${proj.roles.map(r => `<span class="role-pill">${r}</span>`).join('')}
               </div>
            </div>
         </div>

         <div class="project-card-footer">
            <div class="team-avatars-row">
               ${proj.members.map(img => `<img src="images/${img}" alt="">`).join('')}
            </div>
            <button class="join-project-btn ${proj.isApplied ? 'applied' : ''}" onclick="joinCollabProject('${proj.id}')">
               <i class="${proj.isApplied ? 'fas fa-check' : 'fas fa-handshake'}"></i>
               ${proj.isApplied ? 'Applied ✓' : 'Join Team'}
            </button>
         </div>
      </div>
   `).join('');
}

function filterCollabProjectsByRole(role) {
   AppState.collabRoleFilter = role;
   renderCollabProjects();
}

function joinCollabProject(projId) {
   const proj = AppState.collabProjects.find(p => p.id === projId);
   if (!proj) return;

   if (proj.isApplied) {
      showToast("You have already submitted an application to this project!");
      return;
   }

   proj.isApplied = true;
   proj.currentTeamSize = Math.min(proj.maxTeamSize, proj.currentTeamSize + 1);
   if (AppState.user && !proj.members.includes(AppState.user.image)) {
      proj.members.push(AppState.user.image);
   }
   addXP(25);
   showToast(`🎉 Application sent to "${proj.title}"! (+25 XP for project collaboration)`);
   AppState.save();
   renderCollabProjects();

   if (window.EducaBackend && window.EducaBackend.applyToProject) {
      window.EducaBackend.applyToProject(projId, {
         id: AppState.user ? AppState.user.id : "usr-99",
         name: AppState.user ? AppState.user.name : "Student",
         avatar: AppState.user ? `images/${AppState.user.image}` : "images/pic-2.jpg"
      }, "Collaborator").catch(err => console.warn("Supabase applyToProject sync:", err));
   }
}

function openCreateProjectModal() {
   const modal = document.getElementById("pitch-project-modal");
   if (modal) modal.classList.add("active");
}

function closeCreateProjectModal() {
   const modal = document.getElementById("pitch-project-modal");
   if (modal) modal.classList.remove("active");
}

function handlePitchProjectSubmit(event) {
   event.preventDefault();
   const title = document.getElementById("proj-title").value.trim();
   const category = document.getElementById("proj-category").value;
   const roles = document.getElementById("proj-roles").value.split(',').map(s => s.trim());
   const pitch = document.getElementById("proj-desc").value.trim();
   const tech = document.getElementById("proj-tech").value.split(',').map(s => s.trim());
   const techClean = tech.length > 0 && tech[0] !== "" ? tech : ["React", "JavaScript"];

   const newProj = {
      id: "proj-" + Date.now(),
      title,
      category,
      roles,
      pitch,
      tech: techClean,
      members: [AppState.user ? AppState.user.image : "pic-2.jpg"],
      currentTeamSize: 1,
      maxTeamSize: 4,
      status: "Recruiting",
      isApplied: true
   };

   AppState.collabProjects.unshift(newProj);
   addXP(50);
   AppState.save();
   closeCreateProjectModal();
   showToast("🚀 Project pitch published! You earned +50 XP for launching a collaboration team.");
   renderCollabProjects();

   if (window.EducaBackend && window.EducaBackend.createProject) {
      window.EducaBackend.createProject({
         title: title,
         pitch: pitch,
         category: category,
         tech_stack: techClean,
         open_roles: roles,
         max_team_size: 4
      }).catch(err => console.warn("Supabase createProject sync:", err));
   }
}

function renderCollabResources() {
   const filterContainer = document.getElementById("collab-resource-filters");
   const gridContainer = document.getElementById("collab-resources-container");
   const searchInput = document.getElementById("resource-search-input");
   if (!filterContainer || !gridContainer) return;

   // 1. Resource Category Pills
   const categories = ["All", "Cheatsheet", "Study Notes", "Starter Kit", "Exam Prep"];
   const currentCat = AppState.resourceFilterCategory || "All";
   filterContainer.innerHTML = categories.map(c => `
      <button class="tag-pill ${c === currentCat ? 'active' : ''}" onclick="filterResourcesByCategory('${c}')">
         ${c}
      </button>
   `).join('');

   // 2. Filter Resources
   const searchTerm = (searchInput ? searchInput.value : "").toLowerCase().trim();
   const resources = AppState.resources.filter(res => {
      const matchCat = (currentCat === "All") || (res.category === currentCat);
      const matchSearch = !searchTerm || res.title.toLowerCase().includes(searchTerm) || res.desc.toLowerCase().includes(searchTerm) || res.topic.toLowerCase().includes(searchTerm);
      return matchCat && matchSearch;
   });

   // 3. Render Cards
   gridContainer.innerHTML = resources.map(res => `
      <div class="resource-card">
         <div>
            <div class="resource-card-top">
               <div class="resource-icon-box">
                  <i class="${res.icon || 'fas fa-file'}"></i>
               </div>
               <div class="resource-card-info">
                  <h4>${res.title}</h4>
                  <span class="res-category-tag">${res.category} • ${res.topic}</span>
               </div>
            </div>
            <p class="resource-desc">${res.desc}</p>
         </div>

         <div class="resource-card-footer">
            <div class="resource-stats">
               <button class="res-upvote-btn ${res.hasUpvoted ? 'upvoted' : ''}" onclick="toggleResourceUpvote('${res.id}')">
                  <i class="fas fa-heart"></i> ${res.upvotes || 0}
               </button>
               <span><i class="fas fa-download"></i> ${res.downloads || 0}</span>
            </div>
            <button class="download-res-btn" onclick="downloadResource('${res.id}')">
               <i class="fas fa-file-arrow-down"></i> Download
            </button>
         </div>
      </div>
   `).join('');
}

function handleResourceSearch(val) {
   renderCollabResources();
}

function filterResourcesByCategory(cat) {
   AppState.resourceFilterCategory = cat;
   renderCollabResources();
}

function toggleResourceUpvote(resId) {
   const res = AppState.resources.find(r => r.id === resId);
   if (!res) return;

   res.hasUpvoted = !res.hasUpvoted;
   res.upvotes = (res.upvotes || 0) + (res.hasUpvoted ? 1 : -1);
   AppState.save();
   renderCollabResources();
}

function downloadResource(resId) {
   const res = AppState.resources.find(r => r.id === resId);
   if (!res) return;

   res.downloads = (res.downloads || 0) + 1;
   addXP(5);
   showToast(`📥 Downloading "${res.title}"... Verified academic material (+5 XP)`);
   AppState.save();
   renderCollabResources();
}

function openShareResourceModal() {
   const modal = document.getElementById("share-resource-modal");
   if (modal) modal.classList.add("active");
}

function closeShareResourceModal() {
   const modal = document.getElementById("share-resource-modal");
   if (modal) modal.classList.remove("active");
}

function handleShareResourceSubmit(event) {
   event.preventDefault();
   const title = document.getElementById("res-title").value.trim();
   const type = document.getElementById("res-type").value;
   const topic = document.getElementById("res-topic").value.trim();
   const desc = document.getElementById("res-desc").value.trim();

   const iconMap = {
      "Cheatsheet": "fas fa-file-code",
      "Study Notes": "fas fa-file-pdf",
      "Starter Kit": "fas fa-laptop-code",
      "Exam Prep": "fas fa-graduation-cap"
   };

   const newResource = {
      id: "res-" + Date.now(),
      title,
      category: type,
      topic,
      icon: iconMap[type] || "fas fa-file",
      desc,
      author: AppState.user ? AppState.user.name : "Peer Learner",
      downloads: 1,
      upvotes: 1,
      hasUpvoted: true
   };

   AppState.resources.unshift(newResource);
   addXP(30);
   AppState.save();
   closeShareResourceModal();
   showToast("📚 Resource uploaded to Academic Vault! You earned +30 XP for sharing resources.");
   renderCollabResources();
}

// Toast notification trigger
function showToast(message, isError = false) {
   const toast = document.getElementById("toast");
   if (!toast) return;
   toast.textContent = message;
   if (isError) {
      toast.classList.add("error");
   } else {
      toast.classList.remove("error");
   }
   toast.classList.add("show");
   setTimeout(() => {
      toast.classList.remove("show");
   }, 3000);
}

// Global Image Error Handler to prevent broken image icons
document.addEventListener("error", function(e) {
   if (e.target.tagName === "IMG") {
      e.target.style.opacity = "0"; 
   }
}, true);

// Main Setup Trigger
document.addEventListener("DOMContentLoaded", async () => {
   // 1. Dynamic Check database connectivity
   await initDatabaseConnection();
   
   // 2. Initialize router
   initRouter();
   initGeneralInteractions();
   
   // 3. Setup layouts
   renderHeader();
   renderSidebar();

   // 4. Set translations
   const savedLang = localStorage.getItem('educa_lang') || "en";
   changeLanguage(savedLang);

   // 5. Update streak check
   updateStreak();
});
