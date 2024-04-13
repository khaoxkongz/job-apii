import { Company, Job, PrismaClient } from '@prisma/client';

export type DbJobModel = Job;
export type DbCompanyModel = Company;

export type DbDriver = PrismaClient;

const prisma = new PrismaClient();

export default prisma;
