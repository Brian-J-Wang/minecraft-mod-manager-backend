import z from "zod";
import { ModRequestBodySchema } from "./mod.zod";
import { Request } from "express";

export type ModGetRequest = Request<
    {},
    {},
    z.infer<typeof ModRequestBodySchema>
>;
