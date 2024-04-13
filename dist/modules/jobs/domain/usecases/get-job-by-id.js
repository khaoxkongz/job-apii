"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
class UseCaseGetJobById extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ jobId }) => {
            const data = await this.repo.getJobById({ jobId });
            const { id, title, description: jobDesc, location, salary, type, company } = data;
            const { name, description: companyDesc, contactEmail, contactPhone } = company;
            const newMapData = {
                id,
                title,
                type,
                description: jobDesc,
                location,
                salary,
                company: {
                    name,
                    description: companyDesc,
                    contactEmail,
                    contactPhone,
                },
            };
            return newMapData;
        };
    }
}
exports.default = UseCaseGetJobById;
//# sourceMappingURL=get-job-by-id.js.map