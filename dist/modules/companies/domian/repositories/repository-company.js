"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryCompany = void 0;
const base_repositories_1 = require("../../../../lib/base-repositories");
class RepositoryCompany extends base_repositories_1.BaseRepository {
    constructor(link) {
        super(link);
        this.createCompany = async (data) => {
            return await this.link.createCompany(data);
        };
        this.getCompanyById = async ({ companyId }) => {
            return await this.link.getCompanyById({ companyId });
        };
        this.getAllCompanies = async () => {
            return await this.link.getAllCompanies();
        };
        this.updateCompanyById = async ({ companyId }, data) => {
            return await this.link.updateCompanyById({ companyId }, data);
        };
        this.deleteCompanyById = async ({ companyId }) => {
            return await this.link.deleteCompanyById({ companyId });
        };
    }
}
exports.RepositoryCompany = RepositoryCompany;
//# sourceMappingURL=repository-company.js.map