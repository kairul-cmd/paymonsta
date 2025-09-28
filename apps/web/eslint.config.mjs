import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  {
    ignores: [".next", "node_modules", ".turbo"]
  }
];

export default config;
