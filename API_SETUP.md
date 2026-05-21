# PostgreSQL Database & CRUD APIs Setup Guide

## Installation & Setup

### 1. Environment Variables

Create a `.env.local` file in the project root with your PostgreSQL connection details:

```
DATABASE_URL="postgresql://username:password@localhost:5432/gocart"
DIRECT_URL="postgresql://username:password@localhost:5432/gocart"
```

Replace:

- `username` - your PostgreSQL user
- `password` - your PostgreSQL password
- `localhost:5432` - your PostgreSQL host and port
- `gocart` - your database name

### 2. Database Migration

Initialize and run migrations with Prisma:

```bash
# Generate Prisma client
npm run prisma generate

# Create database and run migrations
npm run prisma migrate dev --name init

# (Optional) Seed database with initial data
npm run prisma db seed
```

### 3. Start Development Server

```bash
npm run dev
```

## API Endpoints

### Trees

#### Get All Trees

```
GET /api/trees
```

Returns all trees with their related images and categories.

#### Get Single Tree

```
GET /api/trees/[id]
```

Returns a specific tree by ID.

#### Create Tree

```
POST /api/trees
Content-Type: application/json

{
  "name": "Tree Name",
  "description": "Tree description",
  "categoryId": "category-uuid"
}
```

#### Update Tree

```
PUT /api/trees/[id]
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated description",
  "categoryId": "category-uuid"
}
```

#### Delete Tree

```
DELETE /api/trees/[id]
```

---

### Categories

#### Get All Categories

```
GET /api/categories
```

Returns all categories with their trees and image.

#### Get Single Category

```
GET /api/categories/[id]
```

Returns a specific category by ID.

#### Create Category

```
POST /api/categories
Content-Type: application/json

{
  "name": "Category Name",
  "description": "Category description",
  "imageId": "image-uuid" (optional)
}
```

#### Update Category

```
PUT /api/categories/[id]
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated description",
  "imageId": "image-uuid"
}
```

#### Delete Category

```
DELETE /api/categories/[id]
```

---

### Images

#### Get All Images

```
GET /api/images
```

Returns all images with their related trees.

#### Get Single Image

```
GET /api/images/[id]
```

Returns a specific image by ID.

#### Create Image

```
POST /api/images
Content-Type: application/json

{
  "link": "https://example.com/image.jpg",
  "treeId": "tree-uuid" (optional)
}
```

#### Update Image

```
PUT /api/images/[id]
Content-Type: application/json

{
  "link": "https://example.com/new-image.jpg",
  "treeId": "tree-uuid"
}
```

#### Delete Image

```
DELETE /api/images/[id]
```

---

## Database Schema

### Tree

- `id` (UUID, PK)
- `name` (String)
- `description` (String)
- `categoryId` (UUID, FK)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Category

- `id` (UUID, PK)
- `name` (String)
- `description` (String)
- `imageId` (UUID, FK, optional)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Image

- `id` (UUID, PK)
- `treeId` (UUID, FK, optional)
- `link` (String)
- `createdAt` (DateTime)

---

## Relationships

- **Tree → Category**: Many-to-One (Each tree belongs to one category)
- **Category → Image**: One-to-One (Each category has one image)
- **Tree → Image**: One-to-Many (Each tree can have multiple images)

---

## Example Usage (cURL)

### Create a Category

```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Outdoor Plants",
    "description": "Plants for outdoor gardening"
  }'
```

### Create a Tree

```bash
curl -X POST http://localhost:3000/api/trees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Oak Tree",
    "description": "A large oak tree",
    "categoryId": "category-id-here"
  }'
```

### Create an Image

```bash
curl -X POST http://localhost:3000/api/images \
  -H "Content-Type: application/json" \
  -d '{
    "link": "https://example.com/oak-tree.jpg",
    "treeId": "tree-id-here"
  }'
```

### Get All Trees

```bash
curl http://localhost:3000/api/trees
```
