import { prisma } from '../../config/db';

export const createUser = async (data: { name: string; email: string }) => {
  return prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};
