import { createUser, getUsers } from "@/controllers/users";
import express from "express";

const route = express.Router();

route.get("/", getUsers);
route.post("/", createUser);

export default route;
