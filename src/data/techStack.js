export const techStack = {
  backend: {
    title: "Backend",
    description: "Where I spend most of my time. Building APIs, handling business logic, and making sure things don't break at scale.",
    items: [
      {
        name: "PHP / Laravel",
        usage: "Primary framework for 90% of projects. Used for REST APIs, admin panels, queue workers, and scheduled tasks. I know the framework internals well enough to debug issues others can't."
      },
      {
        name: "Laravel Passport",
        usage: "OAuth2 implementation for API authentication. Used when clients need third-party integrations or mobile app authentication with token refresh flows."
      },
      {
        name: "Queue Workers",
        usage: "For anything that shouldn't block the request - emails, notifications, report generation, webhook processing. I configure these with proper retry logic and dead letter handling."
      }
    ]
  },
  frontend: {
    title: "Frontend",
    description: "I build functional UIs that serve the user, not the designer's portfolio.",
    items: [
      {
        name: "React",
        usage: "Primary choice for complex SPAs and admin dashboards. Used when the UI has significant state management needs or requires real-time updates."
      },
      {
        name: "Vue.js",
        usage: "Preferred for Laravel projects where I need reactive components without a full SPA. Faster to integrate with existing blade templates."
      }
    ]
  },
  mobile: {
    title: "Mobile",
    description: "Cross-platform development when native isn't justified.",
    items: [
      {
        name: "React Native",
        usage: "For clients who need iOS and Android from a single codebase. I handle the app side and ensure the API is optimized for mobile constraints (battery, bandwidth, offline)."
      }
    ]
  },
  database: {
    title: "Databases",
    description: "Data modeling, query optimization, and keeping things fast at scale.",
    items: [
      {
        name: "MySQL",
        usage: "Default choice for most projects. I handle schema design, indexing strategy, query optimization, and replication setup. Comfortable with databases up to 100GB+."
      },
      {
        name: "Redis",
        usage: "Caching layer, session storage, and queue backend. Used to reduce database load and speed up frequently accessed data."
      }
    ]
  },
  devops: {
    title: "DevOps & Infrastructure",
    description: "I deploy and maintain what I build. No throwing code over the wall.",
    items: [
      {
        name: "Linux Servers",
        usage: "Ubuntu/Debian for production. I handle server setup, security hardening, and ongoing maintenance."
      },
      {
        name: "Nginx",
        usage: "Web server and reverse proxy. Configured for PHP-FPM optimization, SSL termination, and load balancing."
      },
      {
        name: "AWS / Hetzner",
        usage: "AWS for clients who need it (EC2, RDS, S3, CloudFront). Hetzner for cost-effective dedicated servers when AWS is overkill."
      },
      {
        name: "PM2",
        usage: "Process manager for Node.js services and queue workers. Handles restarts, logging, and clustering."
      },
      {
        name: "CI/CD",
        usage: "GitHub Actions for automated testing and deployment. Every merge to main triggers tests and deploys to staging."
      }
    ]
  },
  payments: {
    title: "Payments & Integrations",
    description: "Handling real money requires extra care. I've processed millions in transactions.",
    items: [
      {
        name: "Stripe",
        usage: "Full implementation including Stripe Cashier for subscriptions, Connect for marketplaces, and custom webhook handling for complex billing scenarios."
      },
      {
        name: "Webhooks",
        usage: "Both consuming and producing. I build webhook systems with proper signature verification, retry logic, and idempotency."
      }
    ]
  }
};
