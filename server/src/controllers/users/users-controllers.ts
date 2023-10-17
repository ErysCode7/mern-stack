import { UserModel } from "@/models/users";
import { customeErrorHandler } from "@/utils/helpers";
import { Request, Response } from "express";

// GETTING ALL THE USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});

    if (!users) {
      res.status(404).json({ message: "No users found!" });
    }

    res.status(200).json(users);
  } catch (error) {
    customeErrorHandler(res);
  }
};

// CREATING A SINGLE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const newData = req.body;
    // Create a new user document using the UserModel and save it to the database
    const user = new UserModel(newData);

    const savedUser = user.save();
    if (savedUser) {
      res.status(201).json(savedUser);
    } else {
      res.status(400).json({ message: "Creating user failed!" });
    }
  } catch (error) {
    customeErrorHandler(res);
  }
};
