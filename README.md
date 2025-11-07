# cloudxs Governance

This repository contains code helping to ensure a governance of the projects of cloudxs GmbH.

- Naming conventions
- Tagging conventions

## Tagging

Exports a function called `getPulumiTags` that automatically put some default tags on the resources. Put a `projectTags` object to your Pulumi config (default namespace) to add additional tags.

```yaml
pulumiProjectName:projectTags:
  TagName: TagValue
```

## Development

Do not manually bump the version in the `package.json` file.

### NPM

The Github release pipeline pushes new versions to NPM automatically when a new release is created. CLXS decided to use a new token every time a new release is created. The token is stored as a secret called `NPM_TOKEN` in the repository settings. Create a personal npm granular token with the minimal required permissions and expiry date.

### Automatic releases

Consider the [ESLint Convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint#eslint-convention) when writing commit messages.

The Tag is one of the following:

- `Fix` - for a bug fix.
- `Update` - either for a backwards-compatible enhancement or for a rule change that adds reported problems.
- `New` - implemented a new feature.
- `Breaking` - for a backwards-incompatible enhancement or feature.
- `Docs` - changes to documentation only.
- `Build` - changes to build process only.
- `Upgrade` - for a dependency upgrade.
- `Chore` - for refactoring, adding tests, etc. (anything that isn't user-facing).
