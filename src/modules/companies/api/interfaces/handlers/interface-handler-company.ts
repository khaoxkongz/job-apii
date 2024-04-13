import { RequestHandler } from 'express';
import { ICompaniesDataDto, ICreateCompanyDataDto, IUpdateCompanyDataDto } from '../dto/dto-company';

export interface IHandlerCompany {
  createCompany: RequestHandler<{}, ICompaniesDataDto | { message: string }, ICreateCompanyDataDto>;
  getCompanyById: RequestHandler<{ id: string }, ICompaniesDataDto | { message: string }>;
  getAllCompanies: RequestHandler<{}, ICompaniesDataDto[] | { message: string }>;
  updateCompanyById: RequestHandler<{ id: string }, ICompaniesDataDto | { message: string }, IUpdateCompanyDataDto>;
  deleteCompanyById: RequestHandler<{ id: string }, ICompaniesDataDto | { message: string }>;
}
