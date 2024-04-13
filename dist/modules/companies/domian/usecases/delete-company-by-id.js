"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseDeleteCompanyById = void 0;
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseDeleteCompanyById extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ companyId }) => {
            return await this.repo.deleteCompanyById({ companyId });
        };
    }
}
exports.UseCaseDeleteCompanyById = UseCaseDeleteCompanyById;
//# sourceMappingURL=delete-company-by-id.js.map