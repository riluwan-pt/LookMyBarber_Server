# 🛠️ Prisma Schema Change Workflow

This document outlines the step-by-step process to follow **when someone updates the Prisma schema** (`schema.prisma`) in a project.

---

## ✅ 1. Pull Latest Code

Before doing anything, make sure you have the latest changes.

```bash
git pull


2. Review Schema Changes
-> Open and inspect prisma/schema.prisma to understand what has changed:

  New models?

  New fields?

  Changed types or relations?


3. Run Migration

-> Create a new migration file to apply changes to your database:

    npx prisma migrate dev --name <migration_name>

Use a descriptive migration name like:

    npx prisma migrate dev --name add_user_model

This command:

-> Applies the schema changes to your local database

-> Creates a new migration file in prisma/migrations

4. Regenerates the Prisma client

      npx prisma generate


5. Run your server

    npm run dev