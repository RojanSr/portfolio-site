//eslint-disable-next-line
module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.includes("WIP")],
  rules: {
    "subject-max-length": [1, "always", 100],
    "type-enum": [2, "always", ["feat", "fix", "test", "refactor", "style"]]
  }
};

// type(SCOPE): subject
