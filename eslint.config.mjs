import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pretty from "eslint-plugin-prettier/recommended";
import cspell from "@cspell/eslint-plugin/recommended";

export default defineConfig([
  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.mjs"],
  },
  {
    ...json.configs.recommended,
    files: ["**/*.json"],
    language: "json/json",
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    extends: ["markdown/recommended"],
    language: "markdown/gfm",
    languageOptions: {
      frontmatter: "yaml",
    },
  },
  pretty,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          // If you don't set proseWrap to always, markdown
          // does not line break properly, so we are setting it
          // here.
          proseWrap: "always",
        },
      ],
    },
  },
  cspell,
  globalIgnores([
    // Outputs
    "**/node_modules",

    // Generated
    "**/.yarn",
    "**/*.husky",
    "**/cspell.json",
  ]),
]);
