import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser }, plugins: { js }, extends: ["js/recommended"], rules: {semi: ["error", "always"]} },  
]);
