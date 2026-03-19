/**
 * @typedef {"fr"|"en"} Lang
 * @typedef {{ fr: string; en: string }} I18nText
 * @typedef {{ fr: string[]; en: string[] }} I18nBullets
 *
 * @typedef {{
 *   type: "highlights";
 *   bullets: I18nBullets;
 * }} ShowcaseHighlights
 *
 * @typedef {{
 *   slug: string;
 *   featured?: boolean;
 *   status?: "live" | "wip";
 *   category: I18nText;
 *   date: string;
 *   tags: string[];
 *   title: I18nText;
 *   summary: I18nText;
 *   links: { repo: string; demo?: string };
 *   showcase?: ShowcaseHighlights;
 * }} Project
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "github-issues-lakehouse",
    featured: true,
    status: "live",
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2026-01",
    tags: ["Python", "GitHub API", "Lakehouse", "Parquet", "KPIs"],
    title: { fr: "GitHub Issues Lakehouse", en: "GitHub Issues Lakehouse" },
    summary: {
      fr: "Projet lakehouse sur des issues GitHub, pense comme un cas de data engineering similaire a un projet metier structure.",
      en: "GitHub issues lakehouse project designed as a structured data engineering case study.",
    },
    links: {
      repo: "https://github.com/Hrafbh/github-issues-lakehouse",
      demo: "https://hrafbh.github.io/github-issues-lakehouse/",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Architecture Bronze / Silver / Gold avec sorties CSV et Parquet.",
          "KPIs mensuels sur le backlog, le flow et le temps de resolution.",
          "Projet vitrine pour montrer une logique de delivery data end-to-end.",
        ],
        en: [
          "Bronze / Silver / Gold architecture with CSV and Parquet outputs.",
          "Monthly KPIs for backlog, flow, and resolution speed.",
          "Showcase project to demonstrate end-to-end delivery thinking.",
        ],
      },
    },
  },
  {
    slug: "confluence-rag-chatbot",
    featured: true,
    status: "live",
    category: { fr: "Applied AI", en: "Applied AI" },
    date: "2026-01",
    tags: ["Python", "RAG", "Confluence API", "ChromaDB", "Sentence Transformers", "Streamlit"],
    title: { fr: "ConfluRAG-SupportAgent", en: "ConfluRAG-SupportAgent" },
    summary: {
      fr: "Assistant support interne oriente RAG, connecte a une base documentaire Confluence et pense comme un cas portfolio realiste pour le support SaaS B2B.",
      en: "Internal support assistant built around a Confluence-backed knowledge base, combining KB-as-code, semantic retrieval, intent routing, and an interactive Streamlit demo.",
    },
    links: {
      repo: "https://github.com/Hrafbh/ConfluRAG-SupportAgent",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Base de connaissances maintenue en Markdown avec IDs stables puis synchronisee avec Confluence.",
          "Pipeline RAG avec indexation ChromaDB, routing par intention, reranking hybride et mode inconnu.",
          "Projet renforce par une vraie evaluation retrieval avec Hit@1 = 75 % et Hit@5 = 87.5 %.",
        ],
        en: [
          "Knowledge base maintained in Markdown with stable IDs, then synchronized with Confluence.",
          "RAG pipeline with ChromaDB indexing, intent routing, hybrid reranking, and an unknown-answer fallback.",
          "Strengthened by explicit retrieval evaluation with Hit@1 = 75% and Hit@5 = 87.5%.",
        ],
      },
    },
  },
  {
    slug: "energy-pool-data-engineering-project",
    featured: true,
    status: "wip",
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2025",
    tags: ["ETL", "SQL", "Python", "Analytics", "Industrial Data"],
    title: {
      fr: "Energy Pool Data Engineering Project",
      en: "Energy Pool Data Engineering Project",
    },
    summary: {
      fr: "Cas de data engineering centre sur la structuration, la transformation et l'exploitation fiable de donnees metier.",
      en: "Data engineering case study focused on structuring, transforming, and exposing business data reliably.",
    },
    links: {
      repo: "https://github.com/Hrafbh",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Projet de reference pour la logique pipeline, qualite et exploitation analytique.",
          "Base de comparaison pour d'autres projets data du portfolio.",
          "Le contenu detaille sera enrichi progressivement.",
        ],
        en: [
          "Reference project for pipeline, quality, and analytical delivery logic.",
          "Baseline used to position other data projects in the portfolio.",
          "Detailed write-up will be expanded progressively.",
        ],
      },
    },
  },
  {
    slug: "framatome-data-engineering-project",
    featured: true,
    status: "live",
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2024",
    tags: ["Azure Databricks", "Azure Data Factory", "Spark", "Python", "GDPR", "Azure Blob Storage"],
    title: {
      fr: "GDPR Compliance Data Pipeline",
      en: "GDPR Compliance Data Pipeline",
    },
    summary: {
      fr: "Projet de stage centre sur l'automatisation de l'anonymisation RGPD pour des plateformes internes de knowledge management, avec une forte dimension architecture et orchestration Azure.",
      en: "Internship project focused on automating GDPR-oriented anonymization for internal knowledge management platforms, with a strong emphasis on Azure architecture and orchestration.",
    },
    links: {},
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Pipeline Azure pour anonymiser des donnees d'usage tout en conservant leur valeur analytique.",
          "Projet portfolio presente surtout via des diagrammes d'architecture et d'orchestration.",
          "Cas concret de data engineering applique dans un contexte enterprise et RGPD.",
        ],
        en: [
          "Azure pipeline designed to anonymize usage data while preserving analytical value.",
          "Portfolio presentation centered on architecture and orchestration diagrams rather than code.",
          "Concrete applied data engineering case study in an enterprise GDPR setting.",
        ],
      },
    },
  },
  {
    slug: "academic-data-science-project",
    featured: false,
    status: "wip",
    category: { fr: "Data Science", en: "Data Science" },
    date: "2024-2025",
    tags: ["Machine Learning", "Time Series", "Energy", "Notebook", "Evaluation"],
    title: {
      fr: "Academic Data Science Project",
      en: "Academic Data Science Project",
    },
    summary: {
      fr: "Projet academique regroupant notamment Challenge Data Engie et Wind Turbine Energy avec une approche data science appliquee.",
      en: "Academic project grouping work such as Challenge Data Engie and Wind Turbine Energy with an applied data science angle.",
    },
    links: {
      repo: "https://github.com/Hrafbh",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Regroupe les projets academiques les plus representatifs pour le portfolio.",
          "Met en avant l'analyse, la modelisation et l'evaluation des resultats.",
          "Convient pour presenter des notebooks, figures et conclusions metier.",
        ],
        en: [
          "Groups the most representative academic projects for the portfolio.",
          "Highlights analysis, modeling, and result evaluation.",
          "Well suited for notebooks, figures, and business-facing conclusions.",
        ],
      },
    },
  },
];
