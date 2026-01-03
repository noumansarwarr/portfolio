export const projects = [
  {
    id: 1,
    title: "Multi-Tenant SaaS Subscription Platform",
    problem: "Client needed a white-label SaaS platform where businesses could sign up, manage their own customers, and handle recurring billing. Previous system was a monolith that couldn't scale past 500 concurrent users.",
    stack: ["Laravel", "MySQL", "React", "Stripe", "Redis", "AWS"],
    myRole: [
      "Designed the multi-tenant database architecture with tenant isolation",
      "Built the entire subscription billing system using Stripe Cashier",
      "Implemented webhook handlers for failed payments, upgrades, and cancellations",
      "Set up queue workers for async invoice generation and email notifications",
      "Led a team of 3 developers through the migration"
    ],
    challenges: [
      "Migrating 12,000+ active subscriptions without downtime",
      "Handling Stripe webhook race conditions during high-traffic periods",
      "Optimizing queries that were timing out on tenant reports"
    ],
    result: "Platform now handles 3,000+ concurrent users. Subscription churn reduced by 15% due to better dunning flows. Zero payment-related support tickets in 6 months.",
    featured: true
  },
  {
    id: 2,
    title: "High-Traffic REST API for Mobile App",
    problem: "Fintech startup had a mobile app with 50,000+ daily active users. Their API was returning 500 errors during peak hours and response times exceeded 3 seconds.",
    stack: ["Laravel", "MySQL", "Redis", "Nginx", "React Native", "PM2"],
    myRole: [
      "Audited existing codebase and identified N+1 queries and missing indexes",
      "Implemented Redis caching layer for frequently accessed data",
      "Set up database read replicas and query routing",
      "Built rate limiting and request throttling",
      "Configured Nginx for optimal PHP-FPM pooling"
    ],
    challenges: [
      "Couldn't take the API offline - all fixes had to be deployed incrementally",
      "Legacy code had no tests, so refactoring was high-risk",
      "Database was 80GB with no archival strategy"
    ],
    result: "API response time dropped from 3.2s to 180ms average. 500 errors reduced by 99%. Server costs reduced by 40% after optimization.",
    featured: true
  },
  {
    id: 3,
    title: "Admin Panel for E-commerce Operations",
    problem: "E-commerce company was managing orders, inventory, and customer support through spreadsheets and 5 different tools. Operations team was losing 3+ hours daily on manual data entry.",
    stack: ["Laravel", "Vue.js", "MySQL", "Laravel Passport", "AWS S3"],
    myRole: [
      "Built complete admin panel from scratch with role-based access control",
      "Integrated with 3 third-party shipping APIs",
      "Implemented real-time inventory sync with their warehouse system",
      "Created automated reporting with scheduled exports",
      "Set up OAuth2 authentication for API consumers"
    ],
    challenges: [
      "Each shipping provider had different API formats and error handling",
      "Inventory sync needed to handle conflicts when warehouse and web orders overlapped",
      "Users had varying technical skills - UI needed to be foolproof"
    ],
    result: "Operations team saved 20+ hours per week. Order processing time reduced from 15 minutes to 2 minutes. Zero inventory discrepancies in first quarter.",
    featured: true
  },
  {
    id: 4,
    title: "Payment Gateway Integration Hub",
    problem: "Client operated in 4 countries with different payment requirements. They were maintaining separate codebases for each region's payment flow.",
    stack: ["Laravel", "Stripe", "MySQL", "React", "Webhooks"],
    myRole: [
      "Designed unified payment abstraction layer",
      "Implemented Stripe Connect for marketplace payouts",
      "Built comprehensive webhook handling with retry logic",
      "Created payment reconciliation system for accounting",
      "Handled PCI compliance requirements"
    ],
    challenges: [
      "Different tax rules and invoice formats per country",
      "Currency conversion timing affected profit margins",
      "Stripe API versioning caused breaking changes mid-project"
    ],
    result: "Single codebase now handles all 4 regions. Payment failures reduced by 60%. Finance team can reconcile accounts in minutes instead of days.",
    featured: false
  },
  {
    id: 5,
    title: "Real-Time Notification System",
    problem: "Social platform needed to send push notifications, emails, and in-app alerts based on user activity. Existing system was synchronous and blocking the main application.",
    stack: ["Laravel", "Redis", "MySQL", "Firebase", "Queue Workers"],
    myRole: [
      "Architected event-driven notification system",
      "Implemented Laravel queues with multiple priority levels",
      "Built notification preference system per user",
      "Set up dead letter queues for failed notifications",
      "Created monitoring dashboard for queue health"
    ],
    challenges: [
      "Some notifications were time-sensitive (2-second delivery requirement)",
      "Users were getting duplicate notifications from race conditions",
      "Firebase had rate limits that caused batch failures"
    ],
    result: "Notifications now deliver in under 500ms. Duplicate rate dropped to 0.01%. System handles 100,000+ notifications daily without manual intervention.",
    featured: false
  }
];
