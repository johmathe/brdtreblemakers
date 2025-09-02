.PHONY: help dev build preview lint clean deploy install deps

help:
	@echo "Available targets:"
	@echo "  dev      - Start development server"
	@echo "  build    - Build for production"
	@echo "  preview  - Preview production build"
	@echo "  lint     - Run ESLint"
	@echo "  clean    - Clean build artifacts"
	@echo "  install  - Install dependencies"
	@echo "  deps     - Alias for install"

# Development
dev:
	npm run dev

# Build
build:
	npm run build

# Preview
preview:
	npm run preview

# Linting
lint:
	npm run lint

# Clean build artifacts
clean:
	rm -rf dist/
	rm -rf node_modules/.vite/

# Install dependencies
install:
	npm install

# Alias for install
deps: install

deploy: lint build
	wrangler pages deploy dist --project-name=treble-makers
