import { ICompaniesData, ICompanyData, ICreateCompanyData, IUpdateCompanyData } from '../../entities/company';
import { IWhereCompany } from '../../usecases/utils/type';

export interface IRepositoryCompany {
  createCompany: (data: ICreateCompanyData) => Promise<ICompanyData>;
  getCompanyById: ({ companyId }: IWhereCompany) => Promise<ICompanyData>;
  getAllCompanies: () => Promise<ICompaniesData[]>;
  updateCompanyById: ({ companyId }: IWhereCompany, data: IUpdateCompanyData) => Promise<ICompanyData>;
  deleteCompanyById: ({ companyId }: IWhereCompany) => Promise<ICompanyData>;
}
