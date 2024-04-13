"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bootstrap_job_1 = require("../../bootstrap/bootstrap-job");
const routerJob = express_1.default.Router();
routerJob.post('/', bootstrap_job_1.handlerJob.createJob);
routerJob.get('/', bootstrap_job_1.handlerJob.getAllJobs);
routerJob.get('/:id', bootstrap_job_1.handlerJob.getJobById);
routerJob.patch('/:id', bootstrap_job_1.handlerJob.updateJobById);
routerJob.delete('/:id', bootstrap_job_1.handlerJob.deleteJobById);
exports.default = routerJob;
//# sourceMappingURL=route-job.js.map