// src/controllers/userController.ts
import { Request, Response } from "express";
import * as userModel from "./../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const user = await userModel.createUser({
      first_name,
      last_name,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const user = await userModel.getUser(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { first_name, last_name, email, password } = req.body;
    const user = await userModel.updateUser(userId, {
      first_name,
      last_name,
      email,
      password,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id, 10);
    await userModel.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const { itemsPerPage = 10, skip = 0 } = req.query;
    const users = await userModel.getUsers({
      itemsPerPage: Number(itemsPerPage),
      skip: Number(skip),
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to list users" });
  }
};
