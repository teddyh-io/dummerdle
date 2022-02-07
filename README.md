# Dummerdle

Hey Govs! If you have heard of or played Wordle, listen up! Katie, Christine, Lizzie and I have come up with the Dummerdle, The Govs version of wordle!
[**Play Dummerdle**](https://dummerdle.teddyh.io/)

## Build and run
### To Run Locally:
Clone the repository and perform the following command line actions:

```bash
$> cd word-guessing-game
$> npm install
$> npm run start
```

### To build/run docker container:

```bash
$> docker build -t game .
$> docker run -d -p 3000:3000 game
```

Open [http://localhost:3000](http://localhost:3000) in browser.

## Original game created by:
- https://github.com/cwackerfuss/react-wordle
