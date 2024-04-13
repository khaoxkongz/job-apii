"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bootstrap_company_1 = require("../../bootstrap/bootstrap-company");
const routerCompany = (0, express_1.Router)();
routerCompany.post('/', bootstrap_company_1.handlerCompany.createCompany);
routerCompany.get('/', bootstrap_company_1.handlerCompany.getAllCompanies);
routerCompany.get('/:id', bootstrap_company_1.handlerCompany.getCompanyById);
routerCompany.patch('/:id', bootstrap_company_1.handlerCompany.updateCompanyById);
routerCompany.delete('/:id', bootstrap_company_1.handlerCompany.deleteCompanyById);
exports.default = routerCompany;
//# sourceMappingURL=route-company.js.map