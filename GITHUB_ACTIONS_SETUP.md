# GitHub Actions Setup Guide

## Issues Fixed

### 1. Wrong CodeReviewer Constructor Parameter
**Problem:** `ci-runner.js` was passing `"thorough"` instead of the config file path.
**Fixed:** Changed to `new CodeReviewer(".agent-config.json")`

### 2. Missing Configuration File
**Problem:** `.agent-config.json` was not in the repository.
**Fixed:** Created `.agent-config.json` with default settings for all agents.

### 3. Missing Git Fetch Step
**Problem:** The workflow couldn't properly diff against the base branch.
**Fixed:** Added `git fetch origin ${{ github.event.pull_request.base.ref }}` step.

## Required Setup

### 1. Add GitHub Secrets

You **MUST** add the following secret to your GitHub repository for the workflows to function:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)

### 2. Enable Workflow Permissions

Ensure your workflows have the correct permissions:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## How the Workflows Work

### AI Code Review (`ai-code-reviewer.yml`)
- **Triggers:** When a PR is opened or updated
- **Files watched:** `*.js`, `*.ts`, `*.jsx`, `*.tsx`, `*.py`
- **Actions:** Reviews changed code files and posts comments with suggestions

### API Documentation (`api-docs.yml`)
- **Triggers:** When a PR modifies API-related files
- **Files watched:** `api/**`, `server/api/**`, `*.js`
- **Actions:** Generates/updates API documentation

### Auto Bug Fix (`auto-bug-fix.yml`)
- **Triggers:** When a PR is opened or updated
- **Actions:** Attempts to automatically fix common bugs

## Testing the Workflows

The workflows only run on **pull requests**, not on direct commits. To test:

1. Create a new branch: `git checkout -b test-actions`
2. Make a change to a JavaScript file
3. Commit and push: `git add . && git commit -m "test" && git push -u origin test-actions`
4. Create a pull request on GitHub
5. The workflows will automatically run

## Troubleshooting

### Workflow doesn't start
- Check that you're creating a **pull request**, not just pushing to a branch
- Verify the PR modifies files matching the workflow's path filters
- Ensure the PR is not marked as a draft (AI Code Review skips drafts)

### "OPENAI_API_KEY is not defined" error
- Add the `OPENAI_API_KEY` secret to your repository (see step 1 above)

### "Permission denied" errors
- Enable read/write permissions for workflows (see step 2 above)

### Git diff fails
- This should now be fixed with the added `git fetch` step
- If it still fails, check that the base branch exists

## Cost Management

The workflows use OpenAI API which costs money. The costs are tracked via:
- `github-cost-tracker.js` - Creates GitHub issues to track monthly spending
- Review the configuration in `.agent-config.json` to adjust models and token limits

**Current models:**
- Code Reviewer: `gpt-4o` (3000 max tokens)
- Bug Fixer: `gpt-4o-mini` (1500 max tokens)
- Doc Writer: `gpt-4o` (3000 max tokens)

To reduce costs, you can switch to `gpt-4o-mini` for all agents by editing `.agent-config.json`.

## Configuration

Edit `.agent-config.json` to customize:
- AI models used
- Maximum tokens per request
- Focus areas for code review
- File exclusion patterns
- Team coding standards

See `agent-config.js` for all available options.
