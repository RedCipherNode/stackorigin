# Architecture

## Directory Structure

```
app/
components/
config/
constants/
docs/
hooks/
lib/
public/
styles/
types/
utils/
```

## Responsibilities

### app/

Application entry point and routing.

### components/

Reusable UI components and page sections.

### config/

Application configuration.

Examples:

- site
- metadata
- navigation
- layout

### constants/

Static content and application data.

Examples:

- hero
- workflow
- pricing
- faq

### hooks/

Reusable React hooks.

### lib/

Third-party integrations and shared helpers.

Examples:

- cn
- axios
- dayjs

### styles/

Global styling resources.

### types/

Shared TypeScript types.

### utils/

Application utilities.

```
format/
helpers/
parse/
transform/
validate/
```

## Principles

- Components render UI.
- Constants store content.
- Config stores application configuration.
- Utilities contain reusable logic.
- Keep components focused on a single responsibility.
- Prefer composition over duplication.
- Keep the architecture flat until additional complexity is justified.