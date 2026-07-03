# Naming Convention

## Folder

- kebab-case

Example

```
components/
user-profile/
```

## Component

- PascalCase

Example

```tsx
Button.tsx
Navbar.tsx
Hero.tsx
```

## Function

- camelCase
- Start with a verb

Examples

```ts
formatDate()
validateEmail()
parseJson()
transformProject()
createProject()
updateProject()
removeProject()
```

## Variables

- camelCase

## Constants

- camelCase

Examples

```ts
hero
pricing
workflow
siteConfig
layoutConfig
```

## Types

- PascalCase

Examples

```ts
ButtonProps
HeroProps
NavigationItem
```

## File Naming

One file should have one primary responsibility.

Examples

```
Button.tsx
date.ts
email.ts
navigation.ts
```

## Import Order

1. React / Next
2. Third-party packages
3. Config
4. Constants
5. Hooks
6. Components
7. Lib
8. Types
9. Styles