"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseUpdateCompanyById = void 0;
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseUpdateCompanyById extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ companyId }, data) => {
            return await this.repo.updateCompanyById({ companyId }, data);
        };
    }
}
exports.UseCaseUpdateCompanyById = UseCaseUpdateCompanyById;
//# sourceMappingURL=update-company-by-id.js.map