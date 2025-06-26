## Folder structure

barbershop-backend/
├── src/
│   ├── modules/                   # Domain-based modules
│   │   ├── auth/                  # Login, register, JWT, roles
│   │   ├── user/                  # Normal user APIs
│   │   ├── barber/                # Barber APIs
│   │   ├── admin/                 # Admin-only APIs
│   │   ├── booking/               # Appointment management
│   │   └── payment/               # Optional: payment integration
│   ├── middlewares/              # Auth, role, error handling
│   ├── config/                   # Env, DB connection, server setup
│   ├── utils/                    # Logger, email sender, helpers
│   └── app.ts                    # Main app entry
├── prisma/                       # Prisma schema + migrations
├── tests/                        # Unit/integration tests
├── docs/                         # API specs, diagrams
├── scripts/                      # Seeders or admin scripts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── docker-compose.yml            # If using Docker (optional)

## detail example

── user/                   
│   ├── user.controller.js
│   ├── user.service.js
│   ├── user.model.js
│   ├── user.routes.js
│   └── user.validator.js



### database url struture --"postgresql://dbUsername:dbUserPassword@localhost:5432/DBName?schema=public"




