import {
  ICompaniesDataDto,
  ICreateCompanyDataDto,
  IUpdateCompanyDataDto,
} from '../../../api/interfaces/dto/dto-company';
import { IWhereCompany } from '../../usecases/utils/type';

export interface IUseCaseCreateCompany {
  execute: (data: ICreateCompanyDataDto) => Promise<ICompaniesDataDto>;
}

export interface IUseCaseGetCompanyById {
  execute: ({ companyId }: IWhereCompany) => Promise<ICompaniesDataDto>;
}

export interface IUseCaseGetAllCompanies {
  execute: () => Promise<ICompaniesDataDto[]>;
}

export interface IUseCaseUpdateCompanyById {
  execute: ({ companyId }: IWhereCompany, data: IUpdateCompanyDataDto) => Promise<ICompaniesDataDto>;
}

export interface IUseCaseDeleteCompanyById {
  execute: ({ companyId }: IWhereCompany) => Promise<ICompaniesDataDto>;
}

interface IUseCasesCompany {
  createCompanyUseCase: IUseCaseCreateCompany;
  getCompanyByIdUseCase: IUseCaseGetCompanyById;
  getAllCompaniesUseCase: IUseCaseGetAllCompanies;
  updateCompanyByIdUseCase: IUseCaseUpdateCompanyById;
  deleteCompanyByIdUseCase: IUseCaseDeleteCompanyById;
}

export { IUseCasesCompany };
