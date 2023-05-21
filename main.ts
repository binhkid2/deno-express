// @deno-types="npm:@types/express@4.17.15"
import express from 'https://esm.sh/express@4.18.2'

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(8000);