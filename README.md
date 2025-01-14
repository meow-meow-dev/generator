# Generator

## Generate a react component

```bash
npx generator react:component Box
```

## Generate a react page

```bash
npx generator react:page EditTodoPage
```

## Generate a route for tanstack-router

```bash
npx generator tanstack:route ./src/client/routes/todos/:id/edit
```

## Generate lingui config

Allows to customize the `sourceLocale` and `locales` fields.
Optionally updates the `package.json` with `exports` for the locales and `scripts` for messages extraction / compilation.

```bash
npx generator config:lingui
```

## Generate vitest config for a react client

Allows to select setups (Jest DOM, Mantine mocks) and generates vitest.client.config.ts

```bash
npx generator config:vitest.reactClient
```
