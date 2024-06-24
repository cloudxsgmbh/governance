# cloudxs Governance

This repository contains code helping to ensure a governance of the projects of cloudxs GmbH.

- Naming conventions
- Tagging conventions

## Tagging

Exports a function called `getPulumiTags` that automatically put some default tags on the resources. Put a `projectTags` object to your Pulumi config (default namespace) to add additional tags.

```yaml
projectTags:
  TagName: TagValue
```

## Development

Do not manually bump the version in the `package.json` file.

### Automatic releases

Consider the [ESLint Convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint#eslint-convention) when writing commit messages.
