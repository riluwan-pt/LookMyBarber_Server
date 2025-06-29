import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBarshops = async (req: Request, res: Response) => {
  try {
    const barshops = await prisma.barshop.findMany();
    res.status(200).json(barshops);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch barbershops' });
  }
};

export const getBarshopById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const barshop = await prisma.barshop.findUnique({
      where: { id: String(id) },
    });

    if (!barshop) {
      res.status(404).json({ error: 'Barbershop not found' });
      return;
    }

    res.status(200).json(barshop);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch barbershop' });
  }
};

export const createBarshop = async (req: Request, res: Response): Promise<void> => {
  const { userId, name, address, city, state, zipCode, phone } = req.body;

  if (!userId || !name || !address || !city || !state || !zipCode || !phone) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const newBarshop = await prisma.barshop.create({
      data: {
        userId,
        name,
        address,
        city,
        state,
        zipCode,
        phone,
      },
    });

    res.status(201).json(newBarshop);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create barbershop' });
  }
};



export const updateBarshop = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updated = await prisma.barshop.update({
      where: { id: String(id) },
      data,
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update barbershop' });
  }
};


export const deleteBarshop = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.barshop.delete({
      where: { id: String(id) },
    });

    res.status(204).send(); 
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete barbershop' });
  }
};

