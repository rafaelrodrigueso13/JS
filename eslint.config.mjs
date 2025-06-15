import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended, // Importa as regras recomendadas
    languageOptions: {
      globals: globals.node,    // Define variáveis globais do Node.js
    },
    rules: {
      "no-console": "off",              // Permite uso de console.log
      "class-methods-use-this": "off",  // Permite métodos de classe sem usar `this`
    },
  },
]);
