import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import { vdustr } from "@vp-tw/eslint-config";
import path from "pathe";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const eslintignorePath = path.resolve(__dirname, ".eslintignore");

export default vdustr(includeIgnoreFile(eslintignorePath));
