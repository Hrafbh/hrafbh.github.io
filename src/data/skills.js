import { readdirSync } from "node:fs";
import { basename, extname } from "node:path";

const skillLabelMap = {
  python: "Python",
  SQL: "SQL",
  pandas: "Pandas",
  Pyspark: "Spark",
  databricks: "Databricks",
  Azure: "Azure",
  git: "Git",
  sklearn: "scikit-learn",
  AWS: "AWS",

};

const skillFiles = readdirSync(new URL("../../public/skills", import.meta.url))
  .filter((file) => !file.startsWith("."))
  .sort((a, b) => a.localeCompare(b));

const toSkill = (file) => {
  const key = basename(file, extname(file));

  return {
    name: skillLabelMap[key] ?? key,
    src: `/skills/${file}`,
  };
};

export const coreSkills = [
  "python.png",
  "SQL.png",
  "Pyspark.png",
  "pandas.png",
  "Azure.png",
  "git.png",
].map(toSkill);

export const allSkills = skillFiles.map(toSkill);
