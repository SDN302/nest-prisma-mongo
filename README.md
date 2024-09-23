# SDN302 - Group 1
## Implement the end-to-end solution integrating Nestjs, mongodb, Prisma to build REST API

### Tech Stack
<img src="https://skillicons.dev/icons?i=nestjs,prisma,mongo" /><br/><br/>

### Setup
- Create Nest Project

```bash
npm i -g @nestjs/cli
```

```bash
nest new project-name
```

- Install prisma

```bash
npm install -g prisma
```

```bash
npx prisma init
```

- Push the initial schema to the database:

```bash
npx prisma db push
```

- Generates files based on a schematic

```bash
nest g <schematic> <name> [options]
```

| Name        | Alias | Description                                                                                     |
|-------------|-------|-------------------------------------------------------------------------------------------------|
| controller  | co    | Generate a controller declaration.                                                               |
| module      | mo    | Generate a module declaration.                                                                   |
| service     | s     | Generate a service declaration.                                                                  |



### Run:

```bash
npm run start
```

