# Publishing to GitHub Packages

## 1. Create a Personal Access Token (PAT)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "npm-publish")
4. Select scopes:
   - `repo` (full control of private repositories)
   - `write:packages` (upload packages to GitHub Packages)
   - `read:packages` (download packages from GitHub Packages)
   - `delete:packages` (optional, if you need to delete packages)

## 2. Configure npm locally

```bash
# Login to GitHub Packages npm registry
npm login --registry=https://npm.pkg.github.com --scope=@printags

# When prompted:
# Username: YOUR_GITHUB_USERNAME
# Password: YOUR_PERSONAL_ACCESS_TOKEN
# Email: YOUR_EMAIL
```

## 3. Verify configuration

```bash
# Check if you're logged in
npm whoami --registry=https://npm.pkg.github.com
```

## 4. Publish manually

```bash
# From the project root
npm publish
```

## Alternative: Use GitHub Actions

The workflow `.github/workflows/publish-package.yml` will automatically publish when:
- A new release is created
- Changes to package.json are pushed to master
- Manually triggered in Actions tab

Make sure your repository has the `GITHUB_TOKEN` secret available (this is automatic for public repos).

## Troubleshooting

If you get 403 errors:
1. Verify your PAT has `write:packages` permission
2. Check that the package name matches your organization (@printags)
3. Ensure you're a member of the printags organization with write access