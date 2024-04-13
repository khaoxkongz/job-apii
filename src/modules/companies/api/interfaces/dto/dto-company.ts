import { DbCompanyModel } from '../../../../../lib/prisma';

export interface ICompanyDataDto extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICompaniesDataDto extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICreateCompanyDataDto extends Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateCompanyDataDto extends Partial<Omit<DbCompanyModel, 'id' | 'createdAt' | 'updatedAt'>> {}

export const foo: ICompanyDataDto = {
  name: '',
  description: '',
  contactEmail: '',
  contactPhone: '',
};

export const bar: ICreateCompanyDataDto = {
  name: '',
  description: '',
  contactEmail: '',
  contactPhone: '',
};

export const baz: IUpdateCompanyDataDto = {};
