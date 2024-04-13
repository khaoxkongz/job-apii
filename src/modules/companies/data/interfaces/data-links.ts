import { ICompaniesData, ICompanyData, ICreateCompanyData, IUpdateCompanyData } from '../../domian/entities/company';
import { IWhereCompany } from '../../domian/usecases/utils/type';

export interface IDataLinkCompany {
  createCompany: (data: ICreateCompanyData) => Promise<ICompanyData>;
  getCompanyById: ({ companyId }: IWhereCompany) => Promise<ICompanyData>;
  getAllCompanies: () => Promise<ICompaniesData[]>;
  updateCompanyById: ({ companyId }: IWhereCompany, data: IUpdateCompanyData) => Promise<ICompanyData>;
  deleteCompanyById: ({ companyId }: IWhereCompany) => Promise<ICompanyData>;
}
