export const experience = {
  summary: "5+ years building production systems. Started as a backend developer, grew into leading teams and making architecture decisions. I've shipped code that handles real traffic and real money.",
  
  leadership: [
    {
      title: "Team Leadership",
      description: "Led teams of 3-6 developers on complex projects. I handle sprint planning, task breakdown, and making sure everyone has what they need to ship.",
      examples: [
        "Managed a distributed team across 3 time zones for a 6-month SaaS rebuild",
        "Onboarded 4 junior developers and got them productive within 2 weeks",
        "Ran daily standups and weekly architecture reviews"
      ]
    },
    {
      title: "Code Reviews",
      description: "I review code for correctness, performance, and maintainability. Not nitpicking style - catching bugs before they hit production.",
      examples: [
        "Caught a race condition in payment processing that would have caused double charges",
        "Identified N+1 queries that would have killed performance at scale",
        "Established code review guidelines that reduced review time by 40%"
      ]
    },
    {
      title: "Architecture Decisions",
      description: "I make technical decisions that balance immediate needs with long-term maintainability. No over-engineering, no shortcuts that create debt.",
      examples: [
        "Designed multi-tenant architecture that scaled from 10 to 500+ tenants",
        "Chose queue-based architecture over real-time for a notification system - saved 3 weeks of development",
        "Migrated monolith to service-oriented architecture incrementally over 8 months"
      ]
    },
    {
      title: "Production Incidents",
      description: "When things break at 2 AM, I'm the one who gets called. I diagnose fast, fix carefully, and document what happened.",
      examples: [
        "Resolved database deadlock that was causing checkout failures during Black Friday",
        "Identified memory leak in queue worker that was crashing servers every 6 hours",
        "Built runbook for common incidents that reduced MTTR from 45 minutes to 10 minutes"
      ]
    }
  ],

  timeline: [
    {
      period: "2021 - Present",
      role: "Lead Full Stack Developer / Backend Lead",
      type: "Freelance & Contract",
      highlights: [
        "Leading development on SaaS platforms and high-traffic APIs",
        "Architecture consulting for startups scaling their backend",
        "Building payment systems processing $2M+ monthly"
      ]
    },
    {
      period: "2019 - 2021",
      role: "Senior Backend Developer",
      type: "Agency / Product Company",
      highlights: [
        "Promoted to senior after 8 months",
        "Led backend team of 4 developers",
        "Shipped 12+ production projects"
      ]
    },
    {
      period: "2017 - 2019",
      role: "Full Stack Developer",
      type: "Startup",
      highlights: [
        "First engineering hire - built MVP to product-market fit",
        "Learned to ship fast without breaking things",
        "Handled everything from database design to deployment"
      ]
    }
  ]
};

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Engineering and Technology",
  year: "2017",
  note: "Focused on software engineering and database systems. The degree gave me fundamentals - real learning happened on production systems."
};
