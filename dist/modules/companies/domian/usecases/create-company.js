"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseCreateCompany = void 0;
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseCreateCompany extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async (data) => {
            return await this.repo.createCompany(data);
        };
    }
}
exports.UseCaseCreateCompany = UseCaseCreateCompany;
//# sourceMappingURL=create-company.js.map