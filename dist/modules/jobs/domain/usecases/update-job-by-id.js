"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseUpdateJobById extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ jobId }, data) => {
            return await this.repo.updateJobById({ jobId }, data);
        };
    }
}
exports.default = UseCaseUpdateJobById;
//# sourceMappingURL=update-job-by-id.js.map