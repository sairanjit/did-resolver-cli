# DID Resolver CLI

A command-line tool to resolve Decentralized Identifiers (DIDs) using the [Universal Resolver](https://dev.uniresolver.io/).

![Demo](./assets/demo.gif)

## Installation

```bash
# Install globally
npm install -g did-resolver-cli

# Or use with npx (no installation required)
npx did-resolver-cli <did>

# Or use with bunx
bunx did-resolver-cli <did>
```

## Usage

```bash
# Resolve a DID
did-resolver-cli <did>

# Examples
did-resolver-cli did:web:sairanjit.github.io

# Using bunx
bunx did-resolver-cli did:web:sairanjit.github.io

# Show help
did-resolver-cli --help

# Show version
did-resolver-cli --version
```

### Output

The CLI returns the resolved DID Document in JSON format:

```json
{
  "didDocument": {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:example:123",
    "verificationMethod": [...],
    "authentication": [...],
    "service": [...]
  },
  "didResolutionMetadata": {...},
  "didDocumentMetadata": {...}
}
```

## Development

```bash
# Install dependencies
bun install

# Run the CLI locally
bun run src/bin/did-resolver-cli.ts <did>

# Build for production
bun run build

# Type checking
bun run typecheck

# Lint code
bun run lint

# Format code
bun run format
```

## Project Structure

```
/src
  /bin
    did-resolver-cli.ts   # CLI entry point
.github/
  workflows/
    main.yml              # CI workflow
    release.yml           # Release workflow
package.json
tsconfig.json
```

## Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `bun run build`        | Build for production         |
| `bun run lint`         | Lint code                    |
| `bun run format`       | Format code                  |
| `bun run format:check` | Check if code is formatted   |
| `bun run typecheck`    | Run TypeScript type checking |
| `bun run changeset`    | Create a new changeset       |
| `bun run release`      | Build and publish to npm     |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache-2.0

## Author

Sai Ranjit Tummalapalli

## Links

- [GitHub Repository](https://github.com/sairanjit/did-resolver-cli)
- [Universal Resolver](https://dev.uniresolver.io/)
- [DID Specification (W3C)](https://www.w3.org/TR/did-core/)
