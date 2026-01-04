# Default target (lists commands)
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# Start development mode (Vite dev server)
dev:
	npm run dev

# Build library (TypeScript compilation + Vite build)
build:
	npm run build

# Lint code (ESLint)
lint:
	npm run lint

# Generate CSS variables from theme config (scripts/generate-theme.js)
generate-theme:
	node scripts/generate-theme.js

# Publication commands
# Note: package.json has "prepublishOnly": "npm run build", so build runs automatically before publishing
# Publish current version to NPM
publish:
	npm publish