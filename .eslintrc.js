const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "prettier", "prettier/react", "react-app"],
  plugins: ["prettier", "no-only-tests"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "no-unexpected-multiline": 0,
    "no-duplicate-imports": ["error"],
    "no-console": 0,
    "no-only-tests/no-only-tests": 2,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"]
      }
    ]
  },

  globals: {
    before: "readonly"
  }
};
