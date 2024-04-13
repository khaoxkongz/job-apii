"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLinkCompany = void 0;
const base_data_link_1 = require("../../../../../lib/base-data-link");
class DataLinkCompany extends base_data_link_1.BaseDataLink {
    constructor(db, dataModelCompany) {
        super(db);
        this.createCompany = async (data) => {
            return await this.db.company.create({
                data: this.dataModelCompany.createCompany(data),
                select: this.dataModelCompany.selectedCompanyInfo(),
            });
        };
        this.getCompanyById = async ({ companyId }) => {
            return await this.db.company.findUniqueOrThrow({
                where: { id: companyId },
                select: this.dataModelCompany.selectedCompanyInfo(),
            });
        };
        this.getAllCompanies = async () => {
            return await this.db.company.findMany({
                select: this.dataModelCompany.selectedCompanyInfo(),
            });
        };
        this.updateCompanyById = async ({ companyId }, data) => {
            const oldData = await this.getCompanyById({ companyId });
            return await this.db.company.update({
                where: { id: companyId },
                data: this.dataModelCompany.updateCompanyInfo(data, oldData),
                select: this.dataModelCompany.selectedCompanyInfo(),
            });
        };
        this.deleteCompanyById = async ({ companyId }) => {
            return await this.db.company.delete({
                where: { id: companyId },
                select: this.dataModelCompany.selectedCompanyInfo(),
            });
        };
        this.dataModelCompany = dataModelCompany;
    }
}
exports.DataLinkCompany = DataLinkCompany;
//# sourceMappingURL=data-links-company.js.map