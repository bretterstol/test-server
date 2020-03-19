const express = require("express");

const {get, set} = require('./redis');

const port = 4000;

const app = express();

app.get("/", async (req, res) => {
    const tallet = await get("halla");
    const svar = await set(tallet + 1)
    res.send(`Antall ganger: ${svar}`);
});

app.listen(port, () => console.log(`Listen to port: ${port}`));