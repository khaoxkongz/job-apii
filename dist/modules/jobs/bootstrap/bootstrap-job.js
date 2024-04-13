"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerJob = void 0;
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const data_link_job_1 = __importDefault(require("../data/sources/data-link/data-link-job"));
const data_model_job_1 = __importDefault(require("../data/sources/data-model/data-model-job"));
const repository_job_1 = __importDefault(require("../domain/repository/repository-job"));
const create_job_1 = __importDefault(require("../domain/usecases/create-job"));
const delete_job_by_id_1 = __importDefault(require("../domain/usecases/delete-job-by-id"));
const get_all_jobs_1 = __importDefault(require("../domain/usecases/get-all-jobs"));
const get_job_by_id_1 = __importDefault(require("../domain/usecases/get-job-by-id"));
const update_job_by_id_1 = __importDefault(require("../domain/usecases/update-job-by-id"));
const handler_job_1 = __importDefault(require("../api/handler/handler-job"));
const dataModelJob = new data_model_job_1.default();
const dataLinkJob = new data_link_job_1.default(prisma_1.default, dataModelJob);
const repoJob = new repository_job_1.default(dataLinkJob);
const usecaseCreateJob = new create_job_1.default(repoJob);
const usecaseGetJobById = new get_job_by_id_1.default(repoJob);
const usecaseGetAllJobs = new get_all_jobs_1.default(repoJob);
const usecaseUpdateJobById = new update_job_by_id_1.default(repoJob);
const usecaseDeleteJobById = new delete_job_by_id_1.default(repoJob);
const useCasesJob = {
    createJobUseCase: usecaseCreateJob,
    getJobByIdUseCase: usecaseGetJobById,
    getAllJobUseCase: usecaseGetAllJobs,
    updateJobByIdUseCase: usecaseUpdateJobById,
    deleteJobByIdUseCase: usecaseDeleteJobById,
};
exports.handlerJob = new handler_job_1.default(useCasesJob);
//# sourceMappingURL=bootstrap-job.js.map