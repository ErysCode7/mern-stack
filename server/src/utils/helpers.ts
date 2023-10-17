import { Response } from "express";

export const customeErrorHandler = (res: Response) => {
  return res.status(500).json({ error: "Internal server error" });
};
