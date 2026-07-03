# Style Guide

## General

- TypeScript first
- Functional components
- Reusable components
- Minimal abstraction
- Avoid unnecessary complexity

## Formatting

- 4 spaces
- Double quotes
- Semicolon
- Trailing comma
- UTF-8

## Component Structure

```
Imports

Interface

Type

Constants

Component

Export
```

## Component Rules

- One responsibility per component.
- Components should not contain page content.
- Prefer props over hardcoded values.

## Constants

Store only data.

Allowed

- string
- number
- boolean
- object
- array

Avoid

- JSX
- React components
- Business logic

## Styling

- Tailwind CSS
- Reusable UI primitives
- Consistent spacing
- Consistent typography
- Consistent border radius

## Philosophy

Build simple.

Optimize later.

Refactor only when necessary.