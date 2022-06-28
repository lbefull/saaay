# Manual

## Environment

- NodeJS 16.13.1
- NPM 8.1.2
- NestJS 8.2.0
- Neo4j 4.2.15
- Quasar 2.5.5

## 1. git clone

```shell
git clone https://github.com/lbefull/saaay.git
```

## 2. Front End

### Install Quasar CLI

```shell
yarn global add @quasar/cli
```

### Build files

```shell
cd front-end
yarn
quasar build
```

### Run Nginx Deployment

```shell
docker run --name say/front-end -p 8080:80 -v YOUR_BUILD_DIST_DIRECTORY:/usr/share/nginx/html:ro -d nginx
```

## 3. Back End

### Run Neo4j

```shell
docker run -v YOUR_NEO4J_DATA_DIRECTORY:/data -d -p7474:7474 -p7687:7687 -e NEO4J_AUTH=neo4j/password --name say-neo4j neo4j
```

### Build files and Run

```shell
cd back-end
docker build -t say-back-end .
```
