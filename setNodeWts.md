If you're building a meta-server that serves multiple front-end applications from different endpoints, you can use Express.js to serve static files for each front-end. This way, each application can be accessed via different routes. Here’s how you can set it up:

### Step 1: Project Structure

Your project structure might look something like this:

```
my-ts-server/
├── dist/
├── node_modules/
├── public/
│   ├── app1/
│   │   └── index.html
│   ├── app2/
│   │   └── index.html
│   └── app3/
│       └── index.html
├── src/
│   └── server.ts
├── tsconfig.json
├── nodemon.json
├── package.json
└── README.md
```

### Step 2: Update Server Code to Serve Static Files

Modify your `src/server.ts` to serve static files from the `public` directory:

```typescript
import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files for app1
app.use("/app1", express.static(path.join(__dirname, "../public/app1")));

// Serve static files for app2
app.use("/app2", express.static(path.join(__dirname, "../public/app2")));

// Serve static files for app3
app.use("/app3", express.static(path.join(__dirname, "../public/app3")));

// Default route to catch non-matched endpoints
app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 3: Build and Run the Server

1. **Compile TypeScript to JavaScript:**

   ```bash
   npm run build
   ```

2. **Run the server with `nodemon` for development:**

   ```bash
   npm run dev
   ```

### Step 4: Accessing Your Applications

With this setup, you can access your front-end applications via different endpoints:

- `http://localhost:3000/app1` will serve the static files from `public/app1`.
- `http://localhost:3000/app2` will serve the static files from `public/app2`.
- `http://localhost:3000/app3` will serve the static files from `public/app3`.

### Summary

1. **Create a `public` directory** to store your front-end applications.
2. **Modify `server.ts`** to serve static files from different endpoints.
3. **Compile and run the server**.

### Example `README.md`

```markdown
# Meta Server for Multiple Sites and Apps

This meta-server serves multiple front-end applications from different endpoints using Node.js, TypeScript, and Express.js.

## Project Structure
```

my-ts-server/
├── dist/
├── node_modules/
├── public/
│ ├── app1/
│ │ └── index.html
│ ├── app2/
│ │ └── index.html
│ └── app3/
│ └── index.html
├── src/
│ └── server.ts
├── tsconfig.json
├── nodemon.json
├── package.json
└── README.md

````

## Installation

1. **Create a project directory and navigate to it:**

   ```bash
   mkdir my-ts-server
   cd my-ts-server
````

2. **Initialize a new Node.js project:**

   ```bash
   npm init -y
   ```

3. **Install required packages:**

   ```bash
   npm install typescript @types/node express @types/express nodemon ts-node --save-dev
   ```

## TypeScript Configuration

1. **Create a `tsconfig.json` file:**

   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "ESNext",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src/**/*"],
     "exclude": ["public", "node_modules"]
   }
   ```

## Nodemon Configuration

1. **Create a `nodemon.json` file:**

   ```json
   {
     "watch": ["src"],
     "ext": "ts",
     "ignore": ["src/**/*.test.ts"],
     "exec": "ts-node ./src/server.ts"
   }
   ```

## Server Code

1. **Create a `src` directory and a `server.ts` file:**

   ```typescript
   import express, { Request, Response } from "express";
   import path from "path";

   const app = express();
   const PORT = 3000;

   // Serve static files for app1
   app.use("/app1", express.static(path.join(__dirname, "../public/app1")));

   // Serve static files for app2
   app.use("/app2", express.static(path.join(__dirname, "../public/app2")));

   // Serve static files for app3
   app.use("/app3", express.static(path.join(__dirname, "../public/app3")));

   // Default route to catch non-matched endpoints
   app.get("*", (req: Request, res: Response) => {
     res.status(404).send("Page Not Found");
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

## Running the Server

1. **Compile TypeScript to JavaScript:**

   ```bash
   npm run build
   ```

2. **Run the server with `nodemon` for development:**

   ```bash
   npm run dev
   ```

## Accessing Applications

- `http://localhost:3000/app1` serves static files from `public/app1`.
- `http://localhost:3000/app2` serves static files from `public/app2`.
- `http://localhost:3000/app3` serves static files from `public/app3`.

This setup allows you to serve multiple front-end applications from different endpoints on the same server.

```

This README provides a comprehensive guide to setting up a meta-server that serves multiple static front-end applications from different endpoints.
```
