import { prisma } from "./../config/prisma";

export function createUser(data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) {
  return prisma.user.create({
    data,
  });
}

export function getUser(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export function updateUser(
  id: number,
  data: {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
  }
) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}

export function getUsers(payload: { itemsPerPage: number; skip: number }) {
  return prisma.user.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      created_at: true,
      updated_at: true,
    },
    skip: payload.skip,
    take: payload.itemsPerPage,
  });
}
