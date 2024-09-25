## ts-demo

### Steps
- install libs
```sh
npm i typescript ts-node --save-dev
```

- create <root>/tsconfig.json (need this file for ts-node command)
```json
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ES2021",
    "module": "commonjs"
  }
}
```

- add script in package.json
```json
{
  "scripts": {
    "fn": "ts-node format.fn.ts",
    "build": "tsc",
    "js": "ts-node dist/format.fn.js",
    "service": "ts-node format.service.ts"
  },
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.6.2"
  }
}
```