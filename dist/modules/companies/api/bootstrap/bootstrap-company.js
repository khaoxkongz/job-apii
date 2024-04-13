"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerCompany = void 0;
const prisma_1 = __importDefault(require("../../../../lib/prisma"));
const data_links_company_1 = require("../../data/sources/data-links/data-links-company");
const data_models_company_1 = require("../../data/sources/data-models/data-models-company");
const repository_company_1 = require("../../domian/repositories/repository-company");
const create_company_1 = require("../../domian/usecases/create-company");
const delete_company_by_id_1 = require("../../domian/usecases/delete-company-by-id");
const get_all_companies_1 = require("../../domian/usecases/get-all-companies");
const get_company_by_id_1 = require("../../domian/usecases/get-company-by-id");
const update_company_by_id_1 = require("../../domian/usecases/update-company-by-id");
const handler_company_1 = require("../handlers/handler-company");
const dataModelCompany = new data_models_company_1.DataModelCompany();
const dataLinkCompany = new data_links_company_1.DataLinkCompany(prisma_1.default, dataModelCompany);
const repoCompany = new repository_company_1.RepositoryCompany(dataLinkCompany);
const usecaseCreateCompany = new create_company_1.UseCaseCreateCompany(repoCompany);
const usecaseGetCompanyById = new get_company_by_id_1.UseCaseGetCompanyById(repoCompany);
const usecaseGetAllCompanies = new get_all_companies_1.UseCaseGetAllCompanies(repoCompany);
const usecaseUpdateCompanyById = new update_company_by_id_1.UseCaseUpdateCompanyById(repoCompany);
const usecaseDeleteCompanyById = new delete_company_by_id_1.UseCaseDeleteCompanyById(repoCompany);
const useCasesCompany = {
    createCompanyUseCase: usecaseCreateCompany,
    getCompanyByIdUseCase: usecaseGetCompanyById,
    getAllCompaniesUseCase: usecaseGetAllCompanies,
    updateCompanyByIdUseCase: usecaseUpdateCompanyById,
    deleteCompanyByIdUseCase: usecaseDeleteCompanyById,
};
exports.handlerCompany = new handler_company_1.HandlerCompany(useCasesCompany);
//# sourceMappingURL=bootstrap-company.js.map