┌───────────────┐
│     USERS     │
├───────────────┤
│ id (PK)       │
│ name          │
│ email         │
│ phone         │
│ password_hash │
│ role          │
│ created_at    │
│ updated_at    │
└─────┬─────────┘
      │
      │
┌─────▼─────────┐
│ BARBERSHOPS   │
├───────────────┤
│ id (PK)       │
│ user_id (FK)  │
│ name          │
│ address       │
│ city          │
│ state         │
│ zip_code      │
│ is_active     │
│ created_at    │
│ updated_at    │
└─────┬─────────┬────────────────────────────┐
      │         │                            │
      │         │                            │
┌─────▼───┐     ┌────▼──────┐              ┌────▼────────────┐
│SERVICES│      │SUBSCRIPTIONS│            │      SLOTS      │
├────────┤      ├────────────┤             ├──────────────────┤
│id (PK) │      │ id (PK)    │             │ id (PK)          │
│barbershop_id│ │ barbershop │             │ barbershop_id    │
│shop_id │      │ plan_name  │             │ service_id       │
│name    │      │ price      │             │ start_time       │
│desc    │      │ start/end  │             │ end_time         │
│price   │      │ status     │             │ is_booked        │
│duration│      |            │             └────┬──────────────┘
└────────┘      └────────────┘                  │
                                                │
                                                ▼
                                    ┌──────────────┐
                                    │   BOOKINGS   │
                                    ├──────────────┤
                                    │ id (PK)      │
                                    │ customer_id  │
                                    │ slot_id (FK) │
                                    │ status       │
                                    │ booked_at    │
                                    │ notes        │
                                    └────┬─────────┘
                                         │
                                         ▼
                                ┌─────────────────┐
                                │    PAYMENTS     │
                                ├─────────────────┤
                                │ id (PK)         │
                                │ booking_id (FK) │
                                │ amount          │
                                │ status          │
                                │ paid_at         │
                                │ method          │
                                └─────────────────┘
