# Generator

## Installation

```
pnpm add -D @meow-meow-dev/generator
```

## Generate a react component

```bash
pnpm exec generate react:component Box
```

## Generate a react page

```bash
pnpm exec generate react:page EditTodoPage
```

## Generate a query for tanstack-query

```bash
pnpm exec generate tanstack:query listTodos
```

## Generate a mutation for tanstack-query

```bash
pnpm exec generate tanstack:mutation createTodo
```

## Generate a rpc for hono

```bash
pnpm exec generate hono:rpc createTodo
```

## Generate a route for tanstack-router

```bash
pnpm exec generate tanstack:route ./src/client/routes/todos/:id/edit
```

## Generate lingui config

Allows to customize the `sourceLocale` and `locales` fields.
Optionally updates the `package.json` with `exports` for the locales and `scripts` for messages extraction / compilation.

```bash
pnpm exec generate config:lingui
```
