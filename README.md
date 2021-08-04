# Test Backend

#### ubuntu

```sh
1. apt updates
2. apt install curl -y
3. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
4. nvm --version
5. nvm install 14.16.1
6. node -v
```

#### ubuntu (administrator)

```sh
1. sudo apt updates
2. sudo apt install curl -y
3. sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
4. sudo nvm --version
5. sudo nvm install 14.16.1
6. node -v
```

#### Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose up` command levantar el servidor con typeorm `docker-compose up -d`
3. Run `npm start` command

- Install global for run this project

```sh
npm i -g ts-node
```

```sh
4. npm run develop
```

Steps to run endpoints in postman:

```sh
http://localhost:5000/users
```

```sh
http://localhost:5000/auth
```

```sh
http://localhost:5000/agents
```

```sh
http://localhost:5000/leads
```

```sh
http://localhost:5000/judicials
```

## endpoints

#### 1. endpoints for auth:

| Endpoint               | VERB | PATH                                                              |
| ---------------------- | ---- | ----------------------------------------------------------------- |
| 1.1. Auth Login        | GET  | http://localhost:5000/auth/login                                  |
| 1.2. Auth refreshToken | GET  | http://localhost:5000/auth/request-new-access-token/:refreshToken |

#### 2. endpoints for user:

| Endpoint               | VERB   | PATH                                   |
| ---------------------- | ------ | -------------------------------------- |
| 2.1. User List         | GET    | http://localhost:5000/users/           |
| 2.2. User Id           | GET    | http://localhost:5000/users/:id        |
| 2.3. User List by page | GET    | http://localhost:5000/users/page/:page |
| 2.4. User Create       | POST   | http://localhost:5000/users/           |
| 2.5. User Update       | PUT    | http://localhost:5000/users/:id        |
| 2.6. User Delete       | DELETE | http://localhost:5000/users/:id        |

#### 3. endpoints for agent:

| Endpoint                | VERB   | PATH                                    |
| ----------------------- | ------ | --------------------------------------- |
| 3.1. Agent List         | GET    | http://localhost:5000/agents/           |
| 3.2. Agent Id           | GET    | http://localhost:5000/agents/:id        |
| 3.3. Agent List by page | GET    | http://localhost:5000/agents/page/:page |
| 3.4. Agent Create       | POST   | http://localhost:5000/agents/           |
| 3.5. Agent Update       | PUT    | http://localhost:5000/agents/:id        |
| 3.6. Agent Delete       | DELETE | http://localhost:5000/agents/:id        |
| 3.7. Agents by User     | GET    | http://localhost:5000/agents/user/:user |

#### 4. endpoints for lead:

| Endpoint               | VERB   | PATH                                       |
| ---------------------- | ------ | ------------------------------------------ |
| 4.1. Lead List         | GET    | http://localhost:5000/leads/               |
| 4.2. Lead Id           | GET    | http://localhost:5000/leads/:id            |
| 4.3. Lead List by page | GET    | http://localhost:5000/leads/page/:page     |
| 4.4. Lead Create       | POST   | http://localhost:5000/leads/               |
| 4.5. Lead Update       | PUT    | http://localhost:5000/leads/:id            |
| 4.6. Lead Delete       | DELETE | http://localhost:5000/leads/:id            |
| 4.7. Lead Delete       | DELETE | http://localhost:5000/leads/:id            |
| 4.8. Lead Search       | POST   | http://localhost:5000/leads/search         |
| 4.9. Lead Validation   | GET    | http://localhost:5000/leads/validation/:id |
| 4.10. Leads by Agent   | GET    | http://localhost:5000/leads/agent/:agent   |

#### 5. endpoints for judicial:

| Endpoint                   | VERB   | PATH                                       |
| -------------------------- | ------ | ------------------------------------------ |
| 5.1. Judicial List         | GET    | http://localhost:5000/judicials/           |
| 5.2. Judicial Id           | GET    | http://localhost:5000/judicials/:id        |
| 5.3. Judicial List by page | GET    | http://localhost:5000/judicials/page/:page |
| 5.4. Judicial Create       | POST   | http://localhost:5000/judicials/           |
| 5.5. Judicial Update       | PUT    | http://localhost:5000/judicials/:id        |
| 5.6. Judicial Delete       | DELETE | http://localhost:5000/judicials/:id        |

#### 6. endpoints for rol:

| Endpoint              | VERB   | PATH                                   |
| --------------------- | ------ | -------------------------------------- |
| 6.1. Rol List         | GET    | http://localhost:5000/roles/           |
| 6.2. Rol Id           | GET    | http://localhost:5000/roles/:id        |
| 6.3. Rol List by page | GET    | http://localhost:5000/roles/page/:page |
| 6.4. Rol Create       | POST   | http://localhost:5000/roles/           |
| 6.5. Rol Update       | PUT    | http://localhost:5000/roles/:id        |
| 6.6. Rol Delete       | DELETE | http://localhost:5000/roles/:id        |

#### Architecture:

This project is to base hexagonal architecture

1. infraestructure

1.1. OperationRepository

1.2. Example for user: UserOperation

2. Application:

2.1. Example for user: UserResponseDto

2.2. Interface Result

2.3. RepositoryBase: methos common

2.4. Example for user: RepositoryBase

2.5. Example for user: UserRepository

2.6. Example for user: UserUseCase

3. Domain:

3.1. Example for user: UserEntity

#### Los principios SOLID

```sh
Los 5 principios SOLID de diseño de aplicaciones de software son:

S – Single Responsibility Principle (SRP)
O – Open/Closed Principle (OCP)
L – Liskov Substitution Principle (LSP)
I – Interface Segregation Principle (ISP)
D – Dependency Inversion Principle (DIP)
```

Disminuir la dependencia entre capas, bajar el acoplamiento

#### Security:

AccessToken and refreshToken for implement the security

The tokens is send with the registers of the users

TIMEOUT: 1200000 = 20 minutes after this is neccesary refresh the token

```sh
errors.handler.ts
Middleware de manejo de errores que le envio al usuario:
static generic: metodo generico para generar errores que cosas le envio a los usuarios dependiendo del entorno
```

#### Some ligraries:

```sh
yenv: Environment Variables
BD: MYSQL:
```

```sh
Also is possible change the file env.yaml by your local database:
development:
  PORT: 3000
  DATABASE:
    MYSQL:
      HOST: localhost
      TYPE: mysql
      PORT: 3306
      DATABASE: crmagents
      USERNAME: root
      PASSWORD:
      SYNCHRONIZE: true
      ENTITIES: 'src/entities/*.entity.ts'

I suggest install xampp for simulate your server into local machine, and them init the server
```

#### Create Account in aws:

https://console.aws.amazon.com/iam/home?region=us-east-2#/users

RDS: database relational > MySQL > Dev/Test > Burstable classes (includes t classes)
