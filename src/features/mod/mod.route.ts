import { Router } from "express";
import { ModGetRequest } from "./mod.types";

const route = Router();

//get mod details
route.get("/", (req: ModGetRequest, res) => {
    req.body;
});

//create a new mod query based on mod data
route.post("/:id", (req, res) => {});

export default route;
