import { DbCompanyModel, DbJobModel } from '../../../../lib/prisma';
import { ICompanyData } from '../../../companies/domian/entities/company';

export interface IJobData extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {}

export interface IJobWithCompanyData extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {
  company: ICompanyData;
}

export interface IJobsWithCompanyData extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {
  company: ICompanyData;
}

export interface ICreateJobData extends Omit<DbJobModel, 'id' | 'companyId' | 'createdAt' | 'updatedAt'> {
  company: Pick<DbCompanyModel, 'id'>;
}

export interface IUpdateJobData extends Partial<Omit<DbJobModel, 'id' | 'companyId' | 'createdAt' | 'updatedAt'>> {}

export const foo: IJobData = {
  id: '',
  title: '',
  description: '',
  type: 'PART_TIME',
  location: 'BANGKOK',
  salary: 1000000,
};

export const bar: ICreateJobData = {
  title: '',
  description: '',
  type: 'CONTRACTOR',
  location: 'BANGKOK',
  salary: 50000,
  company: {
    id: '',
  },
};

export const baz: IUpdateJobData = {};

export const relation: IJobWithCompanyData = {
  id: '',
  title: '',
  description: '',
  type: 'FULL_TIME',
  location: 'BANGKOK',
  salary: 18000,
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
};

export const arrayRelation: IJobsWithCompanyData[] = [
  {
    id: '',
    title: '',
    description: '',
    type: 'FULL_TIME',
    location: 'BANGKOK',
    salary: 18000,
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  },
  {
    id: '',
    title: '',
    description: '',
    type: 'FULL_TIME',
    location: 'BANGKOK',
    salary: 18000,
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  },
];
