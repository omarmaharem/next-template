// @ts-check
import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  globalIgnores([
    "node_modules/**/*",
    ".next/**/*",
    "out/**/*",
    "build/**/*",
    "**/next-env.d.ts",
  ]),
  {
    extends: compat.extends("next/core-web-vitals"),
  },
]);
