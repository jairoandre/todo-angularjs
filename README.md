TODO APP
===

Stack
---

Utilizei as seguintes tecnologias para desenvolver esta aplicação::

- NodeJS
- NPM
- Webpack
- Angular 1.5
- Angular Material UI
- LESS
- ES 6 / Babel (Module Loading)
- Tests
  - Karma (Test Runner)
  - Mocha (Test Framework)
  - Chai (BDD/TSS assertion library)

Pré requisitos
---

NodeJS instalado

Scripts
---

Criar bundle JS da aplicação (com webpack):

```bash
$ npm run build
```

Iniciar [aplicação](http://localhost:3000):

```bash
$ npm start
```

Shortcut build + server:

```bash
$ npm run prod
```

Iniciar ambiente de desenvolvimento com auto reload (webpack dev server na porta 8080):

```bash
$ npm run dev
```

Executar testes:

```bash
$ npm run test
```

Iniciar aplicação em ambiente unix (necessário executar script build antes):

```bash
$ npm run unix
```
