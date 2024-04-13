"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_usecases_1 = __importDefault(require("../../../../lib/base-usecases"));
const helper_1 = __importDefault(require("./utils/helper"));
class UseCaseGetAllJobs extends base_usecases_1.default {
    constructor(repo) {
        super(repo);
        this.execute = async ({ limit }) => {
            const limitNumeric = Number(limit);
            if (limit) {
                if (isNaN(limitNumeric)) {
                    throw new TypeError('require field string');
                }
            }
            const datas = await this.repo.getAllJobs({ limit: limitNumeric });
            const mapData = this.helperFunction.mapperArrayJobDto(datas);
            return mapData;
        };
        this.helperFunction = helper_1.default;
    }
}
exports.default = UseCaseGetAllJobs;
//# sourceMappingURL=get-all-jobs.js.map