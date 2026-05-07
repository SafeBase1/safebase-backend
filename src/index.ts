import Fastify from 'fastify';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.register(cors, { origin: true, credentials: true });

fastify.get('/api/employees', async () => {
  return prisma.employee.findMany();
});

fastify.put('/api/employees/:id', async (req) => {
  const { id } = req.params as { id: string };
  const data = req.body as any;
  return prisma.employee.upsert({ where: { id }, update: data, create: { id, ...data } });
});

fastify.delete('/api/employees/:id', async (req, reply) => {
  const { id } = req.params as { id: string };
  await prisma.employee.delete({ where: { id } });
  return reply.code(204).send();
});

fastify.get('/api/incidents', async () => {
  return prisma.incident.findMany();
});

fastify.put('/api/incidents/:id', async (req) => {
  const { id } = req.params as { id: string };
  const data = req.body as any;
  return prisma.incident.upsert({ where: { id }, update: data, create: { id, ...data } });
});

fastify.delete('/api/incidents/:id', async (req, reply) => {
  const { id } = req.params as { id: string };
  await prisma.incident.delete({ where: { id } });
  return reply.code(204).send();
});

const start = async () => {
  try {
    await prisma.$connect();
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
