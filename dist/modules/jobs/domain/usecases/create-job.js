"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseCreateJob extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async (data) => {
            return await this.repo.createJob(data);
        };
    }
}
exports.default = UseCaseCreateJob;
//# sourceMappingURL=create-job.js.map