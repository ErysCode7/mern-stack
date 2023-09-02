import express from "express";

const route = express.Router();

type Users = {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
};

const users: Users[] = [
  {
    id: 1,
    name: "Jay",
    age: 22,
    isMarried: false,
  },
  {
    id: 2,
    name: "Dianna",
    age: 26,
    isMarried: true,
  },
  {
    id: 3,
    name: "Joy",
    age: 21,
    isMarried: false,
  },
];

route.get("/", (req, res) => {
  res.status(200).json(users);
  // res.json({ message: "Hello from users route" });
});

route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const findUserId = users.find((user) => user.id === id);

  if (!findUserId) {
    res.status(404).send({ message: "No users found!" });
  }

  res.status(200).send(findUserId);
});

route.post("/", (req, res) => {
  const newData = req.body;
  res.status(201).send(newData);
});

route.put("/:id", (req, res) => {});

route.delete("/:id", (req, res) => {});

export default route;
