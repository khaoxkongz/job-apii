"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseGetCompanyById = void 0;
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseGetCompanyById extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ companyId }) => {
            return await this.repo.getCompanyById({ companyId });
        };
    }
}
exports.UseCaseGetCompanyById = UseCaseGetCompanyById;
//# sourceMappingURL=get-company-by-id.js.map