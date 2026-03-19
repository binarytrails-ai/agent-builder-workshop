# Multi-Version Workshop Documentation

This workshop uses [mike](https://github.com/jimporter/mike) to manage multiple versions of the documentation for different events and skill levels.

## Available Configurations

- **mkdocs.yml** - Full workshop with all labs (default)
- **mkdocs-beginner.yml** - Beginner track (Labs 1-3)
- **mkdocs-advanced.yml** - Advanced track (Labs 3.1-5)

## Deploying Different Versions

### Deploy to a specific version path

```bash
# Deploy beginner version
mike deploy beginner --config-file docs/mkdocs-beginner.yml --push

# Deploy advanced version
mike deploy advanced --config-file docs/mkdocs-advanced.yml --push

# Deploy event-specific version
mike deploy ignite-2026 --config-file docs/mkdocs.yml --push
```

### Set default version

```bash
mike set-default latest --push
```

### List all deployed versions

```bash
mike list
```

### Delete a version

```bash
mike delete <version-name> --push
```

## Accessing Different Versions

After deployment, versions will be available at:

- `https://yourname.github.io/agent-builder-workshop/` (default/latest)
- `https://yourname.github.io/agent-builder-workshop/beginner/`
- `https://yourname.github.io/agent-builder-workshop/advanced/`
- `https://yourname.github.io/agent-builder-workshop/ignite-2026/`

## Local Development

Test a specific configuration locally:

```bash
mkdocs serve -f docs/mkdocs-beginner.yml
mkdocs serve -f docs/mkdocs-advanced.yml
```

## Creating New Event Versions

1. Copy an existing config file:
   ```bash
   cp docs/mkdocs.yml docs/mkdocs-myevent-2026.yml
   ```

2. Update the `site_name` and customize the `nav` section

3. Deploy with mike:
   ```bash
   mike deploy myevent-2026 --config-file docs/mkdocs-myevent-2026.yml --push
   ```

## GitHub Actions

The workflow in `.github/workflows/ci.yml` automatically deploys the latest version on push to main/master.

To deploy additional versions, you can:
- Manually run `mike deploy` locally and push
- Add version-specific workflow triggers based on branches or tags
- Use workflow dispatch with parameters

## Version Selector

All deployed versions will appear in a version selector dropdown at the top of the documentation site (if using Material theme).
