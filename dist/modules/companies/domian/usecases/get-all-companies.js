"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseGetAllCompanies = void 0;
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseGetAllCompanies extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async () => {
            return await this.repo.getAllCompanies();
        };
    }
}
exports.UseCaseGetAllCompanies = UseCaseGetAllCompanies;
//# sourceMappingURL=get-all-companies.js.map