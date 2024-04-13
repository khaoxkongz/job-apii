import { DbCompanyModel, DbJobModel } from '../../../../../lib/prisma';
import { ICompanyDataDto } from '../../../../companies/api/interfaces/dto/dto-company';

export interface IJobDataDto extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {}

export interface IJobWithCompanyDataDto extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {
  company: ICompanyDataDto;
}

export interface IJobsWithCompanyDataDto extends Omit<DbJobModel, 'companyId' | 'createdAt' | 'updatedAt'> {
  company: ICompanyDataDto;
}

export interface ICreateJobDataDto extends Omit<DbJobModel, 'id' | 'companyId' | 'createdAt' | 'updatedAt'> {
  company: Pick<DbCompanyModel, 'id'>;
}

export interface IUpdateJobDataDto extends Partial<Omit<DbJobModel, 'id' | 'companyId' | 'createdAt' | 'updatedAt'>> {}

export const foo: IJobDataDto = {
  id: '',
  title: '',
  description: '',
  type: 'PART_TIME',
  location: 'BANGKOK',
  salary: 1000000,
};

export const bar: ICreateJobDataDto = {
  title: '',
  description: '',
  type: 'CONTRACTOR',
  location: 'BANGKOK',
  salary: 50000,
  company: {
    id: '',
  },
};

export const baz: IUpdateJobDataDto = {};

export const relation: IJobWithCompanyDataDto = {
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

export const arrayRelation: IJobsWithCompanyDataDto[] = [
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
