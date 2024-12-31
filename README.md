# Standardkit Core

## Installation

```bash
npm install --save @standardkit/core
```

## Angular

Add an `allowedCommonJsDependencies` entry in your build options.

This might change in the near future, it was changed to commonjs to support NestJS in the short-term.

```json
{
  "build": {
    "options": {
      "allowedCommonJsDependencies": ["@standardkit/core"]
    }
  }
}
```

## Migrations

See Changelog.
