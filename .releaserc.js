/**
 * Release Configuration
 * This configuration file defines the settings for semantic release,
 * a versioning and changelog generation tool.
 * It specifies the rules for version bumping and release notes generation based on commit messages.
 * @type {import("semantic-release").GlobalConfig}
 */
const config = {
  // Extend the default configuration with conventional commit message format
  extends: "semantic-release-config-conventional"
};

module.exports = config;
