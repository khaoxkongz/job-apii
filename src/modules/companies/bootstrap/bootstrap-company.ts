import postgres from '../../../lib/prisma';

import { DataLinkCompany } from '../data/sources/data-links/data-links-company';
import { DataModelCompany } from '../data/sources/data-models/data-models-company';

import { RepositoryCompany } from '../domian/repositories/repository-company';

import { UseCaseCreateCompany } from '../domian/usecases/create-company';
import { UseCaseDeleteCompanyById } from '../domian/usecases/delete-company-by-id';
import { UseCaseGetAllCompanies } from '../domian/usecases/get-all-companies';
import { UseCaseGetCompanyById } from '../domian/usecases/get-company-by-id';
import { UseCaseUpdateCompanyById } from '../domian/usecases/update-company-by-id';

import { HandlerCompany } from '../api/handlers/handler-company';

const dataModelCompany = new DataModelCompany();
const dataLinkCompany = new DataLinkCompany(postgres, dataModelCompany);

const repoCompany = new RepositoryCompany(dataLinkCompany);

const usecaseCreateCompany = new UseCaseCreateCompany(repoCompany);
const usecaseGetCompanyById = new UseCaseGetCompanyById(repoCompany);
const usecaseGetAllCompanies = new UseCaseGetAllCompanies(repoCompany);
const usecaseUpdateCompanyById = new UseCaseUpdateCompanyById(repoCompany);
const usecaseDeleteCompanyById = new UseCaseDeleteCompanyById(repoCompany);

const useCasesCompany = {
  createCompanyUseCase: usecaseCreateCompany,
  getCompanyByIdUseCase: usecaseGetCompanyById,
  getAllCompaniesUseCase: usecaseGetAllCompanies,
  updateCompanyByIdUseCase: usecaseUpdateCompanyById,
  deleteCompanyByIdUseCase: usecaseDeleteCompanyById,
};

export const handlerCompany = new HandlerCompany(useCasesCompany);
