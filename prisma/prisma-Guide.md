### ➕ Adding New Prisma Models

1. Add your new model file in `prisma/schema/`
2. Run `npm run prisma:merge`  Combines all schemas into a single schema.prisma
3. Run `npm run prisma:migrate your-change-name` Applies DB change and generates Prisma Client
4. Push your changes to Git
