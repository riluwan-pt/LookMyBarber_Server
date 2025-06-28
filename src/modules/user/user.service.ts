import { prisma } from '../../config/db';

export const createUser = async (data: { name: string; email: string }) => {
  return prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const getUserByPhone = async (phone: string) => {
  return prisma.user.findUnique({ where: { phone } });
};

export const updateUser = async (id: string, data: { name?: string; email?: string }) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: string) => {
  return prisma.user.delete({ where: { id } });
};
