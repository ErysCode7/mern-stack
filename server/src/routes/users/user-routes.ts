import express from "express";
import UserModel from "../../models/users/user-model";

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// route.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   const findUserId = users.find((user) => user.id === id);

//   if (!findUserId) {
//     res.status(404).send({ message: "No users found!" });
//   }

//   res.status(200).send(findUserId);
// });

route.post("/", async (req, res) => {
  try {
    const newData = req.body;
    // Create a new user document using the UserModel and save it to the database
    const user = new UserModel(newData);
    const savedUser = user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// route.put("/:id", (req, res) => {});

// route.delete("/:id", (req, res) => {});

export default route;
