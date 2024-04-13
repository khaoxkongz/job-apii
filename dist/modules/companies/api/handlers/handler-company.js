"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerCompany = void 0;
const base_handlers_1 = require("../../../../lib/base-handlers");
class HandlerCompany extends base_handlers_1.BaseHandler {
    constructor(useCases) {
        super(useCases);
        this.createCompany = async (req, res) => {
            const { name, description, contactEmail, contactPhone } = req.body;
            return await this.useCases.createCompanyUseCase
                .execute({
                name,
                description,
                contactEmail,
                contactPhone,
            })
                .then((data) => {
                return res.status(201).json(data).end();
            })
                .catch((error) => {
                const errMsg = `failed to create data with email: ${contactEmail}`;
                console.error(`${errMsg}: ${error}`);
                return res.status(500).json({ message: 'Something went wrong' }).end();
            });
        };
        this.getCompanyById = async (req, res) => {
            const { id: companyId } = req.params;
            return await this.useCases.getCompanyByIdUseCase
                .execute({ companyId })
                .then((data) => {
                return res.status(200).json(data).end();
            })
                .catch((error) => {
                const errMsg = `failed to retrieve data with company id: ${companyId}`;
                console.error(`${errMsg}: ${error}`);
                if (error.code === 'P2025') {
                    return res.status(500).json({ message: error.message }).end();
                }
                return res.status(500).json({ message: 'Something went wrong' }).end();
            });
        };
        this.getAllCompanies = async (_req, res) => {
            return await this.useCases.getAllCompaniesUseCase
                .execute()
                .then((data) => {
                return res.status(200).json(data).end();
            })
                .catch((error) => {
                const errMsg = `failed to retrieve all data`;
                console.error(`${errMsg}: ${error}`);
                return res.status(500).json({ message: 'Something went wrong' }).end();
            });
        };
        this.updateCompanyById = async (req, res) => {
            const { id: companyId } = req.params;
            const { name, description, contactEmail, contactPhone } = req.body;
            return this.useCases.updateCompanyByIdUseCase
                .execute({ companyId }, { name, description, contactEmail, contactPhone })
                .then((data) => {
                return res.status(200).json(data).end();
            })
                .catch((error) => {
                const errMsg = `failed to update data`;
                console.error(`${errMsg}: ${error}`);
                if (error.code === 'P2025') {
                    return res.status(500).json({ message: error.message }).end();
                }
                return res.status(500).json({ message: 'Something went wrong' }).end();
            });
        };
        this.deleteCompanyById = async (req, res) => {
            const { id: companyId } = req.params;
            return this.useCases.deleteCompanyByIdUseCase
                .execute({ companyId })
                .then((data) => {
                return res.status(200).json(data).end();
            })
                .catch((error) => {
                const errMsg = `failed to delete data with id: ${companyId}`;
                console.error(`${errMsg}: ${error}`);
                if (error.code === 'P2025') {
                    return res.status(500).json({ message: error.message }).end();
                }
                return res.status(500).json({ message: 'Something went wrong' }).end();
            });
        };
    }
}
exports.HandlerCompany = HandlerCompany;
//# sourceMappingURL=handler-company.js.map