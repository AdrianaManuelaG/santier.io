const common = [
    "e2e/tests/features/*.feature", // Specify our feature files
    "--require-module ts-node/register", // Load TypeScript module
    "--require e2e/tests/step_definitions/*.ts",
    "--format @cucumber/pretty-formatter", // Load custom formatter
    "--format-options '{\"colorsEnabled\":true}'",
    "--require testSetupI.ts",
    "--exit"
  ].join(" ");
  
  module.exports = {
    default: common
  };
  