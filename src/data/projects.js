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
      fr: "Projet lakehouse sur des issues GitHub, pensé comme un cas de data engineering similaire à un projet métier structuré.",
      en: "GitHub issues lakehouse project designed as a structured data engineering case study.",
    },
    links: {
      repo: "https://github.com/Hrafbh/github-issues-lakehouse",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Architecture Bronze / Silver / Gold avec sorties CSV et Parquet.",
          "KPIs mensuels sur le backlog, le flow et le temps de résolution.",
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
    status: "wip",
    category: { fr: "Applied AI", en: "Applied AI" },
    date: "2026",
    tags: ["RAG", "LLM", "Confluence", "Embeddings", "Chatbot"],
    title: { fr: "Confluence RAG Chatbot", en: "Confluence RAG Chatbot" },
    summary: {
      fr: "Assistant conversationnel RAG basé sur une base documentaire Confluence, dans l'esprit du projet Energy Pool AI chatbot.",
      en: "RAG conversational assistant built on top of a Confluence knowledge base, similar in spirit to the Energy Pool AI chatbot project.",
    },
    links: {
      repo: "https://github.com/Hrafbh",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Pipeline d'ingestion documentaire et préparation de chunks pour la recherche.",
          "Travail centré sur la pertinence des réponses et la qualité du contexte restitué.",
          "Page prête à accueillir l'architecture, l'évaluation et les choix techniques détaillés.",
        ],
        en: [
          "Document ingestion pipeline and chunk preparation for retrieval.",
          "Work focused on answer relevance and retrieved context quality.",
          "Page ready to host architecture, evaluation, and detailed technical choices.",
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
      fr: "Cas de data engineering centré sur la structuration, la transformation et l'exploitation fiable de données métier.",
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
          "Projet de référence pour la logique pipeline, qualité et exploitation analytique.",
          "Base de comparaison pour d'autres projets data du portfolio.",
          "Le contenu détaillé sera enrichi progressivement.",
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
    featured: false,
    status: "wip",
    category: { fr: "Data Engineering", en: "Data Engineering" },
    date: "2025",
    tags: ["Data Pipeline", "Monitoring", "SQL", "Python", "Industry"],
    title: {
      fr: "Framatome Data Engineering Project",
      en: "Framatome Data Engineering Project",
    },
    summary: {
      fr: "Projet orienté pipeline, fiabilité et mise à disposition de données dans un contexte industriel.",
      en: "Project centered on pipeline reliability and data delivery in an industrial context.",
    },
    links: {
      repo: "https://github.com/Hrafbh",
      demo: "",
    },
    showcase: {
      type: "highlights",
      bullets: {
        fr: [
          "Accent mis sur la robustesse du traitement et la lisibilité de l'architecture.",
          "Positionné comme un cas concret de data engineering appliqué.",
          "La page sert déjà de place propre pour publier le contenu complet ensuite.",
        ],
        en: [
          "Emphasis on robust processing and readable architecture.",
          "Positioned as a concrete applied data engineering case study.",
          "The page already provides a clean slot for the full write-up later on.",
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
      fr: "Projet académique regroupant notamment Challenge Data Engie et Wind Turbine Energy avec une approche data science appliquée.",
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
          "Regroupe les projets académiques les plus représentatifs pour le portfolio.",
          "Met en avant l'analyse, la modélisation et l'évaluation des résultats.",
          "Convient pour présenter des notebooks, figures et conclusions métier.",
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
