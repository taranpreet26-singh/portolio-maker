import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "off", // Disable console warnings
      "react/no-unescaped-entities": "warn", // Turn unescaped entities into warnings instead of errors
      "react/react-in-jsx-scope": "off", // Not needed in Next.js anymore
    },
  },
];

export default eslintConfig;
