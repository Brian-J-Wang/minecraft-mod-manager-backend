import express from "express";
import { modRoute } from "./features/mod";
import { modsRoute } from "./features/mods";

const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use("/mod", modRoute);
app.use("/mods", modsRoute);

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

export default app;
