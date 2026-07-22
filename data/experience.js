/**
 * EXPERIENCE — work history entries.
 * Each entry: company, role, period, tags, and bullet points.
 */
export const EXPERIENCE = [
  {
    company: "Atal Innovation Centre",
    role:    "Backend Developer Intern",
    period:  "May 2025 – Jul 2025",
    color:   "#0d9488",
    tags:    ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    bullets: [
      "Built JWT authentication and role-based access control in Node.js, securing 20+ REST API endpoints across 3 user roles (admin, manager, cashier) for a Point of Sale application.",
      "Reduced slow endpoint response times by 30% through PostgreSQL query optimization and composite indexing; added rate limiting, CORS headers, and brute-force protection middleware.",
      "Designed and documented RESTful API contracts for the POS billing module, enabling parallel frontend development and reducing integration bugs during handoff.",
    ],
  },
];
