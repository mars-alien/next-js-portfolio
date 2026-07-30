/**
 * PROJECTS — featured project entries.
 * github/live can be empty strings; links won't render if empty.
 */
export const PROJECTS = [
  {
    name:       "PaperTrail",
    subtitle:   "Multi-Article RAG Research Assistant",
    color:      "#6366f1",
    description:
      "Multi-article RAG web app that scrapes news URLs, chunks into ~300-token segments, embeds with BAAI/BGE-small, and indexes in Weaviate for source-attributed answers. Fuses tuned BM25 and HNSW dense search via Reciprocal Rank Fusion, reranks with a cross-encoder, and routes queries between Groq models (Llama 3.3 70B / DeepSeek-R1) with SSE streaming and multi-turn dialogue — evaluated with a custom RAGAS-style LLM-as-judge framework, achieving a 0.905 score across faithfulness, relevancy, and context precision.",
    overviewImage: "/images/papertrail.png",
    tags:   ["Python", "FastAPI", "React", "Weaviate", "RAG", "Groq"],
    github: "https://github.com/mars-alien/paper-trail",
    live:   "https://paper-trail-sigma-ten.vercel.app",
  },
  {
    name:       "Nexus",
    subtitle:   "Event Companion Platform",
    color:      "#0d9488",
    description:
      "Full-stack event-discovery platform built with Spring Boot, featuring role-based group join approval with async concurrent request handling. Location-based search uses PostGIS geospatial indexing for distance-ranked results in under 100ms across 10,000+ indexed locations, backed by a Redis-powered automated waitlist queue and JWT refresh-token rotation — deployed via Docker on Railway with GitHub Actions CI/CD.",
    overviewImage: "/images/sangam.png",
    tags:   ["Java", "Spring Boot", "PostgreSQL", "Redis", "PostGIS", "React", "Docker"],
    github: "https://github.com/mars-alien/nexus",
    live:   "https://nexus-royal.vercel.app/",
  },
  {
    name:       "EcoRoute",
    subtitle:   "Intelligent Delivery Optimizer",
    color:      "#16a34a",
    description:
      "Route optimization engine using K-Means++ clustering to partition delivery locations and a Nearest Neighbor TSP heuristic to sequence stops — cutting average route length by ~35% over naive ordering across 500-stop test datasets. Delivery locations are modeled as GeoJSON points in MongoDB with 2dsphere indexes for sub-millisecond radius queries via $nearSphere, served through a FastAPI backend with the Motor async driver and JWT auth, keeping the optimization layer stateless and independently scalable.",
    overviewImage: "/images/ecoroute.png",
    tags:   ["Python", "FastAPI", "React", "MongoDB", "K-Means++", "TSP"],
    github: "https://github.com/mars-alien/eco-route",
    live:   "https://eco-route-brown.vercel.app",
  },
];
