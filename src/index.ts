#!/usr/bin/env node

import { execSync } from "child_process";
import inquirer, { Answers } from "inquirer";

console.log("🌟 Welcome to the custom Git CLI! 🌟");

const questions = [
  {
    type: "list",
    name: "type",
    message: "🚀 Select commit type:",
    choices: [
      { name: "✨ feat: A new feature", value: "feat: ✨" },
      { name: "🐛 fix: A bug fix", value: "fix: 🐛" },
      { name: "📚 docs: Documentation changes", value: "docs: 📚" },
      {
        name: "💄 style: Code style changes (white-space, formatting, etc)",
        value: "style: 💄",
      },
      {
        name: "🔨 refactor: Refactoring code (neither fixing a bug nor adding a feature)",
        value: "refactor: 🔨",
      },
      { name: "⚡️ perf: Performance improvements", value: "perf: ⚡️" },
      { name: "✅ test: Adding missing tests", value: "test: ✅" },
      {
        name: "🔧 chore: Changes to the build process or auxiliary tools",
        value: "chore: 🔧",
      },
      { name: "⏪️ revert: Reverting a previous commit", value: "revert: ⏪️" },
    ],
  },
  {
    type: "input",
    name: "message",
    message: "✏️  Enter commit message:",
  },
];

inquirer.prompt<Answers>(questions).then((answers) => {
  const commitMessage = `${answers.type} ${answers.message}`;
  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
    console.log("✅ Commit successful!");
  } catch (error) {
    console.error("❌ Commit failed:", error);
  }
});
