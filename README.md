# comments-main

The comments-section service for SoundClone

## Related Projects

  - https://github.com/SoundClone/BottomTopBar
  - https://github.com/SoundClone/Main-Media-Player
  - https://github.com/SoundClone/Post-Comments-and-Buttons

## Requirements

- MongoDB 4.2.2 or later
- NodeJS 8 or later
- Brain

## Usage

### Installing Dependencies

From within the root directory:

```sh
$ npm i
```

### Seeding database

1. Start MongoDB shell session

```sh
$ mongo
```
2. Create the ```soundclone``` database

```sh
> use soundclone
```

You can now run the seed script in a new terminal with

```sh
$ npm run mongo-seed
```

### Run app

Bundle files & start server

```sh
$ npm run react-prod
$ npm run start
```