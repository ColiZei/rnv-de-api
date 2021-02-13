# REST API RNV MAP

# Install:

## Install node dependencies

```
npm install
```

## Set environment variables

Copy .env.example to .env and set the environment variables.

# Contribute

## Start docker:

```
docker-compose up -d
```

## Initialise Database and add dummy data:

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Start in Dev mode:

```
npm run dev
```

## Stop docker:

```
docker-compose down
```

## Access adminer

```
http://localhost:8080
```

# Endpoint examples:

- Get all Locations:

```
GET /locations/
```

- Get Location:

```
GET /location/2
```

- Add Location:

```
POST /location/
{
  name: "I am a Location!",
  ...
}
```

- Update Location:

```
PUT /location/1
{
  name: "Change my name!",
  ...
}
```

- Update Location:

```
DELETE /location/1
```
