import { Request, Response } from 'express';
import { createUser, getAllUsers, getUserById, getUserByEmail, getUserByPhone, updateUser, deleteUser } from './user.service';

export const create = async (req: Request, res: Response) => {
  try{
    const user = await createUser(req.body);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try{
    const users = await getAllUsers();
    res.json(users);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const UserById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const user = await getUserById(id);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const UserByEmail = async (req: Request, res: Response) => {
  try{
    const { email } = req.params;
    const user = await getUserByEmail(email);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const UserByPhone = async (req: Request, res: Response) => {
  try{
    const { phone } = req.params;
    const user = await getUserByPhone(phone);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const user = await updateUser(id, req.body);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  }
  catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
