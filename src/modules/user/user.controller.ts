import { Request, Response } from 'express';
import { createUser, getAllUsers } from './user.service';

export const create = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.json(user);
};

export const getAll = async (_req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};
