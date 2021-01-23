# REST API RNV MAP

# Install:

## Install node dependencies

```
npm install
```

## Build docker image

```
docker-compose up --build
```

# Contribute

## Start docker:

```
docker-compose up -d
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
  name: "I am a Location!"
}
```

- Update Location:

```
PUT /location/1
{
  name: "Change my name!"
}
```

- Update Location:

```
DELETE /location/1
```
