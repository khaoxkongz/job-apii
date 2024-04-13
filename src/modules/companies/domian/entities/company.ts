import { DbCompanyModel } from '../../../../lib/prisma';

export interface ICompanyData extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICompaniesData extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICreateCompanyData extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateCompanyData extends Partial<Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'>> {}

export const foo: ICompanyData = {
  name: '',
  description: '',
  contactEmail: '',
  contactPhone: '',
};

export const bar: ICreateCompanyData = {
  name: '',
  description: '',
  contactEmail: '',
  contactPhone: '',
};

export const baz: IUpdateCompanyData = {};
